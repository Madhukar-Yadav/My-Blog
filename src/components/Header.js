import { HeaderSection, HeaderLogo, HeaderLink, SocialLink } from 'components/styled-components/HeaderStyles';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { my_logo_blue } from 'assets/images';
import {HeaderLinks} from 'config';

const Header = () => {
    return ( 
        <HeaderSection>
            <HeaderLogo src={my_logo_blue} alt='headerLogo' />
            <div id='HeaderLinksList'>
                {HeaderLinks.map((header, index) => <HeaderLink key={`HeaderLink+${index+1}`} href={header.linkTo}>{header.label}</HeaderLink>)}
            </div>
            <div id='SocialLinksList'>
                {HeaderLinks.map((socialLink, index) => {
                    const SocialIcon = (name) => {
                        switch(name) {
                            case 'git': return <AiFillGithub size='2rem' />
                            case 'linkedin': return <AiFillLinkedin size='2rem' />
                            case 'instagram': return <AiFillInstagram size='2rem' />
                            default: {
                                return null;
                            }
                        }
                    }
                    return (
                        <SocialLink key={`SocialLink+${index+1}`} target="_blank" href={socialLink.url}>
                            {SocialIcon(socialLink.name)}
                        </SocialLink>
                    );
                })}
            </div>
        </HeaderSection>
    );
}

export default Header;