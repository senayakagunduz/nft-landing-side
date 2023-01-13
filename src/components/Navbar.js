import React from 'react'
import "./css/style.css"

const Navbar = () => {
  return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-light ml-2 mr-2">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
      <ul className="navbar-nav col-md-3  mx-auto mb-lg-0 "> 
      {/* me-auto mb-2  solda olması için mx-auto ortada olması için*/}
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Collection</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Roadmap</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Faq</a>
        </li>
      </ul>
      <form className="d-flex justify-content-around">
        <button className="btn btn-outline-success" type="submit">Connect wallet</button>
      </form>
    </div>
  </div>
</nav>
    
   
  )
}

export default Navbar