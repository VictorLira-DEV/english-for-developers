// import classes from './styles/Pagination.module.css';
import { StyledPagination } from './styles/Pagination.styled';

interface IPagination {
    postsPerPage: number;
    currentPage: number;
    totalPosts: number;
    paginate: (a: number) => number;
    maxPageNumberLimit: number;
    minPageNumberLimit: number;
}

const Pagination = (props: IPagination) => {
    const pageNumbers = [];

    for (
        let i = 1;
        i <= Math.ceil(props.totalPosts / props.postsPerPage);
        i++
    ) {
        pageNumbers.push(i);
    }

    return (
        <StyledPagination>
            {pageNumbers.map(number => {
                if (
                    number < props.maxPageNumberLimit + 1 &&
                    number > props.minPageNumberLimit
                ) {
                    return (
                        <li
                            key={number}
                            className={`${'pages'} ${
                                number === props.currentPage && 'active'
                            }`}
                            onClick={() => props.paginate(number)}
                        >
                            {number}
                        </li>
                    );
                } else {
                    return null;
                }
            })}
        </StyledPagination>
    );
};

export default Pagination;
