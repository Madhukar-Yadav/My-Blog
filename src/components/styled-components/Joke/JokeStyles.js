import styled from "styled-components";

export const JokeLabel = styled.div`
    color: ${(props) => props?.theme?.colors?.lightBlue};
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    padding: 0px 12px;
    @media screen and (max-width: 767.9px) {
        text-align: center;
        padding: 6vw 2px;
    }
`;

export const JokeContainer = styled.div`
    align-contents: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2vw;
    width: 50%;
    @media screen and (max-width: 767.9px) {
        width: 100%;
        padding: 1vw;
    }
`;

export const QuoteContainer = styled.div`
    svg {
        font-size: 24px;
        color: ${(props) => props?.theme?.colors?.lightBlue};
    }
    h2 {
        color: #FFF;
        padding: 0px 12px;
        text-align: center;
        font-weight: normal;
    }
    display: flex;
    justify-content: left;
    color: #FFF;
    padding: 2vw;
    @media screen and (max-width: 767.9px) {
        padding: 6vw 4vw;
    }
`;
