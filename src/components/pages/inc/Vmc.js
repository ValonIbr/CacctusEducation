import React from 'react'
import { Link } from "react-router-dom"
import training from '../../images/trajnimet.jpg';
import school from '../../images/school.jpg';
import work from '../../images/work.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function VMS() {

    const style = { height: "12rem", width: "100%" }
    useEffect(() => {
        AOS.init();
      }, [])
    return (

     
        <section className="section bg-c-light border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center d-flex">
                        <div className='underlineVmc mx-auto'></div>
                        <h3 className='main-heading'>What we offer for you</h3>
                        <div className='underlineVmc mx-auto'></div>
                    </div>
                 
                    <div className="col-md-4">   
                    <div data-aos="zoom-in-right">
                        <div  className="card shadow">
                         
                            <div className="card-body">
                                <h6>Training</h6>
                                <div className="underline"></div>
                                <img style={style} src={training} alt="" />
                                <p>Cactus Education trainings are suitable for everyone who wants to develop their skills in the field of programming and technology.
                                     These trainings offer
                                     a combination of theoretical lectures and practical projects to ensure a complete and advanced experience for students.
                                </p>
                                <Link to="/training" className="btn btn-dark shadow w-100">Read More</Link>
                            </div>
                  </div></div>

             
                    </div>
                 
                    <div className="col-md-4">    
                    <div data-aos="zoom-in-right">
                        <div  className="card shadow">
                            
                            <div className="card-body">
                                <h6>School</h6>
                                <div className="underline"></div>
                                <img style={style} src={school} alt="" />
                                <p>Cactus Education is a company specialized in providing training and courses in the field of programming.
                                                In order to prepare young people and professionals for the ongoing challenges of the technology industry, Cactus Education offers a two-year school program specialized in programming.
                                             
                                </p>
                                <Link to="/school" className="btn btn-dark shadow w-100">Read More</Link>
                            </div>
                 </div>
</div>
                    </div>
                   
                    <div className="col-md-4" > 
                    <div data-aos="zoom-in-right">
                        <div className="card shadow">
                     
                            <div className="card-body">
                                <h6>Work</h6>
                                <div className="underline"></div>
                                <img style={style} src={work} alt="" />
                                <p>Cactus Education is a company specialized in providing training and courses in the field of programming.
                                                In order to prepare young people and professionals for the ongoing challenges of the technology industry, Cactus Education offers a two-year school program specialized in programming.
                                               
                                </p>
                                <Link to="/work" className="btn btn-dark shadow w-100">Read More</Link>
                            </div>
                        
</div>
                   </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default VMS;

