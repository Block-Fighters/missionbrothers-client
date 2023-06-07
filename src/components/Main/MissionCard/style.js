import styled from 'styled-components';
import theme, { flexCustom } from '../../../styles/theme';

export const $CardListDiv = styled.div`
  width: 70vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const $CardDiv = styled.div`
  width: 20vw;
  height: 330px;
  border-radius: 20px;
  outline: 1px solid ${theme.gray[500]};
  ${flexCustom('column', 'flex-start', 'flex-start')}
  margin-right: ${(props) => Number(props.index) % 3 !== 0 && '5vw'};
  margin-bottom: 70px;
  cursor: pointer;
  :hover {
    outline: 3px solid ${theme.yellow};
    border: none;
  }
`;

export const $Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  margin-bottom: 20px;
`;

export const $CompletedImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  margin-bottom: 20px;
  filter: brightness(60%);
`;

export const $Text = styled.div`
  font-size: 14px;
  margin-left: 20px;
  margin-bottom: 5px;
  color: ${theme.gray[500]};
`;

export const $Title = styled.div`
  font-size: 20px;
  margin-bottom: 19px;
  margin-left: 20px;
`;
