import ListItem from '../list-item/ListItem';
import { Fragment } from 'react';

interface Iprops {
    currentPosts: any;
    currentTransationId: string;
    displayTranslation: (e: React.FormEvent) => void;
    hideTranslation: (e: React.FormEvent) => void;
}

const ListItemWrapper = (props: Iprops) => {
    return (
        <Fragment>
            {props.currentPosts.map((item: any, index: any) => {
                return (
                    <ListItem
                        content={item.content}
                        id={item._id}
                        key={item._id}
                        onDisplayTranslation={props.displayTranslation}
                        onHideTranslation={props.hideTranslation}
                        example_1={item.example_1}
                        example_2={item.example_2}
                        translation_1={item.translation_1}
                        translation_2={item.translation_2}
                        currentId={props.currentTransationId}
                    />
                );
            })}
        </Fragment>
    );
};

export default ListItemWrapper;
