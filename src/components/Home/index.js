
import { Joke, Banner } from '../../components';
import { HomeContainer } from './HomeStyles.js';

const Home = () => {

  return ( 
      <HomeContainer>
        <Banner />
        <Joke />
    </HomeContainer>
  );
}

export default Home;