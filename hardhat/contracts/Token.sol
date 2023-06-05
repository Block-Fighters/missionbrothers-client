// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Token is ERC20, Ownable, ReentrancyGuard{
  using SafeMath for uint256;
    address private ownerAddress;
    mapping(address => bool) controllers;
    uint256 public constant NORMAL_PRICE = 1 ether;

    address public missionBroContract;


    constructor() ERC20("MissionBro", "BRO") {
        
    }

    function mint(address to, uint256 amount) external {
        require(controllers[msg.sender], "Only controllers can mint");
        require(to != address(0), "Invalid address");
        _mint(to, amount);
    }
    function addController(address controller) external onlyOwner {
        controllers[controller] = true;
    }
    function setMissionBroContract(address _missionBroContract) external onlyOwner {
        missionBroContract = _missionBroContract;
    }

    function buyTokens() external payable nonReentrant {
        //require(saleActive, "Sale is not active");
        uint256 tokenAmount = getTokenAmount(msg.value);
        require(tokenAmount > 0, "Invalid token amount");
        _mint(msg.sender, tokenAmount); 
    }
    function getTokenAmount(uint256 ethAmount) public pure returns (uint256) {
        uint256 price = NORMAL_PRICE;
        return (ethAmount * 100 * (10 ** 18)).div(price);
    }
    function transferEthToMissionContract(address missionContract) external payable {
        require(missionContract != address(0), "Invalid mission contract address");
        (bool success, ) = missionContract.call{value: msg.value}("");
        require(success, "Failed to transfer ETH to mission contract");
    }
}
