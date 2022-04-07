import styled from 'styled-components';

export const HomeContainer = styled.div`
    background-color: #0e1624;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 767.9px) {
        display: inline-block;
    }
`;

export const WIP = styled.p`
    text-align: center;
    padding: 16vw 20vw;
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props?.theme?.colors?.lightBlue};
`;