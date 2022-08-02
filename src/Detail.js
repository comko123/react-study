/*eslint-disable*/
import {useDeferredValue, useEffect,useState,useTransition} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import SemeDetail from "./SemeDetail"
const Detail = () => {
    const [state,setState] =useState([])
    const [ispending,startTransition] = useTransition()
    const idState = useDeferredValue(state)
    const {id}=useParams();
useEffect(()=>startTransition(async()=>setState(
    await(
        await axios(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).data.data.movie
)),[])
const{like_count,description_full,title_long,runtime,rating}=idState
    return(<>{ispending?<h1>loading.....</h1>:<>
    <SemeDetail 
    like_count={like_count}
    description_full={description_full}
    title_long={title_long}
    runtime={runtime}
    rating={rating}
    />
    </>
    }
   
    </>)
}
export default Detail;