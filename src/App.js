import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';

// https://developers.themoviedb.org/3/getting-started/introduction


function App() {

 
  const [imgs, setImages] = useState([]);
  // const fetchTrending = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
  //   );
  //   setImages(data.results);
  // };
 useEffect(() => {
    const getImages = () => {
      try {
        axios.get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
        ).then((result) => {
          setImages(result.data.results);
        });
      } catch (error){
        console.log(error.message);
      }
       
    };
    getImages();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div className="app">


      <Container>
        <Routes>
          <Route path='/' element={<Trending data={imgs}/>} exact/>
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Series/>} />
          <Route path='/search' element={<Search/>} />

        </Routes>
      </Container>

      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
