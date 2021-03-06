import styled from 'styled-components';

export const StyledPaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;

    .pages {
        transition: 0.4s ease-in-out;
        height: 51px;
        width: 41px;
        text-align: center;
        line-height: 50px;
        border: 1px solid rgb(253, 250, 250);
        background: rgb(9, 74, 130);
        &:hover {
            background: rgb(61, 143, 214);
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
`;
