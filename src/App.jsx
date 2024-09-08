import './App.css';
import movies from "./db/movies"
import Home from './components/Home';
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LikedMovies from './components/LikedMovies';
import Welcome from './components/Welcome';

function App() {
  const [movieList,setMovieList] = useState(movies)

  const addMovie = ()=>{
    const movieTitle = document.getElementById("title").value;
    const movieImage = document.getElementById("image").value;
    if (movieTitle==="") return;

    const movie = {
        title: movieTitle,
        image:movieImage,
        rating: "7.0/10",
        time:"idk",
        liked : false,
    }
    setMovieList((prevList) => [...prevList, movie])
  }

  const likeHandler = (title)=>{
    setMovieList((movieList) =>
      movieList.map((t) =>
        t.title === title ? { ...t, liked: !t.liked } : t 
      )
    )
  }

  return (
    <div className="App">
      <Home></Home>
      
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Movies" element={<MovieList movieList={movieList} likeHandler={likeHandler}></MovieList>} />
        <Route path="/Add" element={<MovieAdd addMovie={addMovie}></MovieAdd>} />
        <Route path="/Liked" element={<LikedMovies movieList={movieList}></LikedMovies>} />
      </Routes>
  

    </div>
  );
}

export default App;
