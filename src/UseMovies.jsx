import {useState,useEffect} from "react";

const localCache={};

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_KEY}`
    }
};

export default function UseMovies(query){
    
    const [movieList,setMovieList]=useState([]);
    const [status,setStatus]=useState("unloaded");

    useEffect(()=>{
        if(!query)
        {
            setMovieList(getMoviesOnDiscover);
        }
        else if (localCache[query])
        {
            setMovieList(localCache[query])
        }
        else
        {
            getMoviesOnSearch(query);
        }

        async function getMoviesOnDiscover(){
            setMovieList([]);
            setStatus("loading");

            const res=await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',options)
            const json=await res.json();

            // localCache[query]=json.movies || [];
            setMovieList(json.results || [])
            setStatus("loaded")
            console.log(json.results)
        }

        async function getMoviesOnSearch(query){
            setMovieList([]);
            setStatus("loading");

            const res=await fetch(`https://api.themoviedb.org/3/search/collection?query=${query}&include_adult=false&language=en-US&page=1`, options);
            const json=await res.json();

            localCache[query]=json.results || [];
            setMovieList(localCache[query])
            setStatus("loaded")
            console.log(query, json.results)
        }

    },[query]);

    return [movieList,status]
}
