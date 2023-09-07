import styled from "styled-components";

const Container = styled.div`
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const Box = styled.div`
  border: 1px solid #000000;
  padding: 2px 4px;
  border-radius: 5px;
  margin-right: 8px;
  word-break: break-all;
  margin-bottom: 8px;
`;

const TechStack = ({ tech }) => {
  return (
    <Container>
      {tech.map((item, i) => {
        return <Box key={i}>{item}</Box>;
      })}
    </Container>
  );
};

export default TechStack;
