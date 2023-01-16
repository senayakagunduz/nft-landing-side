import React from 'react'
import {team} from "./data/data"
import "./css/style.css"


const Team = () => {
return (
<div className="container" id="team">
    {
        team.map((item)=>{
            const {id, img} = item;
            return (
                <div className="responsive" key={id}>
                    <div className="gallery" >
                        <img src={img} alt="galery" className='team-item' style={{width:"600",height:"400"}} />
                        <div className="desc">Add a description of the image here</div>
                    </div> 
                </div>
            )
        })
    }

<div className="clearfix"></div>

<div style={{padding:"3rem"}}>
  <p>This example use media queries to re-arrange the images on different screen sizes: for screens larger than 700px wide, it will show four images side by side, for screens smaller than 700px, it will show two images side by side. For screens smaller than 500px, the images will stack vertically (100%).</p>
  <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
</div>
</div>
  )
}

export default Team