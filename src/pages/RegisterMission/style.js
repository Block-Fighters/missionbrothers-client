import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';
import { Select } from 'antd';

export const $RegisterWrapper = styled.div`
  width: 100vw;
  height: 100%;
  padding: 0 15vw;
  ${flexCustom('column', 'flex-start', 'flex-start')}
`;

export const $RegisterTopDiv = styled.div`
  width: 100%;
  height: 154px;
  margin-top: 50px;
  border-bottom: 1px solid ${theme.gray[300]};
`;

export const $MissionTypeSelect = styled(Select)`
  width: 16vw;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${theme.gray[500]};
`;

export const $MissionTitleInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 10px;
  margin-top: 40px;
  border: 1px solid ${theme.gray[500]};
  padding-left: 14px;
  font-weight: 500;
  font-size: 18px;
`;

export const $RegisterBottomDiv = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  ${flexCustom('row', 'flex-start', 'flex-start')}
`;

export const $RegisterBottomLeftDiv = styled.div`
  width: 65%;
  height: 100%;
  margin-bottom: 100px;
`;

export const $MissionImage = styled.img`
  width: 100%;
  height: 491px;
`;

export const $RegisterMissionDataDiv = styled.div`
  width: 100%;
  height: 404px;
  padding: 0 10px 50px 10px;
  border-bottom: 1px solid ${theme.gray[300]};
  ${flexCustom('column', 'flex-start', 'space-between')}
  margin-bottom: 60px;
`;

export const $RegisterMissionInputBox = styled.div`
  width: 100%;
  height: 40px;
  ${flexCustom('row', 'flex-start', 'center')}
  font-size: 24px;
  font-weight: 900;
  span {
    margin-right: ${(props) => (props.smallMargin ? '26px' : '50px')};
  }
  margin-top: 50px;
`;

export const $TextMargin = styled.p`
  margin: 0 5px;
`;

export const $RegisterMissionInput = styled.input`
  width: 16vw;
  height: 100%;
  border-radius: 10px;
  padding: 0 20px;
  border: 1px solid ${theme.gray[500]};
`;

export const $RegisterBottomRightDiv = styled.div`
  height: 1200px;
  width: 30%;
  margin-left: 5%;
`;

export const $RegisterButtonDiv = styled.div`
  position: sticky;
  top: 50px;
  width: 100%;
  height: 100px;
  border: 1px solid ${theme.gray[500]};
  border-radius: 10px;
  ${flexCustom()}
`;

export const $RegisterButton = styled.button`
  cursor: pointer;
  width: 80%;
  height: 50px;
  background-color: ${theme.blue};
  color: ${theme.white};
  border-radius: 5px;
  ${flexCustom()}
  font-size: 18px;
`;
