import React from 'react'
import './resume.css'
import { RiBriefcaseLine } from 'react-icons/ri'
import { MdFileDownload } from 'react-icons/md'
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Resume() {
    AOS.init();
    return (
        <div className='container-fluid' id='resume'>
            <div className="row">
                <div className="col-md-12">
                    <div className='resume_sec' data-aos="fade-up" data-aos-duration="3000" >
                        <h5 className='subtitle_head'>
                            <RiBriefcaseLine />
                            <span>Resume</span>
                        </h5>
                        <h2 className='heading_cnt'>Education & <span>Experience</span></h2>
                        <div className='resume_cnt'>
                            <div className='resume d-flex flex-start mt-5' data-aos="fade-right" data-aos-duration="2000">
                                <div className='d-flex flex-column'>
                                    <div className='resume_1'></div>
                                    <div className='resume_2'></div>
                                </div>
                                <div className='resume_3 ms-5 pb-3'>
                                    <span className='resume_txt_year'>2018 - 2022</span>
                                    <h3>B-Tech | <span className='resume_institute'>IPS Academy, Indore</span></h3>
                                    <h5>Specialized in Computer Science & Engineering</h5>
                                    <p>CGPA - 7.96</p>
                                </div>
                            </div>

                            <div className='resume d-flex flex-start' data-aos="fade-right" data-aos-duration="2000">
                                <div className='d-flex flex-column'>
                                    <div className='resume_1'></div>
                                    <div className='resume_2'></div>
                                </div>
                                <div className='resume_3 ms-5 pb-3'>
                                    <span className='resume_txt_year'>2017 - 2018</span>
                                    <h3>Class 12th Boards | <span className='resume_institute'>Adarsh Malwa, Shajapur</span></h3>
                                    <p>60% (MP board) </p>
                                </div>
                            </div>

                            <div className='resume d-flex flex-start' data-aos="fade-right" data-aos-duration="2000" >
                                <div className='d-flex flex-column'>
                                    <div className='resume_1'></div>
                                    <div className='resume_2'></div>
                                </div>
                                <div className='resume_3 ms-5 '>
                                    <span className='resume_txt_year'>2014 - 2015</span>
                                    <h3>Class 10th Boards | <span className='resume_institute'>M.G. Convent Hr.Sec. School, Shajapur</span></h3>
                                    <p>58.2% (ICSE board)</p>
                                </div>
                            </div>

                        </div>
                        <div className='resume_btn'>
                            <a href='../assets/Deepanshi_Nawghare_Resume.pdf' download>Download CV <MdFileDownload /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
