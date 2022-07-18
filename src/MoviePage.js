const MoviePage = ({img,genres,sum,title,rat}) => {
return (<>
<h1>제목 : {title}</h1>
<h3>평점 : {rat}</h3>
<img src = {img} alt = {rat}/>
<ul>{genres.map(G=><li key = {G}>{G}</li>)}</ul>
<h2>줄거리 : {sum}</h2>
</>)
}
export default MoviePage