import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import React, {useEffect, useState } from 'react';


function App() {
  const movieIni= {backdrop_path: "/3jDXL4Xvj3AzDOF6UH1xeyHW8MH.jpg",
first_air_date: "2017-12-01",
genre_ids: (4) [10765, 18, 9648, 80],
id: 70523,
name: "Dark",
origin_country: ["DE"],
original_language: "de",
original_name: "Dark",
overview: "A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.",
popularity: 182.984,
poster_path: "/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
vote_average: 8.5,
vote_count: 3980}
 const [movie,setMovie] = useState(movieIni);
 const handleAddToNavbar = (movie) => {
      
        setMovie(
         movie
       );
       console.log(movie);
     
     return movie;
     }


  return (
    <div className="App">
       <Banner movie={movie}/>
      <Row title="NETFLIX ORIGINALS" handleAddToNavbar={handleAddToNavbar} fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Action Movies" handleAddToNavbar={handleAddToNavbar} fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" handleAddToNavbar={handleAddToNavbar} fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies"  handleAddToNavbar={handleAddToNavbar} fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" handleAddToNavbar={handleAddToNavbar} fetchUrl={requests.fetchDocumentaries} />

      
    </div>
  );
}

export default App;


// API key : 1c98a2fcd593668a5d62531a5d210bb2
// Ejemplo solicitud de la API : https://api.themoviedb.org/3/movie/550?api_key=1c98a2fcd593668a5d62531a5d210bb2