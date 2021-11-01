import { useState } from "react";
import classes from "./styles/PhrasalVerbs.module.css";
import ListItem from "../../components/list-item/ListItem";

const phrasalVerbs_api = [
    {
        id: "n1",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
    {
        id: "n2",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
    {
        id: "n3",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
    {
        id: "n1",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
    {
        id: "n2",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
    {
        id: "n3",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
    {
        id: "n1",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
    {
        id: "n2",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
    {
        id: "n3",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
    {
        id: "n3",
        phrasalVerb: "To look foward to",
        example_1: "I'm looking foward to find a brand new job",
        example_2: "I look foward to see you again",
        translation_1: "hha hahaha ahaha haha",
        translation_2: "hu  hu  huuuuhu   hu huhu",
    },
];

const PhrasalVerbs = () => {
    const [currentTransationId, setCurrentTranslationId] = useState("");

    const displayTranslation = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentTranslationId(e.currentTarget.id);
    };

    const hideTranslation = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentTranslationId("");
    };

    return (
        <div className={classes.container}>
            <ul className={classes["verbs-list"]}>
                <button> Phrasal Verbs </button>
                {phrasalVerbs_api.map((item, index) => {
                    return (
                        <ListItem
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
            </ul>
        </div>
    );
};

export default PhrasalVerbs;
