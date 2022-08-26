    import React, {useEffect, useState } from 'react'
    import axios from './axios';
    import './Row.css';
    const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title , fetchUrl, isLargeRow , handleAddToNavbar}){
    const [movies, setMovies] = useState([]); 
  
    //Snippet of code wich runs based on a specific condition/variable

    useEffect(()=> {
        // id [], run once when the row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
             
            setMovies(request.data.results);
            return request; 
        }
        fetchData();
    }, [fetchUrl]);

    return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/*several row_poster(s)*/}

                {movies.map(movie =>(
                    <img key={movie.id} onClick={() => handleAddToNavbar(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
        
    )
}

export default Row