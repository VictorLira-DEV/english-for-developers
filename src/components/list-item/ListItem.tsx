import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import classes from "./styles/ListItem.module.css";

interface IListItem {
    id: string;
    currentId: string;
    onDisplayTranslation: (e: React.FormEvent) => void;
    onHideTranslation: (e: React.FormEvent) => void;
    example_1: string;
    example_2: string;
    translation_1: string;
    translation_2: string;
    phrasalverb: string
}

const ListItem = (props: IListItem) => {
    return (
        <div>
            <li className={classes.english}>
                <div className={classes["phrasal-verb"]}>{props.phrasalverb}</div>
                <div className={classes["english-example"]}>
                    <div className={classes["english-text-examples"]}>
                        <p> (1) {props.example_1} </p>
                        <p> (2) {props.example_2} </p>
                    </div>
                    {props.id !== props.currentId && (
                        <MdOutlineKeyboardArrowDown
                            className={classes.drop}
                            onClick={props.onDisplayTranslation}
                            id={props.id}
                        />
                    )}

                    {props.id === props.currentId && (
                        <MdOutlineKeyboardArrowUp
                            className={classes.drop}
                            onClick={props.onHideTranslation}
                            id={props.id}
                        />
                    )}
                </div>
            </li>
            <li
                className={`${classes.portuguese} ${
                    props.id !== props.currentId && classes.hide
                }`}
            >
                <p> (1) {props.translation_1}</p>
                <p> (2) {props.translation_2} </p>
            </li>
        </div>
    );
};

export default ListItem;
