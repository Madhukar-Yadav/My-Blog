
import { Banner, Skills, Joke } from '../../components';
import { HomeContainer, Row, WIP } from './HomeStyles.js';

const Home = () => {

  return ( 
      <HomeContainer>
        <Banner />
        <Row id='Skills'>
          <Skills />
          <Joke />
        </Row>
        <WIP>Work In Progress...</WIP>
    </HomeContainer>
  );
}

export default Home;