import axios from '../axios'
import React, { useState } from 'react'
import Split from 'react-split'
function One() {
    const [movie_name,setMoviename] = useState();
    const [movie_rate,setmovie_rate] = useState();
    const upload =()=>{
        axios.post('/upload',{
           movie:movie_name,
           rating:movie_rate,
        }).then(()=>{
            setMoviename('');
            setmovie_rate('');
        })

        axios.get("/count/Add").then(response =>{
            console.log("count_api",response);
        })
        
         
     }

     const handleChangemovie = e => {
        setMoviename(e.target.value);
      };
      const handleChangemovierate = e => {
        setmovie_rate(e.target.value);
      };
    return (
        <div className="flex  justify-center items-center flex-col bg-gray-100 overflow-y-scroll scrollbar-hide">
            <h1 className="p-10 text-xl ">Add movie name and rating </h1>
                <input className="placeholder:italic placeholder:text-gray-400 block bg-white bg-white  border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Movie name"  value={movie_name} onChange={handleChangemovie} />
                <input className="placeholder:italic placeholder:text-gray-400 block bg-white bg-white  border border-gray-300 rounded-md py-2 pl-9 pr-3 m-1  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="rating"  value={movie_rate} onChange={handleChangemovierate} />
                <button className="bg-sky-600 hover:bg-sky-700 rounded-md p-1 m-1 w-20 shadow-sm focus:outline-none text-white " onClick={upload} >
                    Add
                </button>
        </div>
    )
}

export default One
