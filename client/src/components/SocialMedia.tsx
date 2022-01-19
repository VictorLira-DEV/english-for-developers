// import classes from './styles/SocialMedia.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { StyledSocialMedia } from './styles/SocialMedia.styled';

const SocialMedia = () => {
    return (
        <StyledSocialMedia>
            <a
                href="https://github.com/VictorLira-DEV"
                target="_blank"
                className="icon"
            >
                <AiFillGithub />
            </a>
            <a
                href="https://api.whatsapp.com/send?phone=5527996483376"
                target="blank"
                className={`${['icon']} ${['whatsapp']}`}
            >
                <AiOutlineWhatsApp />
            </a>
            <a
                href="https://www.linkedin.com/in/victor-lira-front-end/"
                target="_blank"
                className={`${['icon']} ${['linkedin']} `}
            >
                <AiFillLinkedin />
            </a>
        </StyledSocialMedia>
    );
};

export default SocialMedia;
