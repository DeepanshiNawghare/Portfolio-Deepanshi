import React from 'react'
import { FaShapes, FaHtml5, FaCss3Alt, FaReact, FaNode } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { BsBootstrapFill } from 'react-icons/bs'
import { SiMongodb } from 'react-icons/si'
import './skills.css'

export default function Skills() {
    return (
        <div className="container-fluid" id='skills'>
            <div className="row">
                <div className="col-md-12">
                    <div className='skill_sec' data-aos="fade-up" data-aos-duration="3000">
                        <h5 className='subtitle_head'>
                            <FaShapes />
                            <span>Skills</span>
                        </h5>
                        <h2 className='heading_cnt'>My <span>Advantages</span></h2>
                        <div className="">
                            <div className="skill_cnt">
                                <div className="col-lg-2 col-md-2 col-6">
                                    <div className='skill_cnt_card' data-aos="fade-right" data-aos-duration="3000">
                                        <FaHtml5 className='skill_cnt_icon' />
                                        <p>HTML</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-6">
                                    <div className='skill_cnt_card' data-aos="fade-up" data-aos-duration="3000">
                                        <FaCss3Alt className='skill_cnt_icon' />
                                        <p>CSS</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-6">
                                    <div className='skill_cnt_card' data-aos="fade-down" data-aos-duration="3000">
                                        <TbBrandJavascript className='skill_cnt_icon' />
                                        <p>JAVA SCRIPT</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-6">
                                    <div className='skill_cnt_card' data-aos="fade-up" data-aos-duration="3000">
                                        <FaReact className='skill_cnt_icon' />
                                        <p>REACT JS</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-6">
                                    <div className='skill_cnt_card' data-aos="fade-left" data-aos-duration="3000">
                                        <BsBootstrapFill className='skill_cnt_icon' />
                                        <p>BOOTSTRAP</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-6">
                                    <div className='skill_cnt_card' data-aos="fade-right" data-aos-duration="3000">
                                        <FaNode className='skill_cnt_icon' />
                                        <p>NODE</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-6">
                                    <div className='skill_cnt_card' data-aos="fade-down" data-aos-duration="3000">
                                        <SiMongodb className='skill_cnt_icon' />
                                        <p>MONGO DB</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
