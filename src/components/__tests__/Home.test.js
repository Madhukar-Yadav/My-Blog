import {shallow} from 'enzyme';
import Home from 'components/Home';
import { Banner, Skills, Joke } from 'components';

let Wrapper;

beforeEach(() => {
    Wrapper = shallow(<Home />);
});

it('renders Banner', () => expect(Wrapper.find(Banner).length).toEqual(1));

it('renders Skills', () => expect(Wrapper.find(Skills).length).toEqual(1));

it('renders Joke', () => expect(Wrapper.find(Joke).length).toEqual(1));