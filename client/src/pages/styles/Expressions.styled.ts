import styled from 'styled-components';

export const StyledExpression = styled.div`
    overflow-y: hidden;
    padding: 100px 0 200px 0;
    min-height: 100vh;
    position: relative;
    .verbs-list {
        position: relative;
        width: 700px;
        margin: 0 auto;
        list-style: none;
        transition: 0.3s ease-in-out;
        border-top: 1px dashed rgb(146, 145, 145);
        .btn-title {
            border-top-left-radius: 20px;
            border: none;
            background: rgb(250, 187, 187);
            color: rgb(255, 249, 249);
            padding: 10px 15px;
            font-size: 20px;
            position: absolute;
            right: 0;
            top: -45px;
        }

        .navigatin-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 60px;

            .pages {
                // padding: 15px;
                height: 51px;
                width: 41px;
                text-align: center;
                line-height: 50px;
                border: 1px solid rgb(253, 250, 250);
                background: rgb(9, 74, 130);
                &.pages-dots {
                    color: white;
                    font-size: 20px;
                    height: 51px;
                    width: 41px;
                    cursor: pointer;
                }

                button {
                    background: none;
                    color: white;
                    border: none;
                    height: 100%;
                    width: 100%;
                    cursor: pointer;
                }
            }
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        background: rgb(11, 91, 160);
        color: white;
        padding: 15px;
    }

    .pages {
        height: 51px;
        width: 41px;
        text-align: center;
        line-height: 50px;
        border: 1px solid rgb(253, 250, 250);
        background: rgb(9, 74, 130);
        color: white;
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        padding: 200px 0 150px 0;
        .verbs-list {
            width: 100%;
            padding: 0 20px;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        .verbs-list {
            .btn-title {
                top: -154px;
                border-top-left-radius: 0px;
                border-bottom-left-radius: 20px;
            }
        }
    }
`;
