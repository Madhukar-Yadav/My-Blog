import {shallow} from 'enzyme';
import Home from 'components/Home';
import { Banner, Skills, Joke } from 'components';

it('renders Banner', () => {
  const Wrapper = shallow(<Home />);
  expect(Wrapper.find(Banner).length).toEqual(1);
});

it('renders Skills', () => {
    const Wrapper = shallow(<Home />);
    expect(Wrapper.find(Skills).length).toEqual(1);
});

it('renders Joke', () => {
    const Wrapper = shallow(<Home />);
    expect(Wrapper.find(Joke).length).toEqual(1);
});