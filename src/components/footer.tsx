import React from 'react';
import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import styles from '../styles/components/footer.module.scss';

const Footer: React.FC = () => {

  const openNewTab = (url: string) => {
    //opens url in new tab
    var win = window.open(url, '_blank');
    win?.focus();
  }

  const getDateOrdinal = (date: number) => {
    if (date > 3 && date < 21) return "th";
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const getLastUpdated = () => {
    let date = document.lastModified.substring(0, 10).split('/');
    let dateObj = new Date(parseInt(date[2]), parseInt(date[0]) - 1, parseInt(date[1]));

    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();
    return `${month} ${day}${getDateOrdinal(day)}, ${year}`
  }

  return(
    <div className={styles.footer}>
      {/* <div className={styles.icons}>
        <IoMdMail onClick={() => openNewTab('mailto:wayne.zhu6@gmail.com')}/>
        <IoLogoLinkedin onClick={() => openNewTab('https://www.linkedin.com/in/wayne-zhu/')}/>
        <IoLogoGithub onClick={() => openNewTab('https://www.github.com/waynezhu6')}/>
      </div> */}
      <div className={styles.entry}>Email</div>
      <div className={styles.entry}>LinkedIn</div>
      <div className={styles.entry}>GitHub</div>
      <div className={styles.updated}>Updated {getLastUpdated()}</div>
    </div>
  )
}

export default Footer;