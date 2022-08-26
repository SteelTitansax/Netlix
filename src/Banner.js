import React, {useState,useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import "./Banner.css";

const Banner = ({movie}) => {

   
console.log("moviepasando Banner:"+ movie);
   
    function truncate(str, n){
        return str?.length>n ? (str.substr(0, n-1) + "...") : str;
    }

    return (
        <header
        className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
        >
            <h1 className="banner__Maintitle">NETLIX</h1>
            <h5 className="banner__subMainTitle">React Powered</h5>
       
       
        <div className="banner__contents">
         <h1 className="banner__title">{movie?.title|| movie?.name || movie?.original_name}</h1>
        </div>

        <div className="banner__buttons">
            <button className="banner__button"><a className="link" href="">Download</a></button>
        </div>
       
        <h1 className="banner__description">
            {truncate(movie?.overview,200)}
        </h1>
                <div className="banner__fadeBottom"/> 

        </header>
    )
}

export default Banner