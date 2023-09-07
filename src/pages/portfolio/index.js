import Content from "../../components/Content";
import Header from "../../components/Header";
import data from "../../data/data";
import Styles from "./styles";

const PortfolioPage = () => {
  return (
    <>
      <Header />
      <Styles.Container>
        {data.map((item) => {
          return <Content data={item} key={item.number} />;
        })}
      </Styles.Container>
    </>
  );
};

export default PortfolioPage;
