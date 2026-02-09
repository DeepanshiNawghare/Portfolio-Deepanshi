import React from 'react';
import './portfolio.css';
import { FaGripVertical } from 'react-icons/fa';

export default function Portfolio() {
    return (
        <div className="container-fluid portfolio_sec p_cnt" id='portfolio'>
            <div className="row">
                <div className="col-md-12">
                    <h5 className='subtitle_head'>
                        <FaGripVertical />
                        <span>Portfolio</span>
                    </h5>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <h2 className='heading_cnt'>Featured <span>Projects</span></h2>
                    </div>
                    <div className='portfolio_grid'>
                        {/* Project Card 1 - Shri Dev Darshan */}
                        <div className="project_card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
                            <div className="project_visual">
                                <img src='../assets/shridevdarshan.png' alt='shri dev darshan' />
                                <div className="quick_view_overlay">
                                    <a href='https://shridevdarshan.netlify.app' target='_blank' rel='noopener noreferrer' className="quick_view_btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project_info">
                                <h3 className="project_title">Shri Dev Darshan</h3>
                                <p className="project_desc">Spiritual platform with elegant and peaceful design</p>
                            </div>
                        </div>

                        {/* Project Card 2 - Techlora Web */}
                        <div className="project_card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="project_visual">
                                <img src='../assets/techloraweb.png' alt='techlora web' />
                                <div className="quick_view_overlay">
                                    <a href='https://techloraweb.netlify.app' target='_blank' rel='noopener noreferrer' className="quick_view_btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project_info">
                                <h3 className="project_title">Techlora Web</h3>
                                <p className="project_desc">Modern tech solutions website with innovative design</p>
                            </div>
                        </div>

                        {/* Project Card 3 - BookVault */}
                        <div className="project_card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <div className="project_visual">
                                <img src='../assets/bookvault.png' alt='bookvault' />
                                <div className="quick_view_overlay">
                                    <a href='https://bookvault-manage-books.netlify.app' target='_blank' rel='noopener noreferrer' className="quick_view_btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project_info">
                                <h3 className="project_title">BookVault</h3>
                                <p className="project_desc">Book management system with intuitive interface</p>
                            </div>
                        </div>

                        {/* Project Card 4 - Cyborg */}
                        <div className="project_card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                            <div className="project_visual">
                                <img src='../assets/cyborg.png' alt='cyborg' />
                                <div className="quick_view_overlay">
                                    <a href='https://cyborg-games.netlify.app' target='_blank' rel='noopener noreferrer' className="quick_view_btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project_info">
                                <h3 className="project_title">Cyborg Gaming</h3>
                                <p className="project_desc">Immersive gaming experience with cutting-edge UI/UX design</p>
                            </div>
                        </div>

                        {/* Project Card 5 - Casino */}
                        <div className="project_card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                            <div className="project_visual">
                                <img src='../assets/casino1.png' alt='casino' />
                                <div className="quick_view_overlay">
                                    <a href='https://casino-55.netlify.app' target='_blank' rel='noopener noreferrer' className="quick_view_btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project_info">
                                <h3 className="project_title">Casino 55</h3>
                                <p className="project_desc">Elegant casino platform with sleek animations</p>
                            </div>
                        </div>

                        {/* Project Card 6 - Cool Tees */}
                        <div className="project_card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                            <div className="project_visual">
                                <img src='../assets/cooltee.png' alt='cooltees' />
                                <div className="quick_view_overlay">
                                    <a href='https://cool-tees.netlify.app' target='_blank' rel='noopener noreferrer' className="quick_view_btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="project_info">
                                <h3 className="project_title">Cool Tees Store</h3>
                                <p className="project_desc">E-commerce T-shirt store</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
