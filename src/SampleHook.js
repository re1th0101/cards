import React, {useState} from 'react'

export default function SampleHook() {

    let [count,setCount]=useState(0);
    return (

        <div>
            <h1>Hooks Count : { count }</h1>
            <button onClick={()=> setCount(count+1) }>Hook Inc</button>
        </div>
    )
}