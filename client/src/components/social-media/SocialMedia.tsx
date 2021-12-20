import classes from './styles/SocialMedia.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => {
    return (
        <div className={classes['social-media']}>
            <div className={classes['icon']}>
                <AiFillGithub />
            </div>
            <div className={`${classes['icon']} ${classes['whatsapp']}`}>
                <AiOutlineWhatsApp />
            </div>
            <div className={`${classes['icon']} ${classes['linkedin']} `}>
                <AiFillLinkedin />
            </div>
        </div>
    );
};

export default SocialMedia;
