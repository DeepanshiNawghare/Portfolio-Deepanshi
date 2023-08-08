import React from 'react'
import './intro.css'
import { SlHome } from 'react-icons/sl'
import { BsArrowDown } from 'react-icons/bs'
import "aos/dist/aos.css"

export default function Intro() {
    return (
        <div className='container-fluid' id='home'>
            <div className="row">
                <div className="col-md-12">
                    <div className="intro_sec container ">
                        <div className='intro_txt' data-aos="fade-up" data-aos-duration="3000">
                            <h5 className='subtitle_head'>
                                <SlHome />
                                <span>INTRODUCE</span></h5>
                            <h2 data-aos="fade-up" data-aos-duration="2000">
                                "Greetings..! I'M <span>Deepanshi Nawghare</span>, aspiring Frontend Developer, excitedly seeking opportunities."</h2>
                            <p data-aos="fade-right" data-aos-duration="2000">Creating beautiful websites that work so you don't have to..!</p>
                            {/* <h1>
                                "Greetings..! I'M <span>Deepanshi Nawghare</span>, Frontend Developer</h1>
                            <p>Creating beautiful websites that work so you don't have to..!</p> */}
                        </div>

                        <div className='scroll_box'>
                            <img src='../assets/round-text.png' className='scroll_img rotate' alt='scroll' />
                            <a href='#portfolio'><BsArrowDown className='scroll_arrow' /></a>
                        </div>
                        {/* <div className='intro_exp'>
                            <div>
                                <h1>10+</h1>
                                <p>YEARS OF EXPERIENCE</p>
                            </div>
                            <div>
                                <h1>100+</h1>
                                <p>PROJECTS COMPLETED </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
