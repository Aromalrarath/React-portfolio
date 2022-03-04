import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id:1,
    name:'John Honnai',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti blanditiis veritatis officiis doloremque laboriosam illum voluptatum, dolore aspernatur expedita, illo aliquid vero deserunt est temporibus cupiditate, perspiciatis reprehenderit aliquam.',
    image:'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=238'
  },
  {
    id:2,
    name:'Manjooran',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti blanditiis veritatis officiis doloremque laboriosam illum voluptatum, dolore aspernatur expedita, illo aliquid vero deserunt est temporibus cupiditate, perspiciatis reprehenderit aliquam.',
    image:'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
  },
  {
    id:3,
    name:'Nadeshan',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti blanditiis veritatis officiis doloremque laboriosam illum voluptatum, dolore aspernatur expedita, illo aliquid vero deserunt est temporibus cupiditate, perspiciatis reprehenderit aliquam.',
    image:'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/avatar/avatar-7.png'
  },
  {
    id:4,
    name:'Dikambaran',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti blanditiis veritatis officiis doloremque laboriosam illum voluptatum, dolore aspernatur expedita, illo aliquid vero deserunt est temporibus cupiditate, perspiciatis reprehenderit aliquam.',
    image:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper 
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        className="container testimonials__container">
          {
            data.map(({id,name,image,testimonial})=>{
              return(
                <SwiperSlide key={id} className='testimonial'>
                  <div className="client__avatar">
                    <img src={image} alt={name} />
                  </div>
                  <h5 className="client__name">{name}</h5>
                    <small className="client__review">{testimonial}</small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials