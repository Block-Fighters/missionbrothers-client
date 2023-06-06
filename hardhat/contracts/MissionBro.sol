// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Token.sol";
/*********************************************************
* 1. registerMission: 미션을 등록하는 함수 => 미션 이름, 등록하는 사람, 1인당 참가 금액, 등록 시작 시간, 등록 마감 시간, 미션 마감 시간, 미션 내용을 입력
* 2. participateInMission: 참가자가 미션에 토큰으로 참여하는 함수 => 미션 ID를 입력받고, 참가자는 해당 미션에 정확한 참가 금액을 지불하여 참여(토큰으로 지불).
* 3. getMissionDetails: 미션의 상세 정보, 참가자가 참가할 때 사용한 총 토큰 수량, 참가자 수 등을 보여주는 view 함수.
* 4. distributeRewards: 미션이 마감되자 마자 보상을 참가자에게 분배하는 함수 => 미션 ID를 입력받고, 참가자에게는 참여한 토큰 수량에 기반하여 분배.
**********************************************************/

contract MissionContract {

    using SafeMath for uint256;
    Token public missionToken; // 미션토큰 인스턴스로 호출
    uint256 public constant MISSION_REGISTER_FEE = 1 ether; // 미션등록 비용

    struct Mission {
        string title;
        address creator; // 미션 오픈하는 어드레스
        uint256 participationAmount;  // 참가비용 설정
        uint256 registrationStartTime;
        uint256 registrationEndTime; // 등록마감과 동시에 미션 시작
        uint256 missionEndTime;
        string details;     // 미션내용
        uint256 totalTokens;
        uint256 participantsCount;
        address[] participantAddresses;
        mapping(address => uint256) participantTokens;
        bool isClosed;
    }

    mapping(uint256 => Mission) public missions;
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
        string memory _details
    ) public payable {
        // 시간맞지 않으면 등록 안댐
        require(_registrationStartTime < _registrationEndTime && _registrationEndTime < _missionEndTime, "Invalid registration time");
        // 1이더 안되면 돈이 충분하지 않아 등록 안댐
        require(msg.value == MISSION_REGISTER_FEE, "Not enough");
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

        emit MissionRegistered(missionCount);
    }
    // 미션 정보 보여주는 함수(참가자가 참여하면 참가자수, 토탈 금액(토큰) 보임)
    function getMissionDetails(uint256 _missionId) public view returns (
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
    ) {
        Mission storage mission = missions[_missionId];
        require(mission.creator != address(0), "Mission does not exist");
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
    // 참가자가 미션에 참여하는 함수(미션 등록할 때 설정한 금액만큼 토큰이 사용된다)
    function participateInMission(uint256 _missionId) public {
        Mission storage mission = missions[_missionId];
        require(mission.creator != address(0), "Mission does not exist");
        require(mission.isClosed == false, "Mission is closed");
        // 토큰을 전송받은 사용자의 주소
        address participant = msg.sender;
        // 참여에 필요한 토큰 수량 계산
        uint256 requiredTokens = mission.participationAmount;
        // 사용자의 토큰 잔액 확인
        uint256 userTokenBalance = missionToken.balanceOf(participant);
        require(userTokenBalance >= requiredTokens, "Insufficient token balance");
        // 토큰을 미션 컨트랙트로 전송
        missionToken.transferFrom(participant, address(this), requiredTokens);
        // 미션 정보 업데이트
        mission.totalTokens = mission.totalTokens.add(requiredTokens);
        mission.participantsCount = mission.participantsCount.add(1);
        mission.participantAddresses.push(participant);
        mission.participantTokens[participant] = requiredTokens;

        emit MissionParticipated(_missionId, participant);
    }
}
