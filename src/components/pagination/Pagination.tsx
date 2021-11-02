import classes from "./styles/Pagination.module.css";   

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
        <nav>
            <ul className={classes.pageList}>
                {pageNumbers.map((number) => {

                    if(number < props.maxPageNumberLimit+1 &&  number > props.minPageNumberLimit){
                        return (
                            <li
                                key={number}
                                className={`${classes.pages} ${
                                    number === props.currentPage && classes.active
                                }`}
                            >
                                <a href="#" onClick={() => props.paginate(number)}>
                                    {number}
                                </a>
                            </li>
                        );
                    }else{
                        return null
                    }
                    
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
