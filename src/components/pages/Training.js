import React from 'react'
import logo1 from '../images/cac-trajnimii.jpg'
import logo2 from '../images/cac-trajnimi-1.jpg'
import logo3 from '../images/cac-trajnimi-3.jpg'
import logo4 from '../images/cac-trajnimi-4.jpg'
import logo5 from '../images/ca-trajnimi-5-rec.jpg'
import logo6 from '../images/ca-trajnimi-6-rec.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom"
import { useEffect } from 'react';
function Training() {

    const style ={height:"25rem", width:"100%"}
    const styl = {height:"15rem"}
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <section className='py-4 bg-light  border-top'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Training</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className='float-end'>
                                Home / Training
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <div class="row row-cols-1 row-cols-md-2 g-4 m-5">
                        <div data-aos="zoom-in-right"> 
                          <div class="col">
     
                    <div class="card">

                        <img style={style} src={logo1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Javascript & Node Js</h5>
                                <p class="card-text">190$ </p>  </div>
                                <div className='d-flex '>
                                <Link to="/modules"><button className='btn btn-dark shadow m-1'> Watch Modules</button></Link>
                                <Link to="/contact"><button className='btn btn-dark shadow m-1 '> Apply now</button></Link>
                    </div></div>
                </div></div>
                <div data-aos="zoom-in-left">
                <div class="col">
                    <div class="card">
                        <img style={style} src={logo2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Introduction to Web Development</h5>
                                <p class="card-text">100$</p>
                            </div>
                            <div className='d-flex '>
                                <Link to="/modules"><button className='btn btn-dark shadow m-1'> Watch Modules</button></Link>
                                <Link to="/contact"><button className='btn btn-dark shadow m-1 '> Apply now</button></Link>
                    </div>
                    </div></div>
                </div>
                <div data-aos="zoom-in-right">
                <div class="col">
                    <div class="card">
                        <img style={style} src={logo3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Flutter</h5>
                                <p class="card-text">120$</p> 
                                 </div>
                            <div className='d-flex '>
                                <Link to="/modules"><button className='btn btn-dark shadow m-1'> Watch Modules</button></Link>
                                <Link to="/contact"><button className='btn btn-dark shadow m-1 '> Apply now</button></Link>
                    </div>
                    </div></div>
                </div>
                <div data-aos="zoom-in-left">
                <div class="col">
                    <div class="card">
                        <img style={style} src={logo4} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Java Fundamentals</h5>
                                <p class="card-text">180$</p>    
                                </div>
                            <div className='d-flex '>
                                <Link to="/modules"><button className='btn btn-dark shadow m-1'> Watch Modules</button></Link>
                                <Link to="/contact"><button className='btn btn-dark shadow m-1 '> Apply now</button></Link>
                    </div>
                    </div>
                </div></div>
                <div data-aos="zoom-in-right">
                <div class="col">
                    <div class="card">
                        <img style={style} src={logo5} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Javascript Framerworks</h5>
                                <p class="card-text">60$</p>   
                                 </div>
                            <div className='d-flex '>
                                <Link to="/modules"><button className='btn btn-dark shadow m-1'> Watch Modules</button></Link>
                                <Link to="/contact"><button className='btn btn-dark shadow m-1 '> Apply now</button></Link>
                    </div>
                    </div></div>
                </div>
                <div data-aos="zoom-in-left">
                <div class="col">
                    <div class="card">
                        <img style={style} src={logo6} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Graphic Design</h5>
                                <p class="card-text">60$</p>   
                                     </div>
                            <div className='d-flex '>
                                <Link to="/modules"><button className='btn btn-dark shadow m-1'> Watch Modules</button></Link>
                                <Link to="/contact"><button className='btn btn-dark shadow m-1 '> Apply now</button></Link>
                    </div>
                    </div></div>
                </div>
            </div>
        </>
    )
}

export default Training
