import { HeaderSection, HeaderLogo, HeaderLink, SocialLink } from './HeaderStyles';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { my_logo_blue } from '../../../assets/images';

const Header = () => {
    return ( 
        <HeaderSection>
            <HeaderLogo src={my_logo_blue} alt='headerLogo' />
            <div>
                <HeaderLink href="/my-blog">Portfolio</HeaderLink>
                <HeaderLink href="#Skills">Skills</HeaderLink>
            </div>
            <div>
                <SocialLink target="_blank" href="https://github.com/Madhukar-Yadav">
                    <AiFillGithub size='2rem' />
                </SocialLink>
                <SocialLink target="_blank" href="https://www.linkedin.com/in/madhukar-yadav-44a05065/">
                    <AiFillLinkedin size='2rem' />
                </SocialLink>
                <SocialLink target="_blank" href="https://www.instagram.com/blue_beast_2992/">
                    <AiFillInstagram size='2rem' />
                </SocialLink>
            </div>
        </HeaderSection>
    );
}

export default Header;