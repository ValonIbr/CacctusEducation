import React from 'react'
import fig from "../images/cac1.gif"
import WorkSlider from '../inc/WorkSlider'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Work() {
    const sty = { textAlign: "justify", textJustify: "inter-word" }
    const style = { height: "10rem" }
    const styl = { height: "15rem" }
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section className='py-4 bg-light  border-top'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Work</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className='float-end'>
                                Home / Work
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

                                <h3 className='main-heading'>Our Company</h3>
                                <div className='underline mx-auto'></div>

                                <div class=" container-fluid m-3">
                                    <div class="row">
                                        <img src={fig} class=" col-12 col-sm-12 col-md-6 col-lg-6" alt="" />
                                        <div class=" col-12 col-sm-12 col-md-6 col-lg-6" alt="">

                                            <p style={sty} >Cactus Education is a company specialized in providing training and courses in the field of programming.
                                                In order to prepare young people and professionals for the ongoing challenges of the technology industry, Cactus Education offers a two-year school program specialized in programming.
                                                In a world where technology develops at great speed, programming skills are increasingly in demand.
                                                Cactus Education understands the importance of a quality education and has focused its efforts on providing it
                                                of a powerful platform to develop students' skills and knowledge in the field of programming.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div></div>

                </div>
            </section>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center ">

                            <h3 className='main-heading'>Our workplaces during work</h3>
                            <div className='underline mx-auto'></div>
                        </div>
                    </div>
                </div>
            </section>

            <div data-aos="zoom-in-right">
                <WorkSlider />
            </div>
        </>
    )
}

export default Work