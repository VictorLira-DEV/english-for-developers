import styled from 'styled-components';

export const StyledPopUp = styled.div`
    & > div {
        position: fixed;
        z-index: 3;
        background: white;
        border-radius: 4px;

        right: 50%;
        bottom: 50%;
        overflow: hidden;
    }
`;

export const StyledBackdrop = styled.div`
    & > div {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
    }
`;
