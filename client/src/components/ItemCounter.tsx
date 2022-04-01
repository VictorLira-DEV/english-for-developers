import { StyledItemCounter } from './styles/ItemCounter.styled';

interface ItemCounterProps {
    counter: number;
    text: string;
}

const ItemCounter = (props: ItemCounterProps) => {
    return (
        <StyledItemCounter>
            <span>{`${props.counter}`}</span> {props.text}
        </StyledItemCounter>
    );
};

export default ItemCounter;
