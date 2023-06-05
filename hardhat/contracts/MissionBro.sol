// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Token.sol";
/*********************************************************
* 1. registerMission: 미션을 등록하는 함수 => 미션 이름, 등록하는 사람, 1인당 참가 금액, 등록 시작 시간, 등록 마감 시간, 미션 마감 시간, 미션 내용을 입력
* 2. participateInMission: 참가자가 미션에 토큰으로 참여하는 함수 => 미션 ID를 입력받고, 참가자는 해당 미션에 정확한 참가 금액을 지불하여 참여(토큰으로 지불).
* 3. getMissionDetails: 미션의 상세 정보, 참가자가 참가할 때 사용한 총 토큰 수량, 참가자 수 등을 보여주는 view 함수.
* 4. distributeRewards: 미션이 마감되자 마자 보상을 참가자에게 분배하는 함수 => 미션 ID를 입력받고, 참가자에게는 참여한 토큰 수량에 기반하여 분배.
**********************************************************/

contract MissionContract {

    Token public missionToken;
    uint256 public constant tokenPrice = 0.1 ether; // 1 Ether = 10 tokens
    uint256 public constant MISSION_REGISTER_FEE = 1 ether;

    struct Mission {
        string title;
        address creator;
        uint256 participationAmount;
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

    event MissionRegistered(uint256 missionId);
    event MissionParticipated(uint256 missionId, address participant);
    event MissionClosed(uint256 missionId, uint256[] rewards);

    constructor(Token _missionToken) {
        missionToken = _missionToken;
    }

    function registerMission(
        string memory _title,
        uint256 _participationAmount,
        uint256 _registrationStartTime,
        uint256 _registrationEndTime,
        uint256 _missionEndTime,
        string memory _details
    ) public payable {
        require(_registrationStartTime < _registrationEndTime && _registrationEndTime < _missionEndTime, "Invalid registration time");
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

    function participateInMission(uint256 _missionId) public {
        Mission storage mission = missions[_missionId];
        require(!mission.isClosed, "Mission is closed");
        require(mission.registrationStartTime <= block.timestamp && block.timestamp <= mission.registrationEndTime, "Invalid registration time");

        // 토큰 전송 및 기타 처리
        require(missionToken.transferFrom(msg.sender, address(this), mission.participationAmount), "Token transfer failed");

        mission.participantAddresses.push(msg.sender);
        mission.participantsCount++;
        mission.totalTokens += mission.participationAmount;

        // 미션 종료 조건 확인 및 처리
        if (block.timestamp >= mission.missionEndTime) {
            mission.isClosed = true;
        }
    }
}
