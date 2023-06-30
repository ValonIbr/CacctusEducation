import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo-cactus.png'

function Navbar() {

    const style = {height:'2rem'};
  return (

    <div className="navbar-body-secondary bg-dark  shadow text-light" >
        <div className="container">
            <div className="row">
                <div className="col-md-12">

          

    <nav className="navbar navbar-expand-lg text-light ">
        <div className="container-fluid text-light">
            <img style={style} src={logo} alt="" />
            <Link to="/" className="navbar-brand text-light">Cacttus Education</Link>

            <button className="navbar-toggler bg-light text-light" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-light"></span>
    </button>

    <div className="collapse navbar-collapse text-light" id='navbarSupportedContent'>
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className="nav-item">
                <Link to="/" className="nav-link active text-light">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link active text-light">About Us</Link>
            </li>
          
            <li class="nav-item dropdown ">
          <Link to="/training " className="nav-link dropdown-toggle text-light"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Training
          </Link>
          <ul class="dropdown-menu bg-dark">
          <li><Link to="/training" className="dropdown-item text-light bg-dark" href="#">Training</Link> </li>
            <li><Link to="/modules" className="dropdown-item text-light bg-dark" href="#">Modules</Link> </li>
        </ul>
        </li>
        <li className="nav-item">
                <Link to="/school" className="nav-link active text-light">School</Link>
            </li>
            <li className="nav-item">
                <Link to="/work" className="nav-link active text-light">Work</Link>
            </li> 
         <li className="nav-item">
                <Link to="/contact" className="nav-link active text-light">Contact Us</Link>
            </li>
        </ul>
    </div>
        </div>
    </nav>    
      </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
