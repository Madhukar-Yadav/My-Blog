import styled from "styled-components";

export const HeaderSection = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #000;
    color: #FFF;
    padding: 60px 4vw 0;
    @media screen and (max-width: 767.9px) {
    padding: 20px 10px 0;
}
`;

export const HeaderTitle = styled.h2`
    color: #FFF;
    text-align: center;
    vertical-align: middle;
`;

export const HeaderLogo = styled.img`
    max-width: 80px;
    position: relative;
    top: -24px;
`;

export const HeaderLink = styled.a`
    color: #FFF;
    padding: 16px;
    line-height: 32px;
    text-decoration: none;
    &:hover {
        color: ${(props) => props?.theme?.colors?.lightBlue};
        border-bottom: ${(props) => `4px solid ${props?.theme?.colors?.lightBlue}`};
    }
    svg {
        color: #fff;
        &:hover {
            color: ${(props) => props?.theme?.colors?.lightBlue};
        }
    }
    span {
        color: #FFF;
    }
`;

export const SocialLink = styled.a`
    padding: 16px;
    text-decoration: none;
    svg {
        color: #FFF !important;
        &:hover {
            color: ${(props) => props?.theme?.colors?.lightBlue} !important;
        }
    }
`;
