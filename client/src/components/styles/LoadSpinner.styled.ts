import styled from 'styled-components';

export const StyledLoadSpinner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 80px;
        height: 80px;
        border: 5px solid rgb(5, 83, 151);
        border-radius: 50%;
        border-top-color: rgb(162, 211, 253);
        position: absolute;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        div {
            width: 50px;
            height: 50px;
        }
    }
`;
