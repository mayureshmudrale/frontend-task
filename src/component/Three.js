import axios from '../axios';
import React, { useState } from 'react'

function Three() {
    const [count,setCount] = useState();

    const getCount = ()=>{
        axios.get("/count").then(response =>{
            console.log({response})

            setCount(response.data[0])
            // console.log({count});
            // console.log(count._id);

        })
    }

    return (
        <div className="bg-gray-200 overflow-y-scroll  space-x-2 items-center justify-center scrollbar-hide  ">
            <div className="flex justify-center  ">
                <button className="bg-sky-600 hover:bg-sky-700 rounded-md p-1 m-1 w-20 shadow-sm focus:outline-none text-white w-full " onClick={getCount}>Fetch</button>
            </div>
            <div className="flex flex-grow flex-row space-x-5">
                <div className="flex flex-col justify-center">
                
                    <h1>Count Add API</h1>
                    <h2>{count?.add_api_count}</h2>

                </div> 
                <div className="flex flex-col justify-center">
                    <h1>Count Update API</h1>
                    <h2>{count?.update_api_count}</h2>
                </div>
            </div>
            
        </div>
    )
}

export default Three
