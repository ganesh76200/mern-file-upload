import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return<>
   <nav className="navbar navbar-expand-lg bg-danger">
     <div className="container-fluid">
       <Link className="navbar-brand" to="/">Navbar</Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div className="navbar-nav">
           <Link  to="/" className="nav-link active">Home</Link>
           <Link  to="/multi-image-upload" className="nav-link" >MultiImage</Link>
           <Link  to="/single-image-upload" className="nav-link" >SingleImage</Link>
           <Link  to="/form-upload" className="nav-link" >FormUpload</Link>
         </div>
       </div>
     </div>
   </nav>
  </>
}

export default Navbar