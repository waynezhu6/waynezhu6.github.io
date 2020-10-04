import React from 'react';
import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import styles from '../styles/components/footer.module.scss';

const Footer: React.FC = () => {

  const openNewTab = (url: string) => {
    //opens url in new tab
    var win = window.open(url, '_blank');
    win?.focus();
  }

  const getLastUpdated = () => {
    let date = document.lastModified.substring(0, 10).split('/');
    let obj = new Date(parseInt(date[2]), parseInt(date[0]) - 1, parseInt(date[1]));
    return obj.toDateString().replace(/^\S+\s/,'');
  }

  return(
    <div className={styles.footer}>
      <div className={styles.icons}>
        <IoMdMail onClick={() => openNewTab('mailto:wayne.zhu6@gmail.com')}/>
        <IoLogoLinkedin onClick={() => openNewTab('https://www.linkedin.com/in/wayne-zhu/')}/>
        <IoLogoGithub onClick={() => openNewTab('https://www.github.com/waynezhu6')}/>
      </div>
      <div className={styles.text}>Last Updated: {getLastUpdated()}</div>
      {/* <div className={styles.text}>Made with &#x2764;	and React</div> */}
    </div>
  )
}

export default Footer;