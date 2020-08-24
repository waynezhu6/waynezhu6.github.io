import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring'
import styles from '../styles/pages/about.module.scss';

import Experience from '../components/experience';
import Footer from '../components/footer';

const About = () => {

  //const [selected, setSelected] = useState(0);

  const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
  const enterFromLeft = useSpring({
    from: {transform: 'translate3d(-100px,0,0)'}, 
    to: {transform: 'translate3d(0px,0,0)'}
  });

  return(
    <div className={styles.animated}>

      <div className={styles.scrollbox}>

        <div className={styles.body}>

          {/* <div className={styles.title}>
            <div className={styles.titleRegular}>Hi. I'm&nbsp;</div>
            <div className={styles.titleUnderline}>Wayne Zhu</div>
          </div> */}

          <div className={styles.image}>
            <img></img>
          </div>

          <div>
            <div className={styles.subtitle}>About Me</div>

            <div className={styles.paragraph}>
              {"Hello! My name is Wayne and I'm a 18-year-old \
              developer, currently studying Computer Science \
              as a second-year student at the University of Toronto."}
            </div>

            <div className={styles.paragraph}>
              {"On top of my studies, I'm currently working as a Full-Stack Developer for Prefix, \
              a startup backed by the University of Toronto's Hatchery NEST incubation program."}
            </div>

            <div className={styles.resume}>
              View my resume (PDF 181kb).
            </div>
          </div>

          <div className={styles.separator}></div>

          <div>
            <div className={styles.subtitle}>Work Experience</div>

            <Experience 
              time="Apr 2020 - Present" 
              company="Prefix" 
              title="Full Stack Developer"
            />
          
            <Experience 
              time="Jun 2019 - Aug 2019" 
              company="PointClickCare" 
              title="Software Engineer Intern"
            />
          </div>

          <Footer/>

        </div>
      </div>

    </div>
  );
}

export default About;