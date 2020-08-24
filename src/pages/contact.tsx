import React from 'react';
import Footer from '../components/footer';
import styles from '../styles/pages/contact.module.scss';

const Contact = () => {
  return(
    <div className={styles.animated}>

      <div className={styles.scrollbox}>

        <div className={styles.body}>
          <div className={styles.title}>Lets get in touch!</div>
          <div className={styles.subtext}>
            Thanks for stopping by! If you've got any inquiries, or you just want to
            say hello, feel free to send me a message. I'll try to get back to you
            as quickly as possible.
          </div>

          <form onSubmit={() => {}}>
            <input type="text" placeholder="Name"/>
            <div className={styles.separator}/>
            <input type="text" placeholder="Email"/>
            <textarea placeholder="Message"/>
            <input className={styles.submit} type="submit" value="Submit"/>
          </form> 

          <Footer/>
          
        </div>
        
      </div>

    </div>

  );
}

export default Contact;