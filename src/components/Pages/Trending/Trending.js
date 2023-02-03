// https://developers.themoviedb.org/3/getting-started/introduction

import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../SingleContent/SingleContent";


const Trending = (props) => {
  // let {data} = props;
  let img1, img2, img3, img4;
 
 
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
    //fetchTrending();s
  }, []);
  
 
   if(imgs.length > 0){
    var min = 0;
    var max = 19;
    let tempArr=[];
    for(let i = 1; i<=4; i ++){
      var rand =  min + (Math.random() * (max-min));
      tempArr.push(Math.floor(rand));
    }
    console.log("R",tempArr);

    img1 = `https://image.tmdb.org/t/p/w300/${imgs[tempArr[0]].poster_path}`
    img2 = `https://image.tmdb.org/t/p/w300/${imgs[tempArr[1]].poster_path}`
    img3 = `https://image.tmdb.org/t/p/w300/${imgs[tempArr[2]].poster_path}`
    img4 = `https://image.tmdb.org/t/p/w300/${imgs[tempArr[3]].poster_path}`
  }
  return (
    
    
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={img1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img4} alt="Fourth slide" />
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );

};

export default Trending;