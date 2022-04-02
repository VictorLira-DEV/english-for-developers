import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
// import classes from "./styles/ListItem.module.css";
import { StyledListItem } from './styles/ListItem.styled';

interface IListItem {
    id: string;
    currentId: string;
    onDisplayTranslation: (e: React.FormEvent) => void;
    onHideTranslation: (e: React.FormEvent) => void;
    example_1: string;
    example_2: string;
    translation_1: string;
    translation_2: string;
    content: string;
}

const ListItem = (props: IListItem) => {
    const {
        id,
        currentId,
        example_1,
        example_2,
        translation_1,
        translation_2,
        content,
        onDisplayTranslation,
        onHideTranslation,
    } = props;

    return (
        <StyledListItem>
            <li className="item__english">
                <div className="item__phrasal-verb">{content}</div>
                <div className="item__english-example" >
                    <div className="item__english-text-examples">
                        <p>1 - {example_1} </p>
                        <p>2 - {example_2} </p>
                    </div>
                    {id !== currentId && (
                        <MdOutlineKeyboardArrowDown
                            className="item__drop"
                            onClick={onDisplayTranslation}
                            id={id}
                        />
                    )}

                    {id === currentId && (
                        <MdOutlineKeyboardArrowUp
                            className="item__drop"
                            onClick={onHideTranslation}
                            id={id}
                        />
                    )}
                </div>
            </li>
            <li
                className={`${'item__portuguese'} ${
                    id !== currentId && 'item__hide'
                }`}
            >
                <p>1 - {translation_1}</p>
                <p>2 - {translation_2} </p>
            </li>
        </StyledListItem>
    );
};

export default ListItem;
