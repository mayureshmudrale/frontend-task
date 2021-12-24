import axios from '../axios';
import React, { useState } from 'react'
import Update from './Update';

function Two() {
    const [data,setData] = useState();
    
    const FetchAll =()=>{
        axios.get("/sync").then(response =>{
            console.log("from ct",response.data);
            setData(response.data)
    
          })
             

         
    }

    const listItems = data?.map((d,i) =>
       
            <Update key={i} data={d} FetchAll={FetchAll}  />
        
    );
    return (
        <div className="bg-gray-200 overflow-y-scroll  space-x-2 items-center justify-center scrollbar-hide  ">
            <div className="flex justify-center  ">
                <button className="bg-sky-600 hover:bg-sky-700 rounded-md p-1 m-1 w-20 shadow-sm focus:outline-none text-white w-full " onClick={FetchAll}>Fetch</button>
            </div>
            
            {listItems}
        </div>
    )
}

export default Two
