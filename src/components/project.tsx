import React, { Component } from 'react'
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

interface State{
  active: boolean
}

class Project extends Component<Props, State>{

  constructor(props: Props){
    super(props);
    this.state = {
      active: false
    }
  }

  setActive(active: boolean){
    //sets the active state
    this.setState(prev => ({
      ...prev,
      active: active
    }));
  }

  onClick(){
    this.props.onClick(this.props.index);
  }

  render(){
    return(
      <div 
        className={`${styles.main} ${this.props.active ? styles.active : styles.inactive}`} 
        onMouseDown={() => this.onClick()}
        style={{width: this.props.width - 15, height: this.props.width - 15}}
      >
        <img 
          className={styles.image} 
          src={require('../assets/projects/' + this.props.img)}
        />
      </div>
    );
  }
}

export default Project;