/*eslint-disable*/
import {useDeferredValue, useEffect,useState,useTransition,lazy, Suspense} from "react"
import axios from "axios"
const MoviePage = lazy(()=>import("./MoviePage"))
const Page = ({ratingDefault,textDefault}) => {
const [data,setData] =useState([])
const [ispending,startTransition] = useTransition()
const state = useDeferredValue(data)
useEffect(()=>{try{
startTransition(async()=>
setData(await(
await axios(`https://yts.mx/api/v2/list_movies.json?minimum_rating=${ratingDefault}&sort_by=year`)
).data.data.movies))}
catch(e){ console.log(e)}},[ratingDefault])

return (
<>
{ispending?<h1>loading.....</h1>:
state.map((item)=>{
    if(ratingDefault===Math.floor(item.rating)){
    return <Suspense key = {item.id} fallback={<h1>Loading...</h1>}>
    <MoviePage {...item}  text = {textDefault}/>
    </Suspense>
    }})}
</>
)}
export default Page
