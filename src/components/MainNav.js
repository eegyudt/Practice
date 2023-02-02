import './MainNav.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TVIcon from '@mui/icons-material/Tv';
import { useEffect } from 'react';


export default function SimpleBottomNavigation() {
 
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    if (value === 0) {
      navigate("/")
    } else if(value ===1) {
      navigate("/movies")
    } else if(value ===2) {
      navigate("/series")
    } else if(value ===3) {
      navigate("/search")
    }


  }, [value]);

  return (

      <BottomNavigation
        showLabels
        class="bottom-nav"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction style={{ color: "black" }}  label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ color: "black" }}  label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{ color: "black" }}  label="TV Series" icon={<TVIcon />} />
        <BottomNavigationAction style={{ color: "black" }}  label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    
  );
}