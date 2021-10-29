import classes from './styles/SliderItem.module.css'
import { AiFillStar } from 'react-icons/ai';

interface ISliderItem {
    src?: string;
    name?: string;
    profession?: string;
    className: string;
    style: any
}

let starNumbers = [1,2,3,4,5]

const SliderItem = (props:ISliderItem) => {
    return (
        <div className={`${classes['slider-item']} ${props.className}`} style={props.style}> 
            <div className={classes.profile}>
                <img src={props.src}/>
                <div> 
                    {starNumbers.map(() => {
                        return <AiFillStar className={classes.stars} />
                    })}
                </div>
                <p>{props.name} </p>
                <p>{props.profession}</p>
                
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ducimus libero eaque consequuntur eos, tempore illo officia aliquam quia dignissimos </p>
        </div>    )
}

export default SliderItem