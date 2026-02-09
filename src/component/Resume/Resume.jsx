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
                            {/* Experience 1 - Web Developer at Fovty Solutions */}
                            <div className='resume d-flex flex-start mt-5' data-aos="fade-right" data-aos-duration="2000">
                                <div className='d-flex flex-column'>
                                    <div className='resume_1'></div>
                                    <div className='resume_2'></div>
                                </div>
                                <div className='resume_3 ms-5 pb-3'>
                                    <span className='resume_txt_year'>March 2024 - Nov 2024</span>
                                    <h3>Web Developer | <span className='resume_institute'>Fovty Solutions</span></h3>
                                    <p>Worked on responsive web applications using React.js, JavaScript, HTML, and CSS. Converted design mockups into interactive UI, created reusable components, and integrated APIs for dynamic content. Focused on improving usability, performance, and overall user experience.</p>
                                </div>
                            </div>

                            {/* Experience 2 - React.js Intern at Insta Dot Analytics */}
                            <div className='resume d-flex flex-start' data-aos="fade-right" data-aos-duration="2000">
                                <div className='d-flex flex-column'>
                                    <div className='resume_1'></div>
                                    <div className='resume_2'></div>
                                </div>
                                <div className='resume_3 ms-5 pb-3'>
                                    <span className='resume_txt_year'>Oct 2023 - Jan 2024</span>
                                    <h3>React.js Intern | <span className='resume_institute'>Insta Dot Analytics</span></h3>
                                    <p>Developing dynamic web applications utilizing React.js, focusing on creating responsive, user-friendly interfaces. Implemented various UI improvements to enhance user experience.</p>
                                </div>
                            </div>

                            {/* Education 1 - B-Tech */}
                            <div className='resume d-flex flex-start' data-aos="fade-right" data-aos-duration="2000">
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

                            {/* Education 2 - Class 12th */}
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

                            {/* Education 3 - Class 10th */}
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
                            <a href='../assets/Resume-DeepanshiNawghare.pdf' download>Download CV <MdFileDownload /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
