import styled from 'styled-components';

export const StyledSocialMedia = styled.div`   
    position: fixed;
    z-index: 3;
    right: 0;
    bottom: 10%;
    padding: 20px 10px;
    background: rgb(70, 70, 70);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    & :not(:last-child) {
        margin-bottom: 10px;
    }

    .icon {
        height: 35px;
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(109, 109, 109);
        border-radius: 5px;
        cursor: pointer;
        svg {
            font-size: 25px;
            color: white;
        }

        &.whatsapp {
            background: rgb(32, 201, 32);
            border: 1px solid rgb(136, 236, 136);
        }
        &.linkedin {
            background: rgb(0, 130, 206);
            border: 1px solid rgb(113, 201, 252);
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        bottom: 3%;
    }
`