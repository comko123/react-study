/*eslint-disable*/
import {useEffect,useState,lazy, Suspense} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const SemeDetail = lazy(()=>import("./SemeDetail"))
const Detail = () => {
const [state,setState] =useState({})
const {id}=useParams();

useEffect(()=>{
try{
 (async()=>setState(
await(await axios(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).data.data.movie))()
}
catch(e){console.log(e)}},[])
const{like_count,description_full,title_long,runtime,rating,genres,medium_cover_image}=state
return(<>{<Suspense fallback={<h1>Loading...</h1>}>
<SemeDetail 
like_count={like_count}
description_full={description_full}
title_long={title_long}
genres={genres}
runtime={runtime}
rating={rating}
medium_cover_image={medium_cover_image}
/>
</Suspense>
}
   
</>)
}
export default Detail;