import React from 'react'
import './nav.css'
// import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { SlHome } from 'react-icons/sl'
import { AiOutlineUser } from 'react-icons/ai'
import { RiBriefcaseLine } from 'react-icons/ri'
import { FaShapes, FaGripVertical } from 'react-icons/fa'
import { BiMessageSquareDetail } from 'react-icons/bi'

export default function Nav() {
    return (
        <>

            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className='nav_sec'>
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel" className="nav_head_title">Menu</h5>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                    </div>
                    <div className="offcanvas-body">
                        <ul className='nav_items'>
                            <li><SlHome /><a href='#home'>Home</a></li>
                            <li><AiOutlineUser /><a href='#about'>About</a></li>
                            <li><RiBriefcaseLine /><a href='#resume'>Resume</a></li>
                            <li><FaShapes /><a href='#skills'>Skills</a></li>
                            <li><FaGripVertical /><a href='#portfolio'>Portfolio</a></li>
                            <li><BiMessageSquareDetail /><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                </div >
            </div>

        </>
    )
}