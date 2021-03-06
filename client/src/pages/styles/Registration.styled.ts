import styled from 'styled-components';

export const StyledRegistration = styled.div`
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(rgb(9, 74, 130), rgb(131, 214, 214));
    max-width: 1440px;
    padding: 40px 20px;
    height: calc(100vh - 58px);

    img {
        width: 30%;
        align-self: flex-end;
    }

    .img {
        width: 50%;
        align-self: flex-end;
    }
    .form {
        width: 400px;
        min-width: 400px;
        border: 1px solid #ccc;
        padding: 30px 40px 40px 40px;
        background: white;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-radius: 4px;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
        align-self: flex-end;
        h1 {
            font-size: 1.6rem;
            margin-bottom: 30px;
            text-align: center;
        }

        .form-control {
            padding-bottom: 40px;
            color: rgb(121, 121, 121);
            position: relative;
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
                color: red;
                position: absolute;
            }
        }

        button {
            border: none;
            font-size: inherit;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
            transition: 0.3s ease-in-out;
            text-transform: uppercase;
            font-weight: bolder;
            font-size: 14px;
            letter-spacing: 1px;
            width: 100%;
            color: white;
            width: 100%;
            background: rgb(2, 127, 239);
            height: 40px;
            margin-top: 20px;
            &:hover {
                background: rgb(59, 157, 243);
            }

            &.invalid {
                background: rgb(194, 194, 194);
                cursor: not-allowed;
            }
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.laptop}) {
        min-height: 100vh;
        height: auto;
        background-color: red;
        padding-bottom: 60px;
        .icon {
            display: none;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        padding-top: 150px;
        .form {
            align-self: center;
        }
    }
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        .form {
            padding: 30px 30px 40px 30px;
            min-width: 100%;
        }
    }
`;

export const StyledRegistrationWrapper = styled.div`
    footer {
        padding: 30px 20px;
        background: linear-gradient(rgb(131, 214, 214), rgb(61, 99, 153));
    }
`;
