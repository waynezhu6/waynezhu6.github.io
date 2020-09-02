import React from 'react';
import styles from '../styles/components/experience.module.scss';

interface Props{
  time: string,
  company: string,
  title: string
}

const Experience: React.FC<Props> = (props) => {

  return(
    <div className={styles.experience}>
      <div className={styles.time}>{props.time}</div>
      <div className={styles.company}>{props.company}</div>
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}

export default Experience;