/*eslint-disable*/
import "./MoviePage.moudule.scss";
import { Link } from "react-router-dom";
const MoviePage = ({img,genres,sum,title,id,rat}) => {
return (<div className = "movie">
<img src = {img} alt = {rat}/>
<div className = "cont">
<Link to ={`/movie/${id}`} ><h1 className="link" style={{"color":"aqua"}}>제목 : {title}</h1></Link>
<h3>평점 : {rat}</h3>
<ul>장르 : {genres.map((G,index)=><li key = {index}>{G}</li>)}</ul>
<h2>줄거리 : {sum}</h2>
</div>
</div>)}
export default MoviePage