import styled from 'styled-components';

export const StyledProfile = styled.div`
    min-height: calc(100vh - (70px + 58px));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 100px 20px;
    color: rgb(143, 142, 142);
    .profile_wraper {
        width: 400px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 40px;
        height: auto;
        border-radius: 4px;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.2);
        .profile {
            width: 100%;
            img {
                width: 100px;
                border-radius: 50%;
                margin-bottom: 10px;
            }
            margin-bottom: 20px;

            p {
                &:not(:last-child) {
                    margin-bottom: 5px;
                    color: rgb(122, 122, 122);
                }

                &:last-child {
                    margin-top: 20px;
                }
            }

            p:nth-of-type(2) {
                &::before {
                    content: '';
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    background: rgb(0, 255, 55);
                    border-radius: 50%;
                    margin-bottom: -2px;
                }
            }
        }

        form {
            padding: 10px;

            h2 {
                margin-bottom: 20px;
                color: rgb(143, 142, 142);
            }
            .formControl {
                margin-bottom: 30px;
                .input {
                    display: block;
                    padding: 10px;
                    width: 100%;
                    border: 1px solid #ccc;
                    margin-top: 5px;
                    font-size: 16px;
                    &.invalid {
                        background: rgb(255, 228, 228);
                        border: 1px solid red;
                    }
                    &:focus {
                        background: rgb(224, 241, 248);
                        outline-color: rgb(95, 210, 255);
                    }
                }

                small {
                    position: absolute;
                    color: red;
                }

                &.invalid {
                    .input {
                        background: rgb(255, 228, 228);
                        border: 1px solid red;
                    }
                }
            }

            .button {
                border: none;
                font-size: inherit;
                border-radius: 5px;
                cursor: pointer;
                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
                transition: 0.3s ease-in-out;
                text-transform: uppercase;
                font-weight: bolder;
                font-size: 14px;
                letter-spacing: 1px;
                color: white;
                width: 100%;
                background: rgb(2, 127, 239);
                height: 40px;
                margin-top: 20px;
                &.invalidBtn {
                    background: #ccc;
                    cursor: not-allowed;
                    &:hover {
                        background: rgb(194, 194, 194);
                    }
                }
            }
        }
    }
`;

export const StyledProfileWrapper = styled.section`
    .footer {
        padding: 15px 60px;
        background: rgb(11, 91, 160);
        color: white;
        bottom: 0;
        width: 100%;
    }
`;
