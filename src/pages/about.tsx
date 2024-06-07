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
            {`Hello! My name is Wayne, and I'm a 22-year-old software engineer and recent University of \
            Toronto graduate majoring in computer science, currently based in San Francisco.`}
          </div>

          <div className={styles.paragraph}>
            {`I'm currently working at DoorDash as part of the Experimental Platform Team, where I'm creating \
            internal tools that help power our data science operations. Previously, I also interned at Intel \
            working on chip design tools, and at Meta, where I wrote tools to estimate the peak capacity \
            of internal services.`}
          </div>

          <div className={styles.paragraph}>
            {`Feel free to look at my resume, and thanks for visiting!`}
          </div>

          <a 
            className={styles.resume} 
            href='https://waynezhu.me/Wayne_Zhu_Resume.pdf'
            target='_blank'
          >
            View my resume (PDF 32kb).
          </a>
        </div>

        <div className={styles.separator}></div>

        <div>
          <div className={styles.subtitle}>Work Experience</div>

          <Experience 
            logoPath={require('../assets/logos/doordash.svg')}
            time="Jun 2024 - Present" 
            company="DoorDash" 
            title="Software Engineer"
            location="San Francisco, CA"
          />

          <Experience 
            logoPath={require('../assets/logos/doordash.svg')}
            time="May 2023 - Aug 2023" 
            company="DoorDash" 
            title="Software Engineer Intern"
            location="Toronto, Canada"
          />

          <Experience 
            logoPath={require('../assets/logos/intel.svg')}
            time="Sep 2022 - Apr 2023" 
            company="Intel" 
            title="Software Engineer Intern"
            location="San Jose, CA"
          />

          <Experience 
            logoPath={require('../assets/logos/meta.svg')}
            time="May 2022 - Aug 2023" 
            company="Meta" 
            title="Software Engineer Intern"
            location="Menlo Park, CA"
          />

          <Experience 
            logoPath={require('../assets/logos/eqworks.svg')}
            time="May 2021 - Aug 2021" 
            company="EQ Works" 
            title="Software Developer Intern"
            location="Toronto, Canada"
          />

          <Experience 
            logoPath={require('../assets/logos/prefix.jpeg')}
            fullLogo
            time="Jun 2019 - Aug 2019" 
            company="Prefix" 
            title="Full Stack Developer Intern"
            location="Toronto, Canada"
          />

          <Experience 
            logoPath={require('../assets/logos/pointclickcare.jpeg')}
            time="Jun 2019 - Aug 2019" 
            company="PointClickCare" 
            title="Software Engineer Intern"
            location="Mississauga, Canada"
          />

        </div>

        <Footer/>

      </div>

    </div>
  );
}

export default About;
