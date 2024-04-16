import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'; // Note the corrected import
import { FaArrowRight } from "react-icons/fa";
import "./home.css"
const Home = () => {
  return (
    <div>
     <section className="home section grid">
       <img src={Profile} alt="" className='home__img' />
       <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>
            I am Dhanush. 
            </span>         
              web developer 
          </h1>
          <p className="home__description">
            Good at building your digital front door with elegance and efficiency. Code artist and functionality craftsman.
          </p>
          <Link to='/about' className='button'>
            More about me{' '}
            <span className="button__icon">
              <FaArrowRight/>
            </span>

          </Link>
        </div>
       </div>

       <div className="color__block"></div>
     </section>
    </div>
  )
}

export default Home
