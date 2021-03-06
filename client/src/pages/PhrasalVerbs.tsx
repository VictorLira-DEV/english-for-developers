import React, { useEffect, useState, useContext } from 'react';
import Footer from '../components/Footer';
import PaginationWrapper from '../components/PaginationWrapper';
import ListItemWrapper from '../components/ListItemWrapper';
import Button from '../components/Button';
import useAxios from '../hooks/use-axios/useAxios';
import LoadSpinner from '../components/LoadSpinner';
import { StickyHeaderContext } from '../context/sticky-header/stickyHeader';
import SocialMedia from '../components/SocialMedia';
import ItemCounter from '../components/ItemCounter';
import { StyledPhrasalVerbs } from './styles/PhrasalVerbs.styled';
import { scrollUp } from '../helper/scrollUp';

const PhrasalVerbs = () => {
    const [currentTransationId, setCurrentTranslationId] = useState('');
    const { sendRequest, isLoading } = useAxios();
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    const [phrasalVerbs, setPhrasalVerbs] = useState([]);
    const headerCtx = useContext(StickyHeaderContext);

    headerCtx.intersectingFunction(false);

    useEffect(() => {
        scrollUp();
        setCurrentPage(currentPage);
    }, [currentPage]);
    //get current posts

    useEffect(() => {
        const receivedData = function useCallback(data: any) {
            setPhrasalVerbs(data.data);
        };

        sendRequest(
            {
                url: 'https://english-for-devs-heroku.herokuapp.com/read',
            },
            receivedData
        );
    }, []);

    const indexOfLastPosts = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPosts - postPerPage;
    const currentPosts = phrasalVerbs.slice(indexOfFirstPost, indexOfLastPosts);

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
        if (currentPage === Math.ceil(phrasalVerbs.length / postPerPage))
            return;
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

    //paginationDots
    let pageIncrementBtn = null;
    if (phrasalVerbs.length > maxPageNumberLimit) {
        pageIncrementBtn = (
            <li onClick={nextPageHandler} className="pages">
                ...
            </li>
        );
    }

    let pageDecrementBtn = null;
    if (phrasalVerbs.length > maxPageNumberLimit) {
        pageDecrementBtn = (
            <li onClick={prevPageHandler} className="pages">
                ...
            </li>
        );
    }

    return (
        <React.Fragment>
            {isLoading && <LoadSpinner />}
            <StyledPhrasalVerbs>
                {!isLoading && (
                    <ul className="verbs-list">
                        <ItemCounter
                            counter={phrasalVerbs.length}
                            text="Verbos Dispon??veis"
                        />
                        <Button className="btn-title">Phrasal Verbs</Button>
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
                            totalPosts={phrasalVerbs.length}
                            prevPageHandler={prevPageHandler}
                            paginate={paginate}
                            nextPageHandler={nextPageHandler}
                        />
                    </ul>
                )}
                <Footer className="footer" />
            </StyledPhrasalVerbs>
            <SocialMedia />
        </React.Fragment>
    );
};

export default PhrasalVerbs;
