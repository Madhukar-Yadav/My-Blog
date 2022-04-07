import styled from "styled-components";

export const LoaderText = styled.span`
    padding: 0px 12px;
    @media screen and (max-width: 767.9px) {
        text-align: center;
        padding: 6vw 2px;
    }
`;

export const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    font-size: 24px;
    font-weight: bold;
    align-contents: center;
    justify-content: center;
    color: ${(props) => props?.theme?.colors?.lightBlue || '#FFF'};
    @keyframes spinner {
        to {transform: rotate(360deg);}
    }
    svg {
        font-size: 24px;
        color: ${(props) => props?.theme?.colors?.lightBlue};
        animation: spinner 2.2s linear infinite;
    }
`;

export const LoadWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
`;