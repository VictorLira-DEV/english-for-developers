import styled from 'styled-components';

export const StyledPagination = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    .pagination__pages {
        cursor: pointer;
        text-align: center;
        transition: 0.4s ease-in-out;
        background: rgb(9, 74, 130);
        border: 1px solid rgb(253, 250, 250);
        text-decoration: none;
        padding: 15px 15px;
        color: white;
        &.pagination__active {
            background: rgb(61, 143, 214);
        }

        &:hover {
            background: rgb(61, 143, 214);
        }
    }
`;
