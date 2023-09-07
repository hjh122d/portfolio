import { SiteButton, SourceButton } from "../Button";
import { PortfolioImg } from "../PortfolioImg";
import TechStack from "../TechStack";
import Styles from "./styles";
import Description from "../Description";

const Content = ({ data }) => {
  const handleClickLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Styles.Container>
      <Styles.ImgBox>
        <PortfolioImg title={data.image} src={data.image} />
      </Styles.ImgBox>
      <Styles.ContentBox key={data.number}>
        <h2>{data.title}</h2>
        {/* <p>
          {data.description.split("\n").map((txt, i) => (
            <span key={i}>
              {txt}
              <br />
            </span>
          ))}
        </p> */}

        <Description description={data.description} />
        <h3>Tech Stack</h3>
        <TechStack tech={data.tech} />
        <div>
          {data.demo && (
            <SiteButton
              round="true"
              onClick={() => {
                handleClickLink(data.demo);
              }}
            >
              Site
            </SiteButton>
          )}
          {data.source && (
            <SourceButton
              round="true"
              onClick={() => {
                handleClickLink(data.source);
              }}
            >
              Source
            </SourceButton>
          )}
        </div>
      </Styles.ContentBox>
    </Styles.Container>
  );
};

export default Content;
