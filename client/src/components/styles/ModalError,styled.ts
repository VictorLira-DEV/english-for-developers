import styled from 'styled-components';

export const StyledModalError = styled.div`
    width: 400px;
    height: 300px;
    .error {
        background: rgb(238, 85, 85);
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        color: white;
        #error_icon {
            font-size: 70px;
            border-radius: 50%;
            border: 2px solid white;
        }

        #close_icon {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 30px;
            color: white;
        }
    }

    .error_message {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgb(77, 80, 89);
        .main_message {
            font-size: 30px;
        }

        .second_message {
            margin: 10px 0 20px 0;
        }

        button {
            border: none;
            border-radius: 20px;
            padding: 10px 20px;
            background: rgb(241, 182, 18);
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover {
                background: rgb(221, 166, 16);
            }
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        width: 90vw;
    }
`;
