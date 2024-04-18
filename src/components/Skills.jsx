// import React from 'react'
// import { skills } from '../data'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const Skills = () => {
//   return (
//    <>
//    {skills.map(({title,percentage,image},index)=>{
//     return(
//         <div className="progress__box" key={index}>
//             <div>
//               <img src={image} alt={title} style={{ width: 120, height: 120 }} />
//               <h3 className="skills__title">{title}</h3>

//             </div>
            
//         </div>
//     )
//    })}
//    </>
//   )
// }

// export default Skills

import React from 'react';
import { skills } from '../data';
import Tilt from 'react-tilt';

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage, image }, index) => {
        return (
          <div className="progress__box" key={index}>
            <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
              <div className="Tilt-inner">
                <img src={image} alt={title} style={{ width: 75, height: 75 }} />
                <h3 className="skills__title">{title}</h3>
              </div>
            </Tilt>
          </div>
        );
      })}
    </>
  );
};

export default Skills;

