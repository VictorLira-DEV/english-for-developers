import ListItem from "../list-item/ListItem";

interface Iprops {
    currentPosts: any;
    displayTranslation: (e: React.FormEvent) => void;
    hideTranslation: (e: React.FormEvent) => void;
    currentTransationId: string;
}

const ListItemWrapper = (props: Iprops) => {
    return (
        <>
            {props.currentPosts.map((item: any, index: any) => {
                return (
                    <ListItem
                        phrasalverb={item.phrasalVerb}
                        id={item.id}
                        key={item.id}
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
        </>
    );
};

export default ListItemWrapper;
