import styled from "styled-components";

export const SkillsContainer = styled.div`
    width: 70%;
    height: 85vh;
    display: flex;
    position: relative;
    background-image: ${({ imgSrc }) => `url(${imgSrc})`};
    background-repeat: no-repeat;
    background-position: 54% 50%;
    background-size: 70%;
    @media screen and (max-width: 767.9px) {
        width: 100%;
        background-size: 60%;
    }
`;

export const BubbleSkill = styled.div`
    background-color: #FFF;
    width: 60px;
    height: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-align: center;
    padding: 0px 12px;
    margin: 0px calc(12% * ${({ index }) => index+1});
    border-radius: 50%;
    animation: MoveUpDown 8s linear infinite;
    animation-delay: 4s;
    position: absolute;
    bottom: 0;
    left: calc(4% * ${({ index }) => index+1});
    :nth-child(even) {
        animation: MoveUpDown 8s linear infinite;
        animation-delay: 8s;
        right: calc(4% * odd);
    }
    svg {
        font-size: 4rem;
        @media screen and (max-width: 767.9px) {
            font-size: 2.5rem;
        }
    }

    @keyframes MoveUpDown {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-75vh);
        }
    }
    @media screen and (max-width: 767.9px) {
        width: 40px;
        height: 40px;
        margin: 0px calc(6% * ${({ index }) => index+1});
        left: calc(10% * ${({ index }) => index+1});
    }
`;
