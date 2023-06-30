import React from 'react'

import logo from '../images/logo-cactus.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Aboutus() {
    const style = { height: "20rem" }
    const sty = {
        textAlign: "justify",
        textJustify: "inter-word"
    }
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <section className='py-4 bg-light border-top'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className='float-end'>
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <div data-aos="zoom-in-right">
                                <h3 className='main-heading'>About Company</h3>
                                <div className='underline mx-auto'></div>
                            
                                
                                <div class=" container-fluid m-3">
                                    <div class="row">
                                        <img style={style} src={logo} class=" col-12 col-sm-12 col-md-6 col-lg-6" alt="" />
                                        <div class=" col-12 col-sm-12 col-md-6 col-lg-6" alt="">

                                            <p style={sty}>Cactus Education is a company specialized in providing training and courses in the field of programming.
                                                In order to prepare young people and professionals for
                                                ongoing challenges of the technology industry, Cactus Education offers a two-year school program specializing in programming.

                                                In a world where technology develops at great speed, programming skills are increasingly in demand.
                                                Cactus Education understands the importance of a quality education and has focused its efforts on providing it
                                                of a powerful platform to develop students' skills and knowledge in the field of programming.

                                                Cactus Education not only provides a powerful learning but also takes care to provide an environment of support and help for
                                                her students. They follow an individual approach to each student, committed to their success and personal development. In addition, the company partners with various companies in the technology industry to provide internship and employment opportunities upon completion of the program.

                                                Cactus Education is a bold company that aims to build innovative spaces for the development of new programming talent.
                                                Through their quality training and dedication to students, they create a successful path to a successful career in the technology field.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Aboutus