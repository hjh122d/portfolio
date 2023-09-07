import styled, { keyframes } from "styled-components";

const waviy = keyframes`
 0%,40%,100% {
  transform: translateY(0)
}
20% {
  transform: translateY(-20px)
}
`;

const Waviy = styled.div`
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(255, 255, 255, 0.2));
  font-size: 40px;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;

  span {
    font-family: "Alfa Slab One", cursive;
    position: relative;
    display: inline-block;
    color: #000000;
    text-transform: uppercase;
    animation: ${waviy} 1s infinite;
    animation-delay: calc(0.1s * var(--i));
  }

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const Styles = {
  Waviy,
};

export default Styles;
