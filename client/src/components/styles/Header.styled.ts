import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 10px 60px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: rgb(9, 74, 130);
    h1 {
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 2rem;
    }

    ul {
        list-style: none;
        display: flex;
        align-items: flex-end;
        & :not(:last-child) {
            margin-right: 30px;
        }
        li {
            cursor: pointer;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 32px;
            a {
                text-decoration: none;
                height: 30px;
                padding-bottom: 2px;
                color: inherit;
                display: flex;
                align-items: center;
                border-bottom: 3px solid transparent;
                transition: 0.1s ease-in-out;
                &:hover {
                    color: rgb(223, 221, 221);
                }

                &.header__menu--active {
                    border-bottom: 3px solid white;
                }
            }

            .header__icon {
                font-size: 25px;
                margin: 0;
                margin-right: 5px;
            }
        }
    }

    .header_menu--icon {
        font-size: 40px;
        display: none;
        position: absolute;
        top: 5px;
        right: 20px;
    }

    @media screen and (max-width: ${({ theme }) => theme.desktop}) {
        padding: 10px 20px;
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        position: fixed;
        z-index: 4;
        width: 100%;

        .header_menu--icon {
            font-size: 40px;
            display: block;
        }
        ul {
            background: rgb(9, 74, 130);
            position: fixed;
            left: 0;
            right: 0;
            top: 49px;
            bottom: 0;
            height: calc(100vh - 49px);
            z-index: 3;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: 1s ease-in-out;
            & :not(:last-child) {
                margin-right: 0;
            }

            &.header__menu--hidden {
                transform: translatex(100%);
            }

            li {
                margin: 0;
                padding: 40px 0;
                width: 400px;
                display: flex;
                justify-content: center;
                font-size: 1.2rem;
            }
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        h1 {
            font-size: 1.5rem;
        }
    }
`;
