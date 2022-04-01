import styled from 'styled-components';

export const StyledLogin = styled.div`
    background: linear-gradient(rgb(9, 74, 130), rgb(88, 129, 187));
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(101vh - (58px + 98px));
    .wrapper {
        display: flex;
        height: auto;
        background: rgb(35, 59, 93);
        border-radius: 5px;
        .slider {
            width: 350px;
            position: relative;
            .control {
                position: absolute;
                z-index: 3;
            }
            .slider-item {
                position: absolute;
                width: 100%;
                height: 100%;
                background: red;
            }
        }

        form {
            width: 400px;
            border: 1px solid #ccc;
            padding: 30px 40px 40px 40px;
            background: white;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            text-align: center;
            h2 {
                margin-bottom: 20px;
                text-align: center;
            }
            .form-control {
                // display: flex;
                // flex-direction: column;
                padding-bottom: 35px;

                .inputWrapper {
                    border: 2px solid white;
                    border-bottom-color: rgb(177, 177, 177);
                    display: flex;
                    position: relative;
                    align-items: center;
                    &.invalid {
                        border-bottom-color: rgb(247, 132, 132);
                        .icon {
                            color: rgb(247, 132, 132);
                        }

                        small {
                            color: red;
                        }
                    }

                    &.focus {
                        border: 2px solid rgb(95, 210, 255);
                        background: rgb(224, 241, 248);
                    }
                    .icon {
                        width: 30px;
                        font-size: 20px;
                        color: rgb(121, 121, 121);
                    }
                    input {
                        padding: 10px;
                        width: 93%;
                        outline: none;
                        border: none;
                        font-size: 16px;
                        background: transparent;
                    }

                    small {
                        position: absolute;
                        bottom: -22px;
                    }
                }
            }

            p {
                &:nth-of-type(1) {
                    text-align: center;
                    margin-top: 20px;
                    height: 20px;
                    color: rgb(117, 117, 117);
                    &::after {
                        content: '';
                        display: inline-block;
                        width: 40%;
                        margin: 0 0 3px 10px;
                        height: 2px;
                        background: #ccc;
                    }
                    &::before {
                        content: '';
                        display: inline-block;
                        margin: 0 10px 3px 0px;
                        width: 40%;
                        height: 2px;
                        background: #ccc;
                    }
                }

                &:nth-of-type(2) {
                    margin-top: 20px;
                    color: rgb(57, 87, 255);
                    cursor: pointer;
                    height: 30px;
                    &:hover {
                        margin-bottom: 0;
                        &::after {
                            content: '';
                            display: block;
                            margin: 5px auto 0 auto;
                            width: 150px;
                            height: 2px;
                            background: rgb(195, 203, 252);
                        }
                    }
                }
            }

            .btn {
                border: none;
                font-size: inherit;
                border-radius: 5px;
                cursor: pointer;
                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
                // transition: 0.3s ease-in-out;
                text-transform: uppercase;
                font-weight: bolder;
                font-size: 14px;
                letter-spacing: 1px;
                &.login {
                    color: white;
                    width: 100%;
                    background: rgb(2, 127, 239);
                    height: 40px;
                    margin-top: 20px;
                    position: relative;
                    &.invalidBtn {
                        background: rgb(194, 194, 194);
                        cursor: not-allowed;
                        &:hover {
                            background: rgb(194, 194, 194);
                        }
                    }

                    & :last-child {
                        font-size: 18px;
                        position: absolute;
                        right: 10px;
                        transform: translateY(-2%);
                    }

                    &:hover {
                        background: rgb(59, 157, 243);
                    }
                }

                &.create-account {
                    margin-top: 20px;
                    color: white;
                    height: 40px;
                    background: rgb(106, 163, 67);
                    width: 100%;
                    justify-self: center;
                    position: relative;
                    & :last-child {
                        color: white;
                        position: absolute;
                        font-size: 20px;
                        right: 10px;
                    }

                    &:hover {
                        background: rgb(121, 182, 81);
                    }

                    a {
                        text-decoration: none;
                        color: inherit;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 841px) {
        height: auto;
        .wrapper {
            flex-direction: column-reverse;
            padding: 100px 20px;
            background: transparent;

            form {
                margin-bottom: 50px;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        .wrapper {
            width: 100%;
            form {
                width: auto;
            }
        }
    }
`;

export const StyledLoginWrapper = styled.div`
    .footer {
        padding: 30px 60px;
        background: linear-gradient(rgb(88, 129, 187), rgb(62, 91, 131));
    }
`;
