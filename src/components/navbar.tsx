import React, { useState, SetStateAction } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import styles from '../styles/components/navbar.module.scss';

interface Props{
  modeHandler: React.Dispatch<SetStateAction<boolean>> //state handler for dark mode
}

const Navbar = (props: Props) => {
  
  const history = useHistory();

  const renderLinks = () => {
    //generates link elements for navbar
    const links = ["/about", "/projects", "/contact"];
    const labels = ["About", "Projects", "Contact"];
    return links.map((link, i) => (
      <Link to={link} className={styles.link} key={i}>
        <div className={styles.option}>
          {labels[i]}
        </div>
      </Link>
    ));  
  }

  return(
    <div className={styles.main}>

      <div className={styles.name} onClick={() => {history.push('/about')}}>
        Wayne Zhu
      </div>

      <div className={styles.menu}>
        {renderLinks()}
      </div>

    </div>
  );
}

export default Navbar;