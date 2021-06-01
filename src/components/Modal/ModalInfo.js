import React, {Fragment} from 'react';
import reactDom from 'react-dom';
import styles from './ModalInfo.module.css';

const ModalInfo = (props) => {

    const buttonHandler = () => {
        props.onCloseModal();
    }

    const BackDrop = (props) => {
        return <div className={styles.backdrop} onClick={buttonHandler}></div>;
    };

    const Modal = (props) => {
        return (
            <div className={`${styles.modal}`}>
                <div className={`${styles.box} shadow`}>
                    <div className={styles.title}>
                        {props.title}
                    </div>
                    <div className={styles.description}>
                        {props.description}
                    </div>
                    <button onClick={buttonHandler} className={styles.button} type="button">Okay</button>
                </div>
            </div>
        );
    }

    return (
        <Fragment>
            {/* using react portal */}
            {reactDom.createPortal(<BackDrop onClick={buttonHandler}/>, document.getElementById('backdrop-root'))}
            {reactDom.createPortal(<Modal title={props.title} description={props.description} onClick={buttonHandler}/>, document.getElementById('modal-root'))}
        </Fragment>
    );
}

export default ModalInfo;