import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 10px 60px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: rgb(9, 74, 130);
    // &.sticky {
    //     position: fixed;
    //     width: 100%;
    //     max-width: 1440px;
    //     z-index: 1;
    //     background: rgba(9, 74, 130, 0.6);
    // }
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
            /* .button {
                cursor: pointer;
                color: inherit;
                font-size: inherit;
                background: none;
                border: none;
                border-radius: 4px;
                padding-left: 5px;
            } */
        }
    }
`;