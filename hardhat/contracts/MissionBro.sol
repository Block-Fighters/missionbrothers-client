// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './Token.sol';

/**************************************************************************************************************************************************
 * 1. registerMission: 미션을 등록하는 함수 => 미션 이름, 등록하는 사람, 1인당 참가 금액, 등록 시작 시간, 등록 마감 시간, 미션 마감 시간, 미션 내용을 입력
 * 2. participateInMission: 참가자가 미션에 토큰으로 참여하는 함수 => 미션 ID를 입력받고, 참가자는 해당 미션에 정확한 참가 금액을 지불하여 참여(토큰으로 지불).
 * 3. getMissionDetails: 미션의 상세 정보, 참가자가 참가할 때 사용한 총 토큰 수량, 참가자 수 등을 보여주는 view 함수.
 * 4. distributeRewards: 미션이 마감되자 마자 보상을 참가자에게 분배하는 함수 => 미션 ID를 입력받고, 참가자에게는 참여한 토큰 수량에 기반하여 분배(1,2,3등 또는 공동분배).
 * 5. distributeRewardsTopThree : 1,2,3등으로 보상할 수 있는 함수
 * 6. distributeRewardsFair : 모든 참여자가 공평하게 분배
 * 7. hasParticipated : 참가자가 이미 미션에 참여했는지 확인
 **************************************************************************************************************************************************/

contract MissionContract is Ownable, ReentrancyGuard {
  using SafeMath for uint256;
  Token public missionToken; // 미션토큰 인스턴스로 호출
  uint256 public constant MISSION_REGISTER_FEE = 0.01 ether; // 미션 등록비용(우리가 먹을거임)
  uint256 public constant REWARD_PERCENTAGE = 95;
  enum RewardDistributionMethod {
    TopThree,
    Fair
  }

  struct Mission {
    string title;
    address creator;
    uint256 participationAmount;
    uint256 registrationStartTime;
    uint256 registrationEndTime; // 등록마감과 동시에 미션 시작
    uint256 missionEndTime;
    string details; // 미션내용
    uint256 totalTokens;
    uint256 participantsCount;
    address[] participantAddresses;
    mapping(address => uint256) participantTokens;
    bool isClosed;
    RewardDistributionMethod rewardMethod;
  }

  mapping(uint256 => Mission) public missions;
  mapping(uint256 => mapping(address => bool)) public hasParticipated; // 중복참여 방지
  uint256 public missionCount;

  // event -> emit 짝궁
  event MissionRegistered(uint256 missionId);
  event MissionParticipated(uint256 missionId, address participant);
  event MissionClosed(uint256 missionId, uint256[] rewards);

  // Mission 토큰
  constructor(Token _missionToken) {
    missionToken = _missionToken;
  }

  // 미션 등록 함수(1이더 필요함)
  function registerMission(
    string memory _title,
    uint256 _participationAmount,
    uint256 _registrationStartTime,
    uint256 _registrationEndTime,
    uint256 _missionEndTime,
    string memory _details,
    RewardDistributionMethod _rewardMethod
  ) public payable {
    // 시간맞지 않으면 등록 안댐
    require(
      _registrationStartTime < _registrationEndTime &&
        _registrationEndTime < _missionEndTime,
      'Invalid registration time'
    );
    // 1이더 안되면 돈이 충분하지 않아 등록 안댐
    require(msg.value == MISSION_REGISTER_FEE, 'Not enough');
    missionCount++;
    Mission storage newMission = missions[missionCount];
    newMission.title = _title;
    newMission.creator = msg.sender;
    newMission.participationAmount = _participationAmount;
    newMission.registrationStartTime = _registrationStartTime;
    newMission.registrationEndTime = _registrationEndTime;
    newMission.missionEndTime = _missionEndTime;
    newMission.details = _details;
    newMission.isClosed = false;
    newMission.rewardMethod = _rewardMethod;

    emit MissionRegistered(missionCount);
  }

  // 참가자가 미션에 참여하는 함수(미션 등록할 때 설정한 금액만큼 토큰이 사용된다)
  function participateInMission(uint256 _missionId) public {
    Mission storage mission = missions[_missionId];
    require(mission.creator != address(0), 'Mission does not exist');
    require(mission.isClosed == false, 'Mission is closed');
    require(
      hasParticipated[_missionId][msg.sender] == false,
      'Already participated'
    );

    // 토큰을 전송받은 사용자의 주소
    address participant = msg.sender;

    // 참여에 필요한 토큰 수량 계산
    uint256 requiredTokens = mission.participationAmount;

    // 사용자의 토큰 잔액 확인
    uint256 userTokenBalance = missionToken.balanceOf(participant);
    require(userTokenBalance >= requiredTokens, 'Insufficient token balance');

    // 5%의 수수료 계산
    uint256 feeTokens = requiredTokens.mul(5).div(100);
    // 참가자에게 지급할 토큰 계산
    uint256 participantTokens = requiredTokens.sub(feeTokens);

    // 토큰 전송
    missionToken.transferFrom(participant, address(this), requiredTokens);
    missionToken.transfer(mission.creator, feeTokens);

    // 미션 정보 업데이트
    mission.totalTokens = mission.totalTokens.add(participantTokens);
    mission.participantsCount = mission.participantsCount.add(1);
    mission.participantAddresses.push(participant);
    mission.participantTokens[participant] = participantTokens;
    hasParticipated[_missionId][participant] = true;

    emit MissionParticipated(_missionId, participant);
  }

  // 미션 정보 보여주는 함수(참가자가 참여하면 참가자수, 토탈 금액(토큰) 보임)
  function getMissionDetails(
    uint256 _missionId
  )
    public
    view
    returns (
      string memory title,
      address creator,
      uint256 participationAmount,
      uint256 registrationStartTime,
      uint256 registrationEndTime,
      uint256 missionEndTime,
      string memory details,
      uint256 totalTokens,
      uint256 participantsCount,
      bool isClosed
    )
  {
    Mission storage mission = missions[_missionId];
    require(mission.creator != address(0), 'Mission does not exist');

    return (
      mission.title,
      mission.creator,
      mission.participationAmount,
      mission.registrationStartTime,
      mission.registrationEndTime,
      mission.missionEndTime,
      mission.details,
      mission.totalTokens,
      mission.participantsCount,
      mission.isClosed
    );
  }

  // 보상분배 함수
  function distributeRewards(uint256 _missionId) public onlyOwner {
    Mission storage mission = missions[_missionId];
    require(mission.creator != address(0), 'Mission does not exist');
    require(mission.isClosed == false, 'Mission is closed');
    require(
      block.timestamp > mission.missionEndTime,
      'Mission is still active'
    );

    // 미션 참가자 정보 가져오기
    address[] storage participants = mission.participantAddresses;
    uint256 participantsCount = mission.participantsCount;

    // 참가자들에게 분배할 총 보상 계산
    uint256 totalRewards = mission.totalTokens.mul(REWARD_PERCENTAGE).div(100);

    // 보상 분배 메소드에 따라 분배 수행
    uint256[] memory rewards;
    if (mission.rewardMethod == RewardDistributionMethod.TopThree) {
      rewards = distributeRewardsTopThree(
        participants,
        participantsCount,
        totalRewards
      );
    } else if (mission.rewardMethod == RewardDistributionMethod.Fair) {
      rewards = distributeRewardsFair(
        participants,
        participantsCount,
        totalRewards
      );
    } else {
      revert('Invalid reward distribution method');
    }

    // 보상을 각 참가자에게 전송
    for (uint256 i = 0; i < participantsCount; i++) {
      address participant = participants[i];
      uint256 reward = rewards[i];
      missionToken.transfer(participant, reward);
    }
    // 미션을 종료 상태로 변경
    mission.isClosed = true;
    emit MissionClosed(_missionId, rewards);
  }

  // Top 3 참가자에게 균등하게 보상 분배
  function distributeRewardsTopThree(
    address[] storage,
    uint256 participantsCount,
    uint256 totalRewards
  ) internal pure returns (uint256[] memory) {
    uint256[] memory rewards = new uint256[](participantsCount);

    if (participantsCount >= 3) {
      // 상위 3명에게 각각 50%, 30%, 20% 분배
      uint256 reward1 = totalRewards.mul(50).div(100);
      uint256 reward2 = totalRewards.mul(30).div(100);
      uint256 reward3 = totalRewards.mul(20).div(100);

      rewards[0] = reward1;
      rewards[1] = reward2;
      rewards[2] = reward3;
    } else if (participantsCount == 2) {
      // 상위 2명에게 각각 60%, 40% 분배
      uint256 reward1 = totalRewards.mul(60).div(100);
      uint256 reward2 = totalRewards.mul(40).div(100);

      rewards[0] = reward1;
      rewards[1] = reward2;
    } else if (participantsCount == 1) {
      // 상위 1명에게 100% 분배
      rewards[0] = totalRewards;
    }
    return rewards;
  }

  // 모든 참가자에게 균등하게 보상 분배
  function distributeRewardsFair(
    address[] storage,
    uint256 participantsCount,
    uint256 totalRewards
  ) internal pure returns (uint256[] memory) {
    uint256[] memory rewards = new uint256[](participantsCount);

    if (participantsCount > 0) {
      // 모든 참가자에게 동일한 보상 분배
      uint256 rewardPerParticipant = totalRewards.div(participantsCount);

      for (uint256 i = 0; i < participantsCount; i++) {
        rewards[i] = rewardPerParticipant;
      }
    }
    return rewards;
  }

  receive() external payable {
    require(msg.value > 0, 'Invalid value');
  }

  function withdraw() external onlyOwner nonReentrant {
    payable(owner()).transfer(address(this).balance);
  }
}
