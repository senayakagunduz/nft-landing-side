import React from 'react'
import {roadmap} from "./data/data"

const Roadmap = () => {
  return (
    <div className='section' id="roadmap">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mb-5">
                </div>
                <div className="col-lg-12 col-md-12 main-container">
                    <div className="roadmap-container mb-5">
                        {
                            roadmap.map((item)=>{
                                const{ id,title,desc}=item;
                                return (
                                <div className="single__roadmap" key={id}>
                                    <span className="roadmap__icon">
                                        <i className="ri-briefcase-4-line"></i>{" "}
                                    </span>
                                    <h4>{title}</h4>
                                    <p>{desc}</p>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Roadmap