import styled from "styled-components";
function BaseButton({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export const Button = styled(BaseButton)`
  background-color: #dadada;
  font-size: 16px;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: ${({ round }) => (round ? `9999px` : `5px`)};
  font-family: "Atkinson Hyperlegible", sans-serif;

  &:hover {
    opacity: 0.8;
  }
`;

export const SiteButton = styled(Button)`
  color: #ffffff;
  background-size: 300% 100%;
  background-image: linear-gradient(
    to right,
    #0ba360,
    #3cba92,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;

export const SourceButton = styled(Button)`
  color: #ffffff;
  background-size: 300% 100%;
  background-image: linear-gradient(
    to right,
    #ed6ea0,
    #ec8c69,
    #f7186a,
    #fbb03b
  );
  box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
