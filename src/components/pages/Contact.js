import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Contactus() {
    const form = useRef();
useEffect(() => {
        AOS.init();
      }, [])
   
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_07nlnk6', 'template_44sl66s', form.current, '8StTqGe-tn7SPPVgy')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div>
            <section className='py-4 bg-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className='float-end'>
                                Home / Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className='container'> <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                           

                                <div className="col-md-6 ">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="form-group">
                                            <label className='mb-1'>Full Name</label>
                                            <input type="text" className='form-control' placeholder='Enter Full Name' name='user_name' />
                                        </div>
                                        <div className="form-group">
                                            <label className='mb-1'>Phone Number</label>
                                            <input type="text" className='form-control' placeholder='Enter Phone' name='user_phone' />
                                        </div>
                                        <div className="form-group">
                                            <label className='mb-1'>Email Adress</label>
                                            <input type="email" className='form-control' placeholder='Enter your email' name="user_email" />
                                        </div> 
                                        <div className="form-group">
                                            <label className='mb-1'>Choose your Training : </label> <br />
                                           <select name="user_select" id="select">
                                            <option value="Javascript & Node Js">Javascript & Node Js</option>
                                            <option value="Introduction to Web Development">Introduction to Web Development</option>
                                            <option value="Flutter">Java Fundamentals</option>
                                            <option value="Javascript Framerworks">Javascript Framerworks</option>
                                            <option value="Java Fundamentals">Java Fundamentals</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                           </select>
                                        </div>
                                        <div className="form-group">
                                            <label className='mb-1'>Message</label>
                                            <textarea rows="3" className='form-control' placeholder='Type your message' name="user_message"></textarea>
                                        </div>
                                        <div className="form-group py-3">
                                            <button type='submit' className='btn btn-dark shadow w-100' value="Send">Send Message</button>
                                        </div></form>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>Addres: Rr. Ukë Bytyqi, 20000 Prizren</p>
                                    <p>Phone: 0393943943</p>
                                    <p>Email: cacttuseducation@giz.com</p>
                                    <p>Name: Cacttus Education</p>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div></div>
            </section>
        </div>
    )
}

export default Contactus