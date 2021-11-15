import styled from "styled-components";

export const JokeLabel = styled.div`
    color: #333;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    padding: 0px 12px;
`;

export const JokeContainer = styled.div`
padding: 2vw;
`;

export const QuoteContainer = styled.div`
    svg {
        font-size: 24px;
        color: ${(props) => props?.theme?.colors?.lightBlue};
    }
    h2 {
        padding: 0px 12px;
        text-align: center;
        font-weight: normal;
    }
    display: flex;
    justify-content: left;
    background-color: #FFF;
    color: #000;
    padding: 2vw;
    @media screen and (max-width: 767.9px) {
    padding: 10px;
}
`;
