import React from 'react'
import Slider from '../inc/Slider'
import { Link } from 'react-router-dom'
import logo from '../images/logo-cactus.png'
import Vmc from './inc/Vmc'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
    const style ={textAlign:"justify"}
 const styl = {height:"15rem"}
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">


<div data-aos="zoom-in-right">
                            <h3 className='main-heading'>Our Company</h3>
                            <div className='underline mx-auto'></div>
                           
                             <div class=" container-fluid m-3">
                                <div class="row">
                                    <img style={styl} src={logo} class=" col-12 col-sm-12 col-md-6 col-lg-6" alt="" />
                                    <div class=" col-12 col-sm-12 col-md-6 col-lg-6" alt="">

                                        <p style={style} >Cactus Education is a company specialized in providing training and courses in the field of programming.
                                            In order to prepare young people and professionals for the ongoing challenges of the technology industry, Cactus Education offers a two-year school program specialized in programming.
                                            In a world where technology develops at great speed, programming skills are increasingly in demand.
                                            Cactus Education understands the importance of a quality education and has focused its efforts on providing it
                                            of a powerful platform to develop students' skills and knowledge in the field of programming.</p>

                                    </div>
                                </div>
                            </div>
                           
                            <Link to="/about" className="btn btn-dark shadow">Read More</Link></div>
                        </div>
                    </div>
                </div>
            </section>

            <Vmc />
          
        </div>
    )
}

export default Home
