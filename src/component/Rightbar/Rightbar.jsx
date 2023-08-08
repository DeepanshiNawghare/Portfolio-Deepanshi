import React from 'react'
import './rightbar.css'
import { SlHome } from 'react-icons/sl'
import { AiOutlineUser } from 'react-icons/ai'
import { RiBriefcaseLine } from 'react-icons/ri'
import { FaShapes, FaGripVertical } from 'react-icons/fa'
import { BiMessageSquareDetail } from 'react-icons/bi'


export default function Rightbar() {
    return (
        <>
            <div className='rightbar_sec'>
                <a href='#home'><SlHome /></a>
                <a href='#about'><AiOutlineUser /></a>
                <a href='#resume'><RiBriefcaseLine /></a>
                <a href='#skills'><FaShapes /></a>
                <a href='#portfolio'><FaGripVertical /></a>
                <a href='#contact'><BiMessageSquareDetail /></a>
            </div>
        </>
    )
}
