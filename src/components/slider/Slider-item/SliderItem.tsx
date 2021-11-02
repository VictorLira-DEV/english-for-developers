import classes from "./styles/SliderItem.module.css";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

interface ISliderItem {
    src?: string;
    name?: string;
    profession?: string;
    className: string;
    style: any;
}

let starNumbers = [1, 2, 3, 4, 5];

const SliderItem = (props: ISliderItem) => {
    return (
        <div
            className={`${classes["slider-item"]} ${props.className}`}
            style={props.style}
        >
            <FaQuoteLeft id={classes["quotes-mark"]} />
            <div className={classes.profile}>
                <img src={props.src} alt="testimimonial-profile" />
                <div>
                    {starNumbers.map(() => {
                        return <AiFillStar className={classes.stars} />;
                    })}
                </div>
                <p>{props.name} </p>
                <p>{props.profession}</p>
            </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                ducimus libero eaque consequuntur eos, tempore illo officia
                aliquam quia dignissimos{" "}
            </p>
        </div>
    );
};

export default SliderItem;
