// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Token is ERC20, Ownable, ReentrancyGuard {
  using SafeMath for uint256;
  address private ownerAddress;
  mapping(address => bool) controllers;
  uint256 public constant NORMAL_PRICE = 1 ether;

  address public missionBroContract;

  constructor() ERC20('MissionBro', 'BRO') {}

  function mint(address to, uint256 amount) external {
    require(controllers[msg.sender], 'Only controllers can mint');
    require(to != address(0), 'Invalid address');
    _mint(to, amount);
  }

  function setMissionBroContract(
    address _missionBroContract
  ) external onlyOwner {
    missionBroContract = _missionBroContract;
  }

  function buyTokens() external payable nonReentrant {
    //require(saleActive, "Sale is not active");
    uint256 tokenAmount = getTokenAmount(msg.value);
    require(tokenAmount > 0, 'Invalid token amount');
    _mint(msg.sender, tokenAmount);
  }

  function transferToContractAndClaimEther(uint256 amount) external {
    require(
      amount >= 100 * (10 ** 18),
      'You need to transfer at least 100 tokens'
    );
    super.transfer(address(this), amount);
    uint256 etherToTransfer = address(this).balance.mul(amount / (10 ** 4)).div(
      10 * (10 ** 18)
    );
    require(etherToTransfer > 0, 'No ether available to claim');

    (bool success, ) = msg.sender.call{value: etherToTransfer}('');
    require(success, 'Transfer failed.');
  }

  function getTokenAmount(uint256 ethAmount) public pure returns (uint256) {
    uint256 price = NORMAL_PRICE;
    return (ethAmount * 10000 * (10 ** 18)).div(price);
  }

  function withdraw() external onlyOwner nonReentrant {
    payable(owner()).transfer(address(this).balance);
  }
}
