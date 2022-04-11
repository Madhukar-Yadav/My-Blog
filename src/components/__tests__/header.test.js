import {shallow} from 'enzyme';
import {Header} from 'components';
import { HeaderLogo, HeaderLink, SocialLink } from 'components/styled-components/HeaderStyles';

let Wrapper;

beforeEach(() => {
    Wrapper = shallow(<Header />);
});

it('renders HeaderLogo', () => expect(Wrapper.find(HeaderLogo).length).toEqual(1));

it('renders HeaderLogo src', () => expect(Wrapper.find(HeaderLogo).prop('src')).toBe('my_logo_blue.png'));

it('renders HeaderLinksList', () => expect(Wrapper.find("#HeaderLinksList").length).toEqual(1));

it('renders HeaderLinksList 2 Items', () => expect(Wrapper.find(HeaderLink).length).toEqual(2));

it('renders SocialLinksList', () => expect(Wrapper.find("#SocialLinksList").length).toEqual(1));

it('renders SocialLinksList has 3 Items', () => expect(Wrapper.find(SocialLink).length).toEqual(3));

it('simulate SocialLinksList has anchor Item', () => expect(Wrapper.find(SocialLink).first().prop('href'))
    .toBe('https://github.com/Madhukar-Yadav'));

