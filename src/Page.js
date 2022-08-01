/*eslint-disable*/
import {useDeferredValue, useEffect,useState,useTransition} from "react"
import axios from "axios"
import MoviePage from "./MoviePage"
const Page = () => {
    const [data,setData] =useState([])
    const [ispending,startTransition] = useTransition()
    const state = useDeferredValue(data)
   
useEffect(()=>{
    try{
    startTransition(async()=>
    setData(await(
    await axios(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    ).data.data.movies))}
        catch(e){ console.log(e)}},[])
return (
<>
{ispending?<h1>loading.....</h1>:
state.map(({medium_cover_image,genres,summary,id,title_long,rating})=>
 <MoviePage 
key = {id}
id = {id} 
title = {title_long}
img = {medium_cover_image}
genres = {genres}
sum = {summary}
rat = {rating}/>
)}
</>
)}
export default Page