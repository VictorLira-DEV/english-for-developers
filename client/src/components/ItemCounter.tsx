import classes from './styles/ItemCounter.module.css';
import { StyledItemCounter } from './styles/ItemCounter.styled'

interface ItemCounter {
    counter: number;
    text: string;
}

const ItemCounter = (props: ItemCounter) => {
    return (
        <StyledItemCounter>
            <span>{`${props.counter}`}</span> {props.text}
        </StyledItemCounter>
    );
};

export default ItemCounter;
