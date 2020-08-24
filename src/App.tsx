import React, { useState } from 'react';
import { Switch, Route, Redirect, useLocation} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './App.scss';

import Navbar from './components/navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Experiences from './pages/experiences';

function App() {

  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const transitions = useTransition(
    location, 
    location => location.pathname,
    {
      from: { opacity: "0"},
      enter: { opacity: "1"},
      leave: { opacity: "0"},
    }
  );

  return(
    <div>
      <Navbar modeHandler={setIsDark}/>
      {transitions.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/about" component={About}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/experiences" component={Experiences}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/"><Redirect to="/about"/></Route>
          </Switch>
        </animated.div>
      ))}

    </div>
  );
}

export default App;