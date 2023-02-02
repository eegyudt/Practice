import { Mediation } from "@mui/icons-material";
import { img_300, unavaliable } from "../../config/config";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  console.log("poster, typeof>>>>", poster, typeof poster)
  return (
  <div> 

    <img src={poster ? poster : unavaliable} alt={title}/> 
    <b className="title">{title}</b>
    <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
  </div>
  )
};

export default SingleContent;