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
          <img src={require('../assets/me.jpeg')}></img>
        </div>

        <div>
          <div className={styles.subtitle}>About Me</div>

          <div className={styles.paragraph}>
            {`Hello! My name is Wayne and I'm a 21-year-old \
            developer, currently studying Computer Science \
            as a fourth-year student at the University of Toronto.`}
          </div>

          <div className={styles.paragraph}>
            {`I'm currently working at Intel the FPGA Platform Designer team. Before that, \
            I worked as a Software Engineer Intern for \ 
            Meta, where I wrote tools to estimate the peak capacity \
            of internal services. Feel free to view my resume below for \ 
            more details about my work experiences.`}
          </div>

          <div className={styles.paragraph}>
            {`I'm currently looking for a 2024 New Grad position!`}
          </div>

          <a 
            className={styles.resume} 
            href='https://waynezhu.me/Wayne_Zhu_Resume.pdf'
            target='_blank'
          >
            View my resume (PDF 31kb).
          </a>
        </div>

        <div className={styles.separator}></div>

        <div>
          <div className={styles.subtitle}>Work Experience</div>

          <Experience 
            time="(Incoming Jun 2023)" 
            company="DoorDash" 
            title="Software Engineer Intern"
          />

          <Experience 
            time="Sep 2022 - Present" 
            company="Intel" 
            title="Software Engineer Intern"
          />

          <Experience 
            time="May 2022 - Aug 2022" 
            company="Meta" 
            title="Software Engineer Intern"
          />

          <Experience 
            time="Apr 2021 - Aug 2021" 
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
