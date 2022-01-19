import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// import classes from "./styles/ListItem.module.css";
import { StyledListItem } from './styles/ListItem.styled'

interface IListItem {
    id: string;
    currentId: string;
    onDisplayTranslation: (e: React.FormEvent) => void;
    onHideTranslation: (e: React.FormEvent) => void;
    example_1: string;
    example_2: string;
    translation_1: string;
    translation_2: string;
    content: string
}

const ListItem = (props: IListItem) => {
    return (
        <StyledListItem>
            <li className='item__english'>
                <div className="item__phrasal-verb">{props.content}</div>
                <div className="item__english-example">
                    <div className="item__english-text-examples">
                        <p>1 - {props.example_1} </p>
                        <p>2 - {props.example_2} </p>
                    </div>
                    {props.id !== props.currentId && (
                        <MdOutlineKeyboardArrowDown
                            className='item__drop'
                            onClick={props.onDisplayTranslation}
                            id={props.id}
                        />
                    )}

                    {props.id === props.currentId && (
                        <MdOutlineKeyboardArrowUp
                            className='item__drop'
                            onClick={props.onHideTranslation}
                            id={props.id}
                        />
                    )}
                </div>
            </li>
            <li
                className={`${'item__portuguese'} ${
                    props.id !== props.currentId && 'item__hide'
                }`}
            >
                <p>1 - {props.translation_1}</p>
                <p>2 -  {props.translation_2} </p>
            </li>
        </StyledListItem>
    );
};

export default ListItem;
