import styled from 'styled-components';

export const StyledSlider = styled.div`
    width: 400px;
    height: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    .controls {
        position: absolute;
        bottom: 50%;
        width: 100%;
        z-index: 1;
        bottom: 32%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        bottom: 50%;
        transform: translateY(50%);

        button {
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 30px;
            font-weight: bold;
            color: white;
            width: 50px;
            height: 50px;
        }
    }

    .slide-content {
        background: rgb(35, 59, 93);
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        height: 504px;

        .slider_item {
            position: absolute;
            width: 100%;
            height: 100%;
            transition: 1s;
            height: 505px;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.desktop}) {
        width: auto;
    }
`;
