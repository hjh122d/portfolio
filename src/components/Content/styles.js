import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 35%;
    right: 35%;
    width: 30%;
    height: 3px;
    background-image: linear-gradient(
      to right,
      #62efab 5%,
      #f2ea7d 15%,
      #f2ea7d 25%,
      #ff8797 35%,
      #ff8797 45%,
      #e1a4f4 55%,
      #e1a4f4 65%,
      #82fff4 75%,
      #82fff4 85%,
      #62efab 95%
    );
  }

  > div {
    padding: 100px 0;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    display: block;
    > div {
      padding-top: 0;
    }
    > div:first-child {
      padding-top: 50px;
      padding-bottom: 0;
    }
    > div:last-child {
      padding-top: 20px;
      padding-bottom: 50px;
    }
  }
`;

const ImgBox = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContentBox = styled.div`
  width: 40%;
  margin-left: 30px;

  p {
    margin-top: 5px;
  }
  h3 {
    margin-top: 20px;
  }
  > div:last-child {
    margin-top: 20px;
  }
  Button {
    margin-right: 10px;
  }
  a {
    color: #03a5fc;
    &:hover {
      color: blue;
    }
    display: inline-block;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding-top: 0;
  }
`;
const Styles = { Container, ImgBox, ContentBox };

export default Styles;
