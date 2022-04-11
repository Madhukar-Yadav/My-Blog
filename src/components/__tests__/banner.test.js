import {shallow} from 'enzyme';
import {Banner} from 'components';
import {BannerTitle, BannerContainer} from 'components/styled-components/bannerStyles';

let Wrapper;

beforeEach(() => {
    Wrapper = shallow(<Banner />);
});

it('renders Banner Title', () => expect(Wrapper.text()).toBe('Welcome to my Portfolio'));

it('renders BannerTitle component', () => expect(Wrapper.find(BannerTitle).length).toEqual(1));

it('renders BannerContainer component', () => {
    expect(Wrapper.find(BannerContainer).length).toEqual(1);
    expect(Wrapper.find(BannerContainer).prop('imgSrc')).toBe('banner_image.svg');
});
