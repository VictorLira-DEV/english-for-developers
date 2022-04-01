// import classes from "./styles/Footer.module.css";
import { AiOutlineGithub } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { StyledFooter } from './styles/Footer.styled';

interface IFooter {
    className?: string;
}

const Footer = (props: IFooter) => {
    return (
        <StyledFooter className={`${props.className}`}>
            <div>
                Desenvolvedor <AiOutlineCopyrightCircle id={'copyright'} />
                Victor Lira
            </div>
            <div className={'social-media'}>
                <a
                    href="https://github.com/VictorLira-DEV"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiOutlineGithub />
                </a>
                <a
                    href="http://api.whatsapp.com/send?phone=552799483376"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsWhatsapp />
                </a>
            </div>
        </StyledFooter>
    );
};

export default Footer;
