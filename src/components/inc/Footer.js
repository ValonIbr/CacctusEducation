import React from 'react'
import {Link} from 'react-router-dom'
import location from '../images/location.jpg'
function Footer()  {
    const style = {height:"10rem", width:"15rem"}
  return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <hr />
                     <h6>Company Location</h6>
                     <hr />
                     <img style={style} src={location} alt="" />
                    </div>
                    <div className="col-md-4">
                        <hr />

                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        
                        <div><Link to="/training">Trainng</Link></div>
                        <div><Link to="/school">School</Link></div>
                        <div><Link to="/work">Work</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                    </div>
                    <div className="col-md-4">
                        <hr />
                        <h6>Contact Information</h6>
                        <hr />
                         <div><i class="fa fa-location-dot">  Rr. Ukë Bytyqi, 20000 Prizren</i></div>
                        <div><i class="fa fa-envelope">  cacctuseduaction@giz.com</i></div>
                        <div><i class="fab fa-facebook">   Cacttus Education</i></div>
                        <div><i class="fab fa-instagram">   Cacttus.education</i></div>
                        <div><i class="fab fa-linkedin">   CacttusEdu</i></div>
                        <div></div>
                       
                     
                    </div>
                </div>
            </div>



        </section>
  )
}

export default Footer
