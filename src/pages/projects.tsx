import React, { useState, useRef, MutableRefObject, useEffect } from 'react';
import styles from '../styles/pages/projects.module.scss';
import Project from '../components/project';
import projectData from '../data/projectData';

const Projects = () => {

  //data of the current selected project
  const [activeIndex, setActiveIndex] = useState(-1);
  const [project, setProject] = useState({
    name: "My Projects",
    description: "Click on a project to view details.",
    tags: "tags will appear here"
  });
  const [projectWidth, setProjectWidth] = useState(0); //project width
  const refs = useRef(Array()); //ref of all project elements
  const projectContainer = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {

    setProjectWidth(getDimensions());

    window.addEventListener('resize', () => {
      setProjectWidth(getDimensions());
    });

    return () => {
      window.removeEventListener('resize', () => {});
    }

  }, []);

  const setRef = (element: any, index: number) => {
    //sets refs for projects
    if(refs.current.length <= index)
      refs.current.push(element);
    else
      refs.current[index] = element;
  }

  const getDimensions = () => {
    //gets project dimensions based on project container size
    if(!projectContainer.current)
      return 0;

    let containerWidth = projectContainer.current.clientWidth;
    console.log(containerWidth);
    let q = Math.floor(containerWidth / 300);
    let smaller = containerWidth / (q + 1);
    let bigger = containerWidth / q

    let width = Math.abs(smaller - 300) < Math.abs(bigger - 300) ? smaller : bigger;
    return width; 
  }

  const onProjectClick = (index: number) => {
    setActiveIndex(index);
    let meta = projectData[index];
    setProject({
      name: meta.name,
      description: meta.desc,
      tags: meta.skills
    })
  }

  const generateProjects = () => {
    //generate project elements

    let elements = [];
    for(let i = 0; i < projectData.length; i++){
      let project = projectData[i];
      let index = i;
      let element = (
        <Project 
          key={i}
          index={i} 
          active={index === activeIndex}
          width={projectWidth}
          onClick={onProjectClick} 
          {...project} 
          ref={(element) => setRef(element, i)}
        />
      );
      elements.push(element);
    }
    return elements;
  }

  return(
    <div className={styles.body}>

      <div className={styles.main}>
        <div className={styles.sidePane}>
          <div className={styles.appName}>
            {project.name}
          </div>
          <div className={styles.appDescription}>
            {project.description}
          </div>
          <div className={styles.appTags}>
            {project.tags}
          </div>
          <div className={styles.appSource}>
            Source, Try it out
          </div>
        </div>

        <div className={styles.grid}>

          <div>&nsbp;</div>

          <div className={styles.mainPane}>
            <div className={styles.innerGrid}>
              <Navbar/>
              <div>&nsbp;</div>
              <div className={styles.projectsContainer} ref={projectContainer}>
                {generateProjects()}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

const Navbar = () => {

  const [navbarIndex, setNavbarIndex] = useState(0);

  return(
    <div className={styles.navbar}>
      <div 
        className={`${styles.option} ${navbarIndex === 0 ? styles.selected : styles.deselected}`}
        onClick={() => setNavbarIndex(0)}
      >
        All
      </div>

      <div 
        className={`${styles.option} ${navbarIndex === 1 ? styles.selected : styles.deselected}`}
        onClick={() => setNavbarIndex(1)}
      >
        Made with <span className={styles.label}>________</span>
      </div>

    </div>
  );
}

export default Projects;