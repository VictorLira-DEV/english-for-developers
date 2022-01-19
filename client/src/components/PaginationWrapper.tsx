// import classes from './styles/Pagination.module.css';
import Pagination from './Pagination';
import Button from './Button';
import { StyledPaginationWrapper } from './styles/PaginationWrapper.styled';

interface IPaginationWrapper {
    pageDecrementBtn: any;
    minPageNumberLimit: any;
    maxPageNumberLimit: number;
    currentPage: number;
    postPerPage: number;
    totalPosts: any;
    pageIncrementBtn: any;
    prevPageHandler: () => void;
    nextPageHandler: () => void;
    paginate: (a: number) => number;
}

const PaginationWrapper = (props: IPaginationWrapper) => {
    return (
        <StyledPaginationWrapper>
            <li className={'pages'}>
                <Button onClick={props.prevPageHandler}>Prev </Button>
            </li>
            {props.pageDecrementBtn}
            <Pagination
                minPageNumberLimit={props.minPageNumberLimit}
                maxPageNumberLimit={props.maxPageNumberLimit}
                currentPage={props.currentPage}
                paginate={props.paginate}
                postsPerPage={props.postPerPage}
                totalPosts={props.totalPosts}
            />
            {props.pageIncrementBtn}
            <li className={'pages'}>
                <Button onClick={props.nextPageHandler}>Next </Button>
            </li>
        </StyledPaginationWrapper>
    );
};

export default PaginationWrapper;
