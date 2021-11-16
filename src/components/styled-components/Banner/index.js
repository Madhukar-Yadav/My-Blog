import { banner_image } from '../../../assets/images';
import {BannerContainer, BannerTitle} from './bannerStyles';

const Banner = () => {
    return ( 
        <BannerContainer imgSrc={banner_image} >
            <BannerTitle>{`Welcome to my Portfolio`}</BannerTitle>
            {/* <BannerImage src={BannerImg} /> */}
        </BannerContainer>
    );
}

export default Banner;