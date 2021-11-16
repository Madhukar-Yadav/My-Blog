import styled from "styled-components";

export const BannerContainer = styled.div`
    width: 100vw;
    height: 85vh;
    display: flex;
    background-color: #0e1624;
    color: #333333 !important;
    background-image: ${({ imgSrc }) => `url(${imgSrc})`};
    background-repeat: no-repeat;
    background-position: 96% 46%;
    background-size: 600px 600px;
`;

export const BannerTitle = styled.div`
    color: #FFF;
    font-size: 6.5rem;
    font-weight: bold;
    text-align: left;
    align-items: center;
    padding: 18%;
    @media screen and (max-width: 767.9px) {
        padding: 50% 10%;
    }
`;

export const BannerImage = styled.img`
    height: 50vh;
    position: relative;
    right: calc(50% - 500px);
`;
