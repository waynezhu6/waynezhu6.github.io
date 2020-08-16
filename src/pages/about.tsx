import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring'
import styles from '../styles/pages/about.module.scss';

const About = () => {

  //const [selected, setSelected] = useState(0);

  const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
  const enterFromLeft = useSpring({
    from: {transform: 'translate3d(-100px,0,0)'}, 
    to: {transform: 'translate3d(0px,0,0)'}
  });

  return(
    <div className={styles.body}>

      <div className={styles.titleContainer}>
        <div className={styles.titleRegular}>Hi. I'm&nbsp;</div>
        <div className={styles.titleUnderline}>Wayne Zhu.</div>
      </div>

      <div className={styles.bodyContainer}>

        <div className={styles.element}>
          <div className={styles.intro}>
            {"Hello! My name is Wayne and I'm a 18-year-old \
            developer, currently studying Computer Science \
            as a second-year student at the University of Toronto."}
          </div>

          <div className={styles.intro}>
            {"I'm currently working as a Full-Stack Developer for Prefix, a startup \
            backed by the University of Toronto's Hatchery NEST incubation program."}
          </div>

          <div className={styles.intro}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>

          <div className={styles.intro}>
            <span className={styles.resume}>View my resume (PDF 181kb).</span>
          </div>
        </div>

        <div className={styles.element}>
          <img className = {styles.image} src = {require('../assets/profilePicture.png')}></img>
        </div>

      </div>

    </div>
  );
}

export default About;