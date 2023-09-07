import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  box-shadow: 5px 5px 10px 3px #6e6e6e;
`;

export const PortfolioImg = ({ title, src }) => {
  return (
    <Img src={process.env.PUBLIC_URL + "/images/" + src + ".png"} alt={title} />
  );
};
