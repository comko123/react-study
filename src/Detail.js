/*eslint-disable*/
import {useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import SemeDetail from "./SemeDetail"
const Detail = () => {
    const [state,setState] =useState({})
    const {id}=useParams();
useEffect(()=>{const data = async()=>setState(
    await(
        await axios(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).data.data.movie
)
data()
},[])
const{like_count,description_full,title_long,runtime,rating,genres}=state
    return(<>{
    <SemeDetail 
    like_count={like_count}
    description_full={description_full}
    title_long={title_long}
    genres={genres}
    runtime={runtime}
    rating={rating}
    />
    }
   
    </>)
}
export default Detail;