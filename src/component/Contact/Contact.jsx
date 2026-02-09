import React from 'react'
import './contact.css'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import 'aos/dist/aos.css';
import AOS from 'aos';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';




export default function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                toast.success("Message sent successfully", {
                    style: {
                        background: '#333',
                        color: '#fff',
                    },
                    iconTheme: {
                        primary: '#28e98c',
                        secondary: '#FFFAEE',
                    }
                });
                form.reset();
            })
            .catch(() => {
                toast.error("Something went wrong. Please try again.");
            });
    };

    return (
        <div className='container-fluid' id='contact'>
            <div className="row">
                <div className="col-md-12">
                    <div className='contact_sec' data-aos="fade-up" data-aos-duration="3000" >
                        <h5 className='subtitle_head'>
                            <BiMessageSquareDetail />
                            <span>Contact</span>
                        </h5>
                        <h2 className='heading_cnt'>Let's Work<span>Together!</span></h2>
                        <div className='row' data-aos="fade-right" data-aos-duration="2000">
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className='contact_form'
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <p style={{ display: 'none' }}>
                                    <label>
                                        Don’t fill this out if you're human: <input name="bot-field" />
                                    </label>
                                </p>
                                <div className="col-lg-6 col-12 ">
                                    <label>Full Name<sup>*</sup></label>
                                    <input type='text' name='name' placeholder='Your Full Name' required ></input>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <label>Email<sup>*</sup></label>
                                    <input type='email' name='email' placeholder='Your Email' required />
                                </div>
                                <div className="col-lg-6 col-12">
                                    <label>Phone no.</label>
                                    <input type='text' name='phone' placeholder='Your Phone number'></input>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <label>Message</label>
                                    <textarea name='message' rows="1" placeholder='Your Message' required ></textarea>
                                </div>
                                <div className="col-lg-6 col-12 attachment">
                                    <label htmlFor="formFile" className="form-label"><AiOutlineCloudUpload size={25} /> Add an Attachment</label>
                                    <input className="form-control contact_form" type="file" id="formFile" style={{ display: "none" }} />
                                </div>
                                <div className="col-md-6 contact_btn my-4">
                                    <button type='submit'>Send Message</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>

    )
}
