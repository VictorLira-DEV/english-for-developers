// import classes from './styles/SliderItem.module.css';
import { AiFillStar } from 'react-icons/ai';
import { FaQuoteLeft } from 'react-icons/fa';
import { StyledSliderItem } from './styles/SliderItem.styled';

interface ISliderItem {
    src?: string;
    name?: string;
    profession?: string;
    className: string;
    style: any;
    sliderItem: string;
}

let starNumbers = [1, 2, 3, 4, 5];

const SliderItem = (props: ISliderItem) => {
    const { className, sliderItem, style, name, profession, src } = props;

    return (
        <StyledSliderItem className={className} style={style}>
            <FaQuoteLeft id={'quotes-mark'} />
            <div className={'profile'}>
                <img src={src} alt="testimimonial-profile" />
                <div>
                    {starNumbers.map(() => {
                        return <AiFillStar className={'stars'} />;
                    })}
                </div>
                <p>{name} </p>
                <p>{profession}</p>
            </div>
            <p>{sliderItem}</p>
        </StyledSliderItem>
    );
};

export default SliderItem;
