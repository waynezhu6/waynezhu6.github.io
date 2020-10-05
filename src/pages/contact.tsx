import React, { useState } from 'react';
import Footer from '../components/footer';
import styles from '../styles/pages/contact.module.scss';

const Contact: React.FC = () => {

  const [formDisabled, setFormDisabled] = useState(false);

  const onSubmit = () => {
    setFormDisabled(true);
  }

  return(
    <div className={styles.animated}>

      <div className={styles.body}>
        <div className={styles.title}>Lets get in touch!</div>
        <div className={styles.subtext}>
          Thanks for stopping by! If you've got any inquiries, or you just want to
          say hello, feel free to send me a message. I'll try to get back to you
          as quickly as possible.
        </div>

        <iframe 
          name="hidden_iframe" 
          style={{display:'none'}}
          title={"hidden iframe"} 
        />

        <form 
          action='https://docs.google.com/forms/u/1/d/e/1FAIpQLSfHtS1qNBlX-53WYeCwY7ohLf1rZ0Qrkas61GCsp9l46RacFQ/formResponse'
          method="post" 
          target="hidden_iframe"
          onSubmit={() => {onSubmit()}}
        >

          <input 
            name="entry.67477018"
            type="text" 
            placeholder="Name"
            required
            readOnly={formDisabled}
            disabled={formDisabled}
          />
          <div className={styles.separator}/>
          <input 
            name="entry.658136846"
            type="email" 
            placeholder="Email"
            required
            readOnly={formDisabled}
            disabled={formDisabled}
          />
          <textarea 
            name="entry.1078839895"
            placeholder="Message"
            required
            readOnly={formDisabled}
            disabled={formDisabled}
          />
          
          <div className={styles.submit}>
              <input 
                className={formDisabled ? styles.submitInactive : styles.submitActive}
                type="submit" 
                value={formDisabled ? "Recieved. Thanks!" : "Submit"}
                disabled={formDisabled}
              />
          </div>

        </form> 

        <Footer/>
        
      </div>
        
    </div>

  );
}

export default Contact;