import React from 'react';
import data from '../data/data.json'
import samsung1 from './images/samsung1.jpg'
import samsung2 from './images/samsung2.jpg'
import samsung3 from './images/samsung3.jpg'
import oppo1 from './images/oppo1.jpg'
import oppo2 from './images/oppo2.jpg'
import oppo3 from './images/oppo3.jpg'
import mi1 from './images/mi1.jpg'
import mi2 from './images/mi2.jpg'
import mi3 from './images/mi3.jpg'
import Resume from './Resume'
import {Link} from 'react-router-dom'

let Home=()=>{
    let card_details=data.mobiles;
    console.log(card_details);
    let images=[samsung1,samsung2,samsung3,oppo1,oppo2,oppo3,mi1,mi2,mi3];
    return(
        <div className="row justify-content-center">
            {card_details.map( (values,index)=>(
               <section className="col-lg-4 col-md-3 col-sm-10 mt-2 " key={index}>
                   <div className="card text-center">
                       <article className="card-body">
                           <img src= {images[index]} alt="image" style={{width:"50%"}} />
                            <h1>{ values.details.name }</h1>
                            <h2 className="text-secondary">{ values.details.mobile}</h2>
                            <Link to={{ pathname:'/resume', data1:{id:index} }} className="btn btn-primary">View Details</Link>
                       </article>
                   </div>
               </section> 
            )

            )}
        </div>
    );
}
export default Home;