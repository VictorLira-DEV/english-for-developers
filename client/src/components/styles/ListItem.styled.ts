import styled from 'styled-components';

export const StyledListItem = styled.div`
    .item__english {
        border-bottom: 1px dashed rgb(141, 141, 141);
        margin-bottom: 5px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: 20px 5px;

        .item__phrasal-verb {
            font-weight: bolder;
            color: rgb(9, 74, 130);
            margin-bottom: 10px;
        }

        .item__english-example {
            font-size: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            color: rgb(3, 139, 189);

            .item__english-text-examples {
                & :not(:last-child) {
                    margin-bottom: 10px;
                }
            }

            .item__drop {
                font-size: 30px;
                width: 50px;
                color: black;
                cursor: pointer;
            }
        }
    }

    .item__portuguese {
        font-size: 1rem;
        transition: 0.1s ease-in-out;
        opacity: 1;
        // color: rgb(238, 96, 96);
        color: rgb(95, 95, 95);
        border-bottom: 1px dashed red;
        padding: 20px 5px;
        & :not(:last-child) {
            margin-bottom: 10px;
        }

        &.item__hide {
            transition: 0.1s ease-in-out;
            // position: relative;
            // visibility: hidden;
            height: 0;
            padding: 0 10px;
            // z-index: -4;
            opacity: 0;
            transform: translateY(-100%);
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        .item__english {
            .item__english-example {
                line-height: 1.5;
            }
        }

        .item__portuguese {
            line-height: 1.5;
        }
    }
`;
