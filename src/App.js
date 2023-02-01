import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';

// https://developers.themoviedb.org/3/getting-started/introduction


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">


      <Container>
        <Routes>
          <Route path='/' component={Trending} exact/>
          <Route path='/movies' component={Movies}/>
          <Route path='/series' component={Series}/>
          <Route path='/search' component={Search}/>

        </Routes>
      </Container>

      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
