// import { Mediation } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { img_300, unavaliable } from "../../config/config";
import "./SingleContent.css";


const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  // vote_average is undefined
  console.log("vote average  >>>  ", typeof vote_average)
  return (
  <div className="media"> 
    <Badge badgeContent={vote_average} color={vote_average>6 ? "primary": "secondary"}/>
    <img className="poster" src={poster ? poster : unavaliable} alt={title}/>  
    <b className="title">{title}</b>
    <span className="subtitle">{media_type === "tv" ? "TV Series" : "Movie"}</span>
  </div>
  )
};

export default SingleContent;