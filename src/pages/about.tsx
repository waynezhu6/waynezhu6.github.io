import React from 'react';
import styles from '../styles/pages/about.module.scss';

import Experience from '../components/experience';
import Footer from '../components/footer';

const About: React.FC = () => {

  return(
    <div className={styles.animated}>

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
            {`Hello! My name is Wayne and I'm a 19-year-old \
            developer, currently studying Computer Science \
            as a third-year student at the University of Toronto.`}
          </div>

          <div className={styles.paragraph}>
            {`On top of my studies, I'm also currently working as a \
            Software Developer Intern for EQ Works, a Toronto-based \
            data analytics firm. Feel free to view my resume below for \
            more details about my work experience.`}
          </div>

          <div className={styles.paragraph}>
            {`I'm currently searching for a Summer 2022 internship!`}
          </div>

          <a 
            className={styles.resume} 
            href='https://waynezhu.ca/Wayne_Zhu_Resume.pdf'
            target='_blank'
          >
            View my resume (PDF 31kb).
          </a>
        </div>

        <div className={styles.separator}></div>

        <div>
          <div className={styles.subtitle}>Work Experience</div>

          <Experience 
            time="Apr 2021 - Present" 
            company="EQ Works" 
            title="Software Developer Intern"
          />

          <Experience 
            time="Apr 2020 - Aug 2020" 
            company="Prefix" 
            title="Full Stack Developer Intern"
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
  );
}

export default About;
