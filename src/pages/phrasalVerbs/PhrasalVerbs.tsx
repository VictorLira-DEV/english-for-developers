import { useEffect, useState } from "react";
import classes from "./styles/PhrasalVerbs.module.css";
import ListItem from "../../components/list-item/ListItem";
import { phrasalVerbs_api } from "./allVerbs/AllVerbs";
import Pagination from "../../components/pagination/Pagination"
import Footer from "../../components/footer/Footer";


const PhrasalVerbs = () => {
    const [currentTransationId, setCurrentTranslationId] = useState("");
    const [posts, setPosts] = useState([])
    const [loading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

 

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            // const res = await axios.get('url');
            // setPosts(res.data)
            setIsLoading(false)
        }

        fetchPosts()
    }, [])

    useEffect(() => {
        setCurrentPage(currentPage)
        console.log(currentPage)

    }, [currentPage])
    //get current posts

    const indexOfLastPosts = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPosts - postPerPage;
    const currentPosts = phrasalVerbs_api.slice(indexOfFirstPost, indexOfLastPosts)

    //change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        return currentPage
    }

    const displayTranslation = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentTranslationId(e.currentTarget.id);
    };

    const hideTranslation = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentTranslationId("");
    };

    const nextPageHandler = () => {
        if(currentPage === Math.ceil(phrasalVerbs_api.length / postPerPage))return
        setCurrentPage(currentPage+1);
        if(currentPage + 1  > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

     const prevPageHandler = () => {
        if(currentPage === 1) return

        setCurrentPage(currentPage - 1 );
        if((currentPage - 1)%pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    let pageIncrementBtn = null;
    if(phrasalVerbs_api.length > maxPageNumberLimit ){
        pageIncrementBtn = <li onClick={nextPageHandler} className={`${classes.pages} ${classes["pages-dots"]}`} > ... </li>
    }

    let pageDecrementBtn = null;
    if(phrasalVerbs_api.length > maxPageNumberLimit ){
        pageDecrementBtn = <li onClick={prevPageHandler} className={`${classes.pages} ${classes["pages-dots"]}`}> ... </li>
    }

    return (
        <>
        <div className={classes.container}>
            <ul className={classes["verbs-list"]}>
                <button className={classes['btn-title']}> Phrasal Verbs </button>
                {currentPosts.map((item, index) => {
                    return (
                        <ListItem
                            phrasalverb={item.phrasalVerb}
                            id={item.id}
                            key={item.id}
                            onDisplayTranslation={displayTranslation}
                            onHideTranslation={hideTranslation}
                            example_1={item.example_1}
                            example_2={item.example_2}
                            translation_1={item.translation_1}
                            translation_2={item.translation_2}
                            currentId={currentTransationId}
                        />
                    );
                })}
                <div className={classes['navigatin-wrapper']}>
                    <li className={classes.pages} >
                        <button  onClick={prevPageHandler}>Prev </button>
                    </li>
                       {pageDecrementBtn} <Pagination minPageNumberLimit={minPageNumberLimit} maxPageNumberLimit={maxPageNumberLimit} currentPage={currentPage} paginate={paginate} postsPerPage={postPerPage} totalPosts={phrasalVerbs_api.length} />{pageIncrementBtn}
                    <li className={classes.pages}>
                        <button onClick={nextPageHandler} >Next </button>
                    </li>
                </div>
            </ul>
            <Footer className={classes.footer}/>
        </div>
        </>
    );
};

export default PhrasalVerbs;
