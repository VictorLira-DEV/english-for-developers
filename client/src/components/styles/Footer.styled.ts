import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: white;
    width: 100%;
    #copyright {
        margin: 0 5px 0 10px;
    }

    div:first-of-type {
        display: flex;
        align-items: center;
    }

    .social-media {
        font-size: 23px;
        a {
            cursor: pointer;
            color: inherit;
            text-decoration: none;
            &:first-child {
                margin: 0 7px 0 30px;
                font-size: 25px;
            }
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        .social-media {
            margin-top: 10px;
        }
    }
`;
