import { useEffect, useState } from "react";
import classes from "./styles/PhrasalVerbs.module.css";
import { phrasalVerbs_api } from "./allVerbs/AllVerbs";
import Footer from "../../components/footer/Footer";
import PaginationWrapper from "../../components/paginationWrapper/PaginationWrapper";
import ListItemWrapper from "../../components/list-item-wrapper/ListItemWrapper";
import Button from "../../components/button/Button";

const PhrasalVerbs = () => {
    const [currentTransationId, setCurrentTranslationId] = useState("");
    // const [posts, setPosts] = useState([]);
    // const [loading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setIsLoading(true);
    //         // const res = await axios.get('url');
    //         // setPosts(res.data)
    //         setIsLoading(false);
    //     };

    //     fetchPosts();
    // }, []);

    useEffect(() => {
        setCurrentPage(currentPage);
        console.log(currentPage);
    }, [currentPage]);
    //get current posts

    const indexOfLastPosts = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPosts - postPerPage;
    const currentPosts = phrasalVerbs_api.slice(
        indexOfFirstPost,
        indexOfLastPosts
    );

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
        setCurrentTranslationId("");
    };

    const nextPageHandler = () => {
        if (currentPage === Math.ceil(phrasalVerbs_api.length / postPerPage))
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
    if (phrasalVerbs_api.length > maxPageNumberLimit) {
        pageIncrementBtn = (
            <li onClick={nextPageHandler} className={`${classes.pages}`}>
                ...
            </li>
        );
    }

    let pageDecrementBtn = null;
    if (phrasalVerbs_api.length > maxPageNumberLimit) {
        pageDecrementBtn = (
            <li onClick={prevPageHandler} className={`${classes.pages}`}>
                ...
            </li>
        );
    }

    return (
        <div className={classes.container}>
            <ul className={classes["verbs-list"]}>
                <Button className={classes["btn-title"]}>Phrasal Verbs</Button>
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
                    totalPosts={phrasalVerbs_api.length}
                    prevPageHandler={prevPageHandler}
                    paginate={paginate}
                    nextPageHandler={nextPageHandler}
                />
            </ul>
            <Footer className={classes.footer} />
        </div>
    );
};

export default PhrasalVerbs;
