import classes from './styles/Pagination.module.css';
import Pagination from '../pagination/Pagination';
import Button from '../button/Button';

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
        <div className={classes['navigatin-wrapper']}>
            <li className={classes.pages}>
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
            <li className={classes.pages}>
                <Button onClick={props.nextPageHandler}>Next </Button>
            </li>
        </div>
    );
};

export default PaginationWrapper;
