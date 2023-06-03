import styled from 'styled-components';
import { flexCustom } from '../../styles/theme';

export const $HeaderWrapperDiv = styled.div`
  width: 100vw;
  height: 80px;
  padding: 0 15vw;
  ${flexCustom('row', 'space-between', 'center')}
`;
