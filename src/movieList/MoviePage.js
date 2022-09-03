/*eslint-disable*/
import "../css/MoviePage.moudule.scss";
import { Link } from "react-router-dom";
const movieData = (...rest) => {
return <>
<img src = {rest[0]} alt = {rest[4]}/>
<div className = "cont">
<Link to ={`/movie/${rest[5]}`}>
<h1 className="link" style={{color:"aqua"}}>제목 : {rest[3]}</h1>
</Link>
<h3>평점 : {rest[4]}</h3>
<ul>장르 : {rest[1].map((G,index)=><li key = {index}>{G}</li>)}</ul>
<h2>줄거리 : {rest[2]}</h2>
</div></>}

const MoviePage = ({medium_cover_image,genres,summary,id,title_long,rating,text}) => {
return (<div className = "movie">
{!!text ?
(title_long.includes(text)||title_long.toLowerCase().includes(text))?
movieData(medium_cover_image,genres,summary,title_long,rating,id):null
: movieData(medium_cover_image,genres,summary,title_long,rating,id)}
</div>)}
export default MoviePage
