import React from 'react'
import data from '../data/data.json'


export default function Resume(props) {
    let info=data.mobiles[props.location.data1.id];

    return (
        <div className="row">
            <div className="col-lg-3 m-2">
                <div className="card">
                    <div className="card-body">
                        <h1>{info.details.mobile}</h1>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 m-2">
                <h2>Features:</h2>
                <hr />
                    <p>{info.cost}</p>
                    <p>{info.processor}</p>
                    <p>{info.RAM}</p>
                    <p>{info.Battery}</p>
            </div>
        </div>
    )
}