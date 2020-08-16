import React, { useState, SetStateAction, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/components/navbar.module.scss';

interface Props{
  modeHandler: React.Dispatch<SetStateAction<boolean>> //state handler for dark mode
}

const Navbar = (props: Props) => {

  const getLocation = () => {
    //returns a selected index mapped to the current location url
    switch(location.pathname){
      case("/about"):
        return 0;
      case("/projects"):
        return 1;
      case("/experiences"):
        return 2;
      case("/contact"):
        return 3;
      default:
        return 0;
    }
  }

  const location = useLocation();
  const [selected, setSelected] = useState(getLocation());

  const clickHandler = (index: number) => {
    //set selected index on link click
    setSelected(index);
  }

  const generateLinks = () => {
    //generates link elements for navbar
    const links = ["About", "Projects", "Experiences", "Contact"];
    let elements = [];
    for(var i = 0; i < links.length; i++){
      let index = i;
      if(i === selected)
        elements.push(
          <Link 
            to={`/${links[i].toLowerCase()}`} 
            className={styles.link}
            key={i}
          >
            <div 
              className={`${styles.option} ${styles.selected}`} 
              onClick={() => clickHandler(index)}
            >
              {links[i]}
            </div>
          </Link>
        );
      else
        elements.push(
          <Link 
            key={i}
            to={`/${links[i].toLowerCase()}`} 
            className={styles.link}
          >
            <div 
              className={`${styles.option} ${styles.deselected}`} 
              onClick={() => clickHandler(index)}
            >
              {links[i]}
            </div>
          </Link>
        );
    }    
    return elements;    
  }

  return(
    <div className={styles.main}>
      {generateLinks()}
    </div>
  );
}

export default Navbar;