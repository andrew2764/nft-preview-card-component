import imageEquilibrium from "./assets/images/image-equilibrium.jpg";
import ethereumIcon from "./assets/images/icon-ethereum.svg";
import imageAvatar from "./assets/images/image-avatar.png";
import clockIcon from "./assets/images/icon-clock.svg";
import viewIcon from "./assets/images/icon-view.svg";
import styled from "@emotion/styled";

function App() {
  return (
    <Main>
      <Card>
        <ImgContainerRelative>
          <CardImg src={imageEquilibrium} alt="equilibrium" />
          <Overlay>
            <ImgContainer>
              <img src={viewIcon} alt="view icon" />
            </ImgContainer>
          </Overlay>
        </ImgContainerRelative>
        <Title>Equilibrium #3429</Title>
        <Description>
          Our Equilibrium collection promotes balance and calm.
        </Description>
        <Row>
          <Price>
            <ImgContainer>
              <img src={ethereumIcon} alt="ethereum icon" />
            </ImgContainer>
            0.041 ETH
          </Price>
          <TimeLimit>
            <ImgContainer>
              <img src={clockIcon} alt="clock icon" />
            </ImgContainer>
            3 days left
          </TimeLimit>
        </Row>
        <hr />
        <Attribution>
          <AvatarImg src={imageAvatar} alt="avatar" />
          <p>
            <span>Creation of</span> <a>Jules Wyvern</a>
          </p>
        </Attribution>
      </Card>
    </Main>
  );
}

const Main = styled.div`
  background-color: #0d192c;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Outfit", sans-serif;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainerRelative = styled(ImgContainer)`
  position: relative;
`;

const Card = styled.div`
  width: 90%;
  max-width: 350px;
  background-color: #15263f;
  padding: 1.5em;
  border-radius: 0.75rem;

  hr {
    color: #2e405a;
  }
`;

const CardImg = styled.img`
  border-radius: 0.75rem;
  max-width: 100%;
`;

const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  background: hsla(178, 100%, 50%, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  cursor: pointer;
  opacity: 0;

  img {
    color: white;
  }

  transition: all 0.2s ease-in;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h3`
  font-size: 1.875rem;
  margin-bottom: 0.5em;
  color: white;
  cursor: pointer;

  &:hover {
    color: #00fff8;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.75px;
  margin-bottom: 1.25em;
  color: #8bacd9;
`;

const Row = styled.div`
  @media (max-width: 375px) {
    font-size: 0.875rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  margin-bottom: 1.25em;
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  color: #00fff8;
  img {
    margin-right: 0.5rem;
  }
`;

const TimeLimit = styled.div`
  color: #8bacd9;
  display: flex;
  justify-content: center;
  img {
    margin-right: 0.5rem;
  }
`;

const Attribution = styled.div`
  @media (max-width: 375px) {
    font-size: 0.875rem;
  }
  display: flex;
  align-items: center;
  letter-spacing: 0.75px;
  font-weight: 300;
  img {
    margin-right: 0.75em;
  }
  span {
    color: #8bacd9;
  }

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    &:hover {
      color: #00fff8;
    }
  }
`;

const AvatarImg = styled.img`
  max-width: 33px;
  border: 1px white solid;
  border-radius: 100%;
`;

export default App;
