import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import './about.css';
import "aos/dist/aos.css"
export default function About() {
    return (
        <div className='container-fluid' >
            <div className="row">
                <div className="col-md-12" id='about'>
                    <div className='about_sec' >
                        <h5 className='subtitle_head' data-aos="fade-up" data-aos-duration="3000">
                            <AiOutlineUser />
                            <span>About</span>
                        </h5>
                        <h2 className='heading_about' data-aos="fade-up" data-aos-duration="2000">"From Imagination to Interaction:<span> Navigating the Art of Web Development</span>."</h2>
                        {/* <h2 className='heading_cnt' data-aos="fade-up" data-aos-duration="3000">Every great design begin with an even <span>better story</span></h2> */}
                        <p data-aos="fade-up" data-aos-duration="1000" >
                            Hello everyone! Deepanshi here, a front-end developer who is committed to building aesthetically pleasing and user-friendly websites and applications.
                            I enjoy working in fast-paced workplaces and collaborating with design and development teams to bring ideas to life. My expertise lies in HTML, CSS, JavaScript, React, and Bootstrap.
                            Trying out new technologies and keeping up with the most recent design trends are two things I enjoy doing in my leisure time.
                            Explore my portfolio to see my work, and let's engage in a conversation to explore how I can enhance your team's achievements. Thank you for stopping by !..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
