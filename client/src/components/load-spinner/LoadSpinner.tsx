import styles from './styles/loadSpinner.module.css';

const LoadSpinner = () => {
    return (
        <div className={styles['circle-wrapper']}>
            <div className={styles.circle}></div>
        </div>
    );
};

export default LoadSpinner;
