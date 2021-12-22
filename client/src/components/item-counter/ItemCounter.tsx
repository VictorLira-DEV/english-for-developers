import classes from './styles/ItemCounter.module.css';

interface ItemCounter {
    counter: number;
    text: string;
}

const ItemCounter = (props: ItemCounter) => {
    return (
        <p className={classes['verbs-available']}>
            <span>{`${props.counter}`}</span> {props.text}
        </p>
    );
};

export default ItemCounter;
