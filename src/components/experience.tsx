import React from 'react';
import styles from '../styles/components/experience.module.scss';

interface Props{
  logoPath: string,
  fullLogo?: boolean,
  time: string,
  company: string,
  title: string,
  location?: string
}

const Experience: React.FC<Props> = (props) => {

  return(
    <div className={styles.experience}>
      <div className={styles.button}>
        <div className={props.fullLogo ? styles.fullLogo : styles.logo}>
          <img src={props.logoPath}></img>
        </div>

        <div className={styles.header}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.company}>{props.company}</div>
          <div className={styles.time}>{props.time}</div>
          <div className={styles.location}>{props.location}</div>
        </div>

      </div>
    </div>
  )
}

export default Experience;