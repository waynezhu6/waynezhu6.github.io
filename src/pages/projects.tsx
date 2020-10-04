import React, { useState, useRef, MutableRefObject, useEffect } from 'react';
import styles from '../styles/pages/projects.module.scss';
import Project from '../components/project';
import projectData from '../data/projectData';

const Projects: React.FC = () => {

  //data of the current selected project
  const PROJECT_DEFAULT = {
    name: "My Projects",
    description: `
      Some fun little projects that I've made in my spare time,
      or made as a contribution to extracurricular events.
    `,
    tags: ['React', 'Github Pages', 'Typescript'],
    source: "https://github.com/waynezhu6/waynezhu6.github.io",
    demo: ""
  }

  const [activeIndex, setActiveIndex] = useState(-1);
  const [project, setProject] = useState(PROJECT_DEFAULT);
  const [projectWidth, setProjectWidth] = useState(0); //project width
  const [sidebarHeight, setSidebarHeight] = useState(0); //sidebar max height
  const projectContainer = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {

    const setDimensions = () => {
      //gets project dimensions based on project container size
      if(!projectContainer.current)
        return 0;
  
      //first set individual projects size
      const SIZE = 250;  
      let containerWidth = projectContainer.current.clientWidth - 1;
      console.log(containerWidth);
      let q = Math.floor(containerWidth / SIZE);
      let smaller = containerWidth / (q + 1);
      let bigger = containerWidth / q
  
      let width = Math.abs(smaller - SIZE) < Math.abs(bigger - SIZE) ? smaller : bigger;
      console.log(width);
      setProjectWidth(width);

      //then set sidebar size
      let styles = window.getComputedStyle(projectContainer.current);
      let height = projectContainer.current.clientHeight;
      height -= parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
      console.log(height);
      setSidebarHeight(height);
    }

    setDimensions();

    window.addEventListener('resize', () => {
      setDimensions();
    });

    return () => {
      window.removeEventListener('resize', () => {});
    }

  }, [projectContainer.current]);

  const onProjectClick = (index: number) => {
    if(index !== activeIndex){
      setActiveIndex(index);
      let meta = projectData[index];
      setProject({
        name: meta.name,
        description: meta.description,
        tags: meta.tags,
        source: meta.source,
        demo: meta.try
      });
    }
    else{
      setActiveIndex(-1);
      setProject(PROJECT_DEFAULT);
    }

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
        />
      );
      elements.push(element);
    }
    return elements;
  }

  const generateTags = (tags: string[]) => {
    let elements = [];
    for(var i = 0; i < tags.length; i++){
      let tag = tags[i];
      let key = i;
      elements.push(<div className={styles.tag} key={key}>{tag}</div>);
    }
    return elements;
  }

  const openNewTab = (url: string) => {
    //opens url in new tab
    var win = window.open(url, '_blank');
    win?.focus();
  }

  return(
    <div className={styles.animated}>

      <div className={styles.body}>
        <div className={styles.sidePane} style={{maxHeight: sidebarHeight + 'px'}}>
          <div className={styles.appName}>
            {project.name}
          </div>
          <div className={styles.appDescription}>
            {project.description}
          </div>
          <div className={styles.appTags}>
            {generateTags(project.tags)}
          </div>
          <div className={styles.appSource}>
            <button 
              className={styles.source}
              onClick={() => openNewTab(project.source)}
            >
              Source
            </button>
            <button 
              className={styles.demo}
              onClick={() => openNewTab(project.demo)}
            >
              Demo
            </button>
          </div>
        </div>

        <div className={styles.grid}>

          <div>&nsbp;</div>

          <div className={styles.mainPane}>
            <div className={styles.innerGrid}>
              {/* <Navbar/> */}
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

// const Navbar = () => {

//   const [navbarIndex, setNavbarIndex] = useState(0);

//   return(
//     <div className={styles.navbar}>
//       <div 
//         className={`${styles.option} ${navbarIndex === 0 ? styles.selected : styles.deselected}`}
//         onClick={() => setNavbarIndex(0)}
//       >
//         All
//       </div>

//       <div 
//         className={`${styles.option} ${navbarIndex === 1 ? styles.selected : styles.deselected}`}
//         onClick={() => setNavbarIndex(1)}
//       >
//         Made with <span className={styles.label}>________</span>
//       </div>

//     </div>
//   );
// }

export default Projects;