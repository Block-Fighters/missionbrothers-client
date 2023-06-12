import Web3 from 'web3';
import MissionBro from '../abi/MissionBro.json';
import Token from '../abi/Token.json';

export const web3Instance = new Web3(window.ethereum);

export const tokenContract = new web3Instance.eth.Contract(
  Token.abi,
  Token.address
);
export const missionBroContract = new web3Instance.eth.Contract(
  MissionBro.abi,
  MissionBro.address
);
