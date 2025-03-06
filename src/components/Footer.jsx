import React from 'react'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
  <>
   <div className="container-fluid p-5 mt-5" style={{backgroundColor:"#000"}}>
      <div className="row">
      <div className="col-md-6 d-md-flex justify-content-center"> 
            <div>
            <h4 className="text-white">SWEAT OFF</h4>
            <Link to={'/'} className="mt-2 text-white" style={{textDecoration:"none"}}><p>About</p></Link>
            <Link to={'/'} className="mt-2 text-white" style={{textDecoration:"none"}}><p>Blog</p></Link>
            </div>
          </div>
          <div className="col-md-6 flex-column justify-content-center">
            <div>
            <h4 className="text-white text-capitalize">Contact Us</h4>
            <a href="" className="text-white text-decoration-none d-block">9745854802</a>
            <a href="mailto:shyamdamodaran14@gmail.com" className="text-white text-decoration-none ">sweatoff@gmail.com</a>
            </div>
          </div>
      </div>
    </div>
  </>
  )
}

export default Footer