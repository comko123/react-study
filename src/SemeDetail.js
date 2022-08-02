import "./Detail.css";
const SemeDetail = ({like_count,description_full,title_long,runtime,rating}) => {

    return(<>
    <img src="https://yts.mx/assets/images/movies/rocketry_the_nambi_effect_2022/large-cover.jpg"alt ="no"/>

    <ul style = {{"fontSize" : "25px"}}>
    <li>샹영시간 :{runtime}분</li>
    <li>평점 : {rating}</li>
    <li>추천수 : {like_count}</li>
    </ul>
    <h1>{title_long}</h1>
    <h3>{description_full}</h3>
   

    </>)
    
}
export default SemeDetail