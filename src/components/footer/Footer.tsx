import classes from './styles/Footer.module.css';
interface IFooter {
    className?: string
}
const Footer = (props:IFooter) => {
    return(
        <footer className={props.className}>
            <h1>Footer</h1>
        </footer>
    )
}

export default Footer