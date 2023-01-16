import React from 'react'
import "./css/style.css"
import {navbarLinks} from "./data/data"

const Navbar = () => {
  return (
    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark  ml-2 mr-2">
  <div className="container">
    <a className="navbar-brand" href="/#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
      <ul className="navbar-nav col-md-3  mx-auto mb-lg-0 "> 
      {/* me-auto mb-2  solda olması için mx-auto ortada olması için*/}
      {
        navbarLinks.map((link)=>{
            const {id,href,name}=link;
            return ( <li key={id} className="nav-item" >
                        <a href={href} className="nav-link active" rel="noreferrer" aria-current="page">{name}</a>
                    </li>)})
        }
      </ul>
      <form className="d-flex justify-content-around">
        <button className="btn btn-outline-light" type="submit">Connect wallet</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar