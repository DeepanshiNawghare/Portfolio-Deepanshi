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
                    <div className='portfolio_cnt'>
                        <div className="portfolio_img" data-aos="fade-up" data-aos-duration="2000">
                            <img src='../assets/cyborg.png' alt='cyborg' />
                            <a href='https://playful-brigadeiros-de0397.netlify.app' target='_blank' className="btn project_visit1">Visit Site</a>
                        </div>
                        <h5 className='tagline mt-3 ms-2'>Cyborg</h5>
                        <div className="portfolio_img" data-aos="fade-up" data-aos-duration="2000">
                            <img src='../assets/casino1.png' alt='casino' />
                            <a href='https://nimble-tarsier-b17def.netlify.app' target='_blank' className="btn project_visit1">Visit Site</a>
                        </div>
                        <h5 className='tagline mt-3 ms-2'>Casino</h5>

                        <div className="portfolio_img" data-aos="fade-up" data-aos-duration="2000">
                            <img src='../assets/cooltee.png' alt='cooltees' />
                            <a href='https://shimmering-kulfi-e34714.netlify.app' target='_blank' className="btn project_visit1">Visit Site</a>
                        </div>
                        <h5 className='tagline mt-3 ms-2'>Cool Tees</h5>

                        <div className="portfolio_img" data-aos="fade-up" data-aos-duration="2000">
                            <img src='../assets/blue.png' alt='blue portfolio' />
                            <a href='https://marvelous-croissant-44bb65.netlify.app' target='_blank' className="btn project_visit1">Visit Site</a>
                        </div>
                        <h5 className='tagline mt-3 ms-2'>Portfolio Blue</h5>

                    </div>

                </div>
            </div>

        </div>
    )
}
