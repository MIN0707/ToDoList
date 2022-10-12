import styled from 'styled-components';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.jpg'
import img7 from '../../images/img7.jpg'
import img8 from '../../images/img8.jpg'
import img9 from '../../images/img9.jpg'
import img10 from '../../images/img10.jpg'

const backgroundArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const randomIndex = Math.floor(Math.random() * backgroundArr.length);
const backgroundImg = backgroundArr[randomIndex];

export const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${backgroundImg});
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const FlexDiv = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 1s;
`

export const Flex2Div = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 37%;
  height: 80%;
  display: flex;
  flex-direction: column;
  transition: 1s;
  overflow-x: hidden;
  overflow-y: scroll;
  @media(max-width: 1445px) {
    width: 35%;
  }
`