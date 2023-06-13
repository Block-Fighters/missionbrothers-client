import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';

export const $Small = styled.div`
  font-size: 20px;
  color: ${theme.gray[500]};
  margin-bottom: 8px;
  font-weight: bold;
  margin-top: 80px;
`;

export const $Title = styled.div`
  font-size: 36px;
  margin-bottom: 50px;
  margin-top: 30px;
`;

export const $Image = styled.img`
  width: 655.2px;
  height: 491.4px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 51px;
  margin-bottom: 30px;
`;

export const $UserImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const $ShareImg = styled.img`
  width: 36px;
  height: 36px;
`;

export const $titleDiv = styled.div`
  ${flexCustom('', 'center', '')}
`;

export const $Line = styled.div`
  ${flexCustom('column', 'center', '')}
  width: 1008px;
  border-bottom: 1px solid ${theme.gray[300]};
`;

export const $LeftDiv = styled.div`
  ${flexCustom('column', '', 'center')}
`;

export const $TotalDiv = styled.div`
  ${flexCustom('row', 'center', '')}
  margin-bottom: 100px;
`;
export const $Table1 = styled.div`
  border-top: 1px solid ${theme.gray[500]};
  border-right: 1px solid ${theme.gray[500]};
  float: left;
  width: 120px;
  height: 62px;
  background-color: ${theme.gray[50]};
  ${flexCustom('row', 'center', 'center')}
`;

export const $Table2 = styled.div`
  border-top: 1px solid ${theme.gray[500]};
  float: left;
  width: 535px;
  height: 62px;
  ${flexCustom('row', 'flex-start', 'center')};
`;

export const $TableText1 = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 800;
`;

export const $TableText2 = styled.div`
  text-align: start;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
`;

export const $Sticky = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 302px;
  height: 291px;
  border-radius: 20px;
  border: 1px solid ${theme.gray[500]};
  ${flexCustom('column', 'flex_start', '')}
  margin-top: 51px;
  margin-left: 48.8px;
  align-self: flex-start;
  top: 10px;
  position: sticky;
`;

export const $Text = styled.div``;
