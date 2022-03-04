import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ years of Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

          </div>
          <p>Taking a new product to market? Need help connecting with a target market, identifying a manufacturing partner, 
            or getting in front of the right buyer? We can help. Tractorbeam boasts extensive experience in retail, hospitality, 
            and real estate. We partner with clients to help them make their product right and their story seamless before any creative
            development begins.
          </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About