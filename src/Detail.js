/*eslint-disable*/
import {useDeferredValue, useEffect,useState,useTransition} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
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
axios(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then(res=>console.log(res))
    return(<>{ispending?<h1>loading.....</h1>:<>
    <img src="https://yts.mx/assets/images/movies/rocketry_the_nambi_effect_2022/large-cover.jpg"/>
    </>
    }
   
    </>)
}
export default Detail;