import axios from '../axios';
import React, { useState } from 'react'

function Update({data,FetchAll}) {
    const [movie_name,setMoviename] = useState(data.movie);
    const [movie_rate,setmovie_rate] = useState(data.rating);
    const [_id,set_id] = useState(data._id);
    const handleChangemovie = e => {
        setMoviename(e.target.value);
      };
      const handleChangemovierate = e => {
        setmovie_rate(e.target.value);
      };

      const update = ()=>{
        axios.put("/",{
            _id:_id,
            movie:movie_name,
            rating:movie_rate, 
        }).then(FetchAll);
        
        axios.get("/count/update").then(response =>{
            console.log("count_api",response);
        })

      }
    return (
        <div className='flex   '>
            <input className="placeholder:italic placeholder:text-gray-400 block bg-white bg-white  border border-gray-300 rounded-md py-2 pl-9 pr-3 m-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Movie name"  value={movie_name} onChange={handleChangemovie} />
                <input className="placeholder:italic placeholder:text-gray-400 block bg-white bg-white  border border-gray-300 rounded-md py-2 pl-9 pr-3 m-1  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="rating"  value={movie_rate} onChange={handleChangemovierate} />
                <button className="bg-sky-600 hover:bg-sky-700 rounded-md p-1 m-1 w-20 shadow-sm focus:outline-none text-white " onClick={update} >
                    Update 
                </button>
        </div>
    )
}

export default Update
