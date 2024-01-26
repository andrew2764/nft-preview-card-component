import imageEquilibrium from "./assets/images/image-equilibrium.jpg";
import ethereumIcon from "./assets/images/icon-ethereum.svg";
import imageAvatar from "./assets/images/image-avatar.png";
import clockIcon from './assets/images/icon-clock.svg'
import styled from "@emotion/styled";

function App() {
  return (
    <Main>
        <Card>
          <CardImg src={imageEquilibrium} alt="equilibrium" />
          <Title>Equilibrium #3429</Title>
          <Description>Our Equilibrium collection promotes balance and calm.</Description>
          <Row>
            <Price>
              <ImgContainer><img src={ethereumIcon} alt="ethereum icon" /></ImgContainer>
              0.041 ETH
            </Price>
            <TimeLimit>
              <ImgContainer><img src={clockIcon} alt="clock icon"/></ImgContainer>
              3 days left
            </TimeLimit>
          </Row>
          <hr />
          <Attribution>
            <AvatarImg src={imageAvatar} alt="avatar" />
            <p><a href="">Creation of</a> Jules Wyvern</p>
          </Attribution>
        </Card>
    </Main>
  );
}

const Main = styled.div`
  background-color: #0D192C;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Outfit', sans-serif;
`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
  max-width: 350px;
  background-color: #15263F;
  padding: 1.5em;
  border-radius: 0.75rem;

  hr {
    color: #2E405A;
  }
`;

const CardImg = styled.img`
  border-radius: 0.75rem;
  max-width: 100%;
`

const Title = styled.h3`
  font-size: 1.875rem;
  margin-bottom: 0.5em;
  color: white;
`

const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.75px;
  margin-bottom: 1.25em;
  color: #8BACD9;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  margin-bottom: 1.25em;
`

const Price = styled.div`
  display: flex;
  justify-content: center;
  color: #00FFF8;
  img {
    margin-right: 0.5rem;
  }
`

const TimeLimit = styled.div`
  color: #8BACD9;
  display: flex;
  justify-content: center;
  img {
    margin-right: 0.5rem;
  }
`

const Attribution = styled.div`
  display: flex;
  align-items: center;
  color: white;
  letter-spacing: 0.75px;
  font-weight: 300;
  img {
    margin-right: 0.75em;
  }
  a {
    text-decoration: none;
    color: #8BACD9;
  }
`

const AvatarImg = styled.img`
  max-width: 33px;
  border: 1px white solid;
  border-radius: 100%;
`

export default App;
