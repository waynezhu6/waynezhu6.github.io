import React from 'react';
import styles from '../styles/pages/contact.module.scss';

const Contact = () => {
    return(
        <div className={styles.main}>
            <div className={styles.textContainer}>
                <div className={styles.title}>Lets get in touch!</div>
                <div className={styles.subtext}>
                    Thanks for stopping by! (...some more filler text here)
                </div>
            </div>

            <div className={styles.contactContainer}>

            </div>
        </div>
    );
}

export default Contact;