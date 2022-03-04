import React from 'react'
import './portfolio.css'

const data = [
  {
    id:1,
    image:'https://cdn.dribbble.com/users/5324991/screenshots/17642120/media/e6f4b250d1921706ee3615c7cf1e34a8.png?compress=1&resize=400x300&vertical=top',
    title:'Fintech App',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:2,
    image:'https://cdn.dribbble.com/users/238864/screenshots/17640613/media/574f9d35d65959edb8e0fa2e210c1639.jpg?compress=1&resize=400x300&vertical=top',
    title:'Start your free trial',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:3,
    image:'https://cdn.dribbble.com/users/23569/screenshots/17639902/media/04fd2c2b466ad05c9365982d54efbd1f.jpg?compress=1&resize=400x300&vertical=top',
    title:'Rabbits Foot',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:4,
    image:'https://cdn.dribbble.com/users/41719/screenshots/17640574/media/c7780e2192ead4f54a591d657f696e19.jpg?compress=1&resize=400x300&vertical=top',
    title:'BOK Pattern',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:5,
    image:'https://cdn.dribbble.com/users/1/screenshots/17641366/media/ba8fceb90b508e8da3c5e76f1fb8ac14.png?compress=1&resize=400x300&vertical=top',
    title:'Easy cost font',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:6,
    image:'https://cdn.dribbble.com/users/1071652/screenshots/17639785/media/6e5eb2a0d9f605d1b232186f97e3d8ed.png?compress=1&resize=400x300&vertical=top',
    title:'Green planet',
    github:'https://github.com',
    demo:'https://github.com'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item' >
                <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio