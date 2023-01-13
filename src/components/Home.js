import React from 'react'
import unicorn from './images/nftUnicornCloud.png'
import "./css/style.css"

const Home = () => {
  return (
    <div className="container vh-100" id="hero">
        <div className="row mb-2 mt-1 home ">
            <div className="col-md-6 d-flex align-items-center justify-content-center align-content-center text-center flex-column">
                <h3 className='mb-1'>
                    <a href='/#' className='text-dark'>Featured Post</a>
                </h3>
                <p ><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut dolores corporis mollitia? Eum officiis alias, modi totam reiciendis nesciunt illo aliquid voluptate reprehenderit neque aperiam nostrum cum provident esse?</span></p>
                <button className='btn btn-primary'>Mint</button>  
            </div>
            <div className="col-md-6 home-right-side">
                <div className='card-body d-flex flex-column align-items-start'>
                    <img className='home-image card-img-right flex-auto d-none d-md-block' src={unicorn} alt="unicorn"></img>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Home