import React from 'react'
import { skills } from '../data'
import { Tilt } from "react-tilt";
import 'react-circular-progressbar/dist/styles.css';
import "./skills.css"
const Skills = () => {
  return (
   <>
   
   {skills.map(({title,image},index)=>{
    return(
        <div key={index}>
            <div>
                <Tilt>
                <img src={image} alt={title} style={{ width: 120, height: 120, }} />
                <h3 className="skills__title">{title}</h3>
                </Tilt>
                
                
                
              
              

            </div>
            
        </div>
    )
   })}
   </>
  )
}

export default Skills


