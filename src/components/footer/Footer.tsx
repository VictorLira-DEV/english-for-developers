import classes from './styles/Footer.module.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom'

interface IFooter {
    className?: string
}

const Footer = (props:IFooter) => {
    return(
        <footer className={`${classes.footer} ${props.className}`}>
            Desenvolvedor <AiOutlineCopyrightCircle id={classes.copyright} />Victor Lira
            <div className={classes['social-media']}>
                   <a href="https://github.com/VictorLira-DEV" target="_blank" > <AiOutlineGithub /> </a>
                   <a href="http://api.whatsapp.com/send?phone=552799483376" target="_blank" > <BsWhatsapp /></a>
            </div>
        </footer>
    )
}

export default Footer