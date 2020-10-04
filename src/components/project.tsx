import React, { useState } from 'react'
import styles from '../styles/components/project.module.scss';

interface Props{
  index: number,
  active: boolean,
  width: number,
  onClick: Function,

  name?: string,
  img?: string,
  tags?: string[],
  description?: string,
  try?: string,
  source?: string
}

const Project: React.FC<Props> = (props) => {

  const [loaded, setLoaded] = useState(false);

  const onClick = () => {
    props.onClick(props.index);
  }

  return(
    <div 
      className={`${styles.main} ${props.active ? styles.active : styles.inactive}`} 
      onMouseDown={() => onClick()}
      style={{width: props.width - 15, height: props.width - 15}}
    >
      <img 
        className={styles.image} 
        src={require('../assets/projects/' + props.img)}
        onLoad={() => setLoaded(true)}
        alt={props.name}
      />

      <div className={!loaded ? styles.placeholder: ""}></div>

    </div>
  );
}

export default Project;
