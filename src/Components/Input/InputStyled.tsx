import styled, {keyframes} from 'styled-components';

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const InputContainer = styled.div`
  color: white;
  margin: 40px auto;
  text-align: center;
  text-shadow: 4px 4px 3px #888;
  animation: ${fadein} 2s;
`;

export const InputTitle = styled.h1`
  font-size: 40px;
`

export const InputBox = styled.input`
  height: 41px;
  line-height: normal;
  width: 600px;
  outline: none;
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 2px;
  border-bottom: white 3px solid;
  background: rgba(0, 0, 0, 0);
  color: white;
  font-size: 25px;
  padding: 10px;
  text-align: center;
  font-family: '양진체', serif;
  text-shadow: 4px 4px 3px #888;
  box-shadow: 0 3px 1px #888;
`
