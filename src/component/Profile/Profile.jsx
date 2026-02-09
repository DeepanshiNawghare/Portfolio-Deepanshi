import React from 'react'
import "./profile.css"
import { BsLinkedin, BsGithub, BsWhatsapp, BsInstagram } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

export default function Profile() {
    const currentYear = new Date().getFullYear()
    return (
        <div className='container-fluid' id='profile'>
            <div className="row">
                <div className="col-md-12 my-4">
                    <div >
                        <div className="profile_sec">
                            <div className='profile_logo '>
                                <img src='../assets/deepanshi.png' className='img-fluid' alt='logo' />
                            </div>
                            <div className="profile_cnt">
                                <div className='profile_img'>
                                    <img src='../assets/oshi.jpg' className='img-fluid' alt='profile' />
                                </div>
                                <div className='profile_contact'>
                                    <h2>Deepanshi Nawghare </h2>
                                    <h2>Based in Indore (M.P), India</h2>
                                </div>
                                <p className='copyright_cnt'>
                                    © {currentYear} Deepanshi. All Rights Reserved
                                </p>
                                <div className='social_links'>
                                    <a href='https://github.com/DeepanshiNawghare' target='_blank' rel='noreferrer'><BsGithub className='social_links_icon' /></a>
                                    <a href='https://wa.me/+918989517355' target='_blank' rel='noreferrer'><BsWhatsapp className='social_links_icon' /></a>
                                    <a href='https://www.linkedin.com/in/deepanshi-nawghare-71313b211' target='_blank' rel='noreferrer'><BsLinkedin className='social_links_icon' /></a>
                                    <a href='https://instagram.com/o_s_h_i_26?igshid=MzNlNGNkZWQ4Mg==' target='_blank' rel='noreferrer'><BsInstagram className='social_links_icon' /></a>
                                </div>
                                <div className='profile_btn'>
                                    <a href='mailto:nawgharedeepanshi@gmail.com'><AiOutlineMail /><span>Hire Me!</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
