import { useEffect, useState, useContext } from 'react';
import classes from './styles/Expressions.module.css';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';
import PaginationWrapper from '../../components/paginationWrapper/PaginationWrapper';
import ListItemWrapper from '../../components/list-item-wrapper/ListItemWrapper';
import useAxios from '../../hooks/use-axios/useAxios';
import LoadSpinner from '../../components/load-spinner/LoadSpinner';
import { StickyHeaderContext } from '../../context/sticky-header/stickyHeader';
import SocialMedia from '../../components/social-media/SocialMedia';
import ItemCounter from '../../components/item-counter/ItemCounter';

const Expressions = () => {
    const [currentTransationId, setCurrentTranslationId] = useState('');
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
    const [pageNumberLimit] = useState(5);
    const { sendRequest, hasError, isLoading, setHasError } = useAxios();
    const [expressions, setExpressions] = useState([]);

    const headerCtx = useContext(StickyHeaderContext);
    headerCtx.intersectingFunction(false);

    useEffect(() => {
        const receivedData = function (data: any) {
            setExpressions(data.data);
        };

        sendRequest(
            {
                url: 'https://english-for-devs-heroku.herokuapp.com/expressions',
            },
            receivedData
        );
    }, []);

    useEffect(() => {
        setCurrentPage(currentPage);
    }, [currentPage]);
    //get current posts

    const indexOfLastPosts = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPosts - postPerPage;
    const currentPosts = expressions.slice(indexOfFirstPost, indexOfLastPosts);

    //change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        return currentPage;
    };

    const displayTranslation = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentTranslationId(e.currentTarget.id);
    };

    const hideTranslation = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentTranslationId('');
    };

    const nextPageHandler = () => {
        if (currentPage === Math.ceil(expressions.length / postPerPage)) return;
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const prevPageHandler = () => {
        if (currentPage === 1) return;

        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (expressions.length > maxPageNumberLimit) {
        pageIncrementBtn = (
            <li onClick={nextPageHandler} className={`${classes.pages}`}>
                ...
            </li>
        );
    }

    let pageDecrementBtn = null;
    if (expressions.length > maxPageNumberLimit) {
        pageDecrementBtn = (
            <li onClick={prevPageHandler} className={`${classes.pages}`}>
                ...
            </li>
        );
    }

    return (
        <div className={classes.container}>
            {isLoading && <LoadSpinner />}
            {!isLoading && (
                <ul className={classes['verbs-list']}>
                    <ItemCounter
                        counter={expressions.length}
                        text="Expressões Disponíveis"
                    />
                    <Button className={classes['btn-title']}>
                        Expressions
                    </Button>
                    <ListItemWrapper
                        currentPosts={currentPosts}
                        currentTransationId={currentTransationId}
                        displayTranslation={displayTranslation}
                        hideTranslation={hideTranslation}
                    />

                    <PaginationWrapper
                        minPageNumberLimit={minPageNumberLimit}
                        maxPageNumberLimit={maxPageNumberLimit}
                        currentPage={currentPage}
                        pageDecrementBtn={pageDecrementBtn}
                        pageIncrementBtn={pageIncrementBtn}
                        postPerPage={postPerPage}
                        totalPosts={expressions.length}
                        prevPageHandler={prevPageHandler}
                        paginate={paginate}
                        nextPageHandler={nextPageHandler}
                    />
                </ul>
            )}
            <Footer className={classes.footer} />
            <SocialMedia />
        </div>
    );
};

export default Expressions;
