import classes from './styles/SocialMedia.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => {
    return (
        <div className={classes['social-media']}>
            <a
                href="https://github.com/VictorLira-DEV"
                target="_blank"
                className={classes['icon']}
            >
                <AiFillGithub />
            </a>
            <a
                href="https://api.whatsapp.com/send?phone=5527996483376"
                target="blank"
                className={`${classes['icon']} ${classes['whatsapp']}`}
            >
                <AiOutlineWhatsApp />
            </a>
            <a
                href="https://www.linkedin.com/in/victor-lira-front-end/"
                target="_blank"
                className={`${classes['icon']} ${classes['linkedin']} `}
            >
                <AiFillLinkedin />
            </a>
        </div>
    );
};

export default SocialMedia;
