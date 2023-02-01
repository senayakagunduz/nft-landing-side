import React from 'react'
import {collection} from "./data/data"
import "./css/style.css";

const Unicorns = () => {
  return (
    <section id="unicorn">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
            <h6>Explore my unicorns and give a feedback</h6>
            <h2 className='mb-3 mt-1'>Our collection</h2>
            </div>
            {
              collection.map((item)=>{
                const {id,img}=item;
                return (
                  <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                    <div className="collection-card">
                      <div className="collection-img brighten">
                        <img src={img} className="w-100 collection" alt=""/>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </section>
  )
}

export default Unicorns