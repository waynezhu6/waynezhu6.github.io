import React from 'react';
import { Helmet } from 'react-helmet';

const Resume: React.FC = () => {
  return(
    <div style={{width: "100vw", minHeight: "100vh"}}>
      <Helmet>
        <title>Wayne Zhu | Resume</title>
      </Helmet>
      <embed 
        style={{width: "100vw", minHeight: "100vh"}}
        src='./Wayne_Zhu_CV.pdf' 
      />
    </div>
  )
}

export default Resume;