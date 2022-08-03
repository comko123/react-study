import "./Detaill.moudule.scss";
const SemeDetail = ({like_count,description_full,title_long,runtime,rating,genres}) => {

    return(<>
    <div className="container">
    <img src="https://yts.mx/assets/images/movies/rocketry_the_nambi_effect_2022/large-cover.jpg"alt ="no"/>
    <div className="parts">
    <h1 className="title">제목 : {title_long}</h1>
    <ul style = {{"fontSize" : "25px"}}>
    <li>샹영시간 :{runtime}분</li>
    <li>평점 : {rating}</li>
    <li>추천수 : {like_count}</li>
    <li>장르: {genres && genres.map((k,index)=><span style = {{"marginLeft":"10px"}}key ={index}>{k} </span>)}</li>
    </ul>
    <h3 className="description">상세내용 : <br/><br/>{description_full}</h3>
    </div>
    </div>
    </>)
    
}
export default SemeDetail