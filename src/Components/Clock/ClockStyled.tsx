import styled, {keyframes} from 'styled-components';

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const CurContainer = styled.div`
  color: white;
  margin: 200px auto 0;
  text-align: center;
  text-shadow: 4px 4px 3px #888;
  animation: ${fadein} 2s;
`;

export const CurDate = styled.div`
  font-size: 30px;
`;

export const CurDay = styled.div`
  font-size: 70px;
  font-style: italic;
`;

export const CurTime = styled.div`
  font-size: 80px;
  font-weight: 600;
`;