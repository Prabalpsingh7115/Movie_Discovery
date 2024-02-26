import {createRoot} from "react-dom/client"
// import SearchBar from './SearchBar';
import Movie from "./Movie";
import { useState } from "react";
import UseMovies from "./UseMovies";


const App = ( ) => {
    const [query, setQuery] = useState("")
    const [movieList] = UseMovies(query)

    return (
        <div>
            <nav className="nav_bar">
                <div className="search_bar">
                    <input type="search" className="search_field" placeholder="Search"
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
            </nav>
            <Movie movies = {movieList}/>
            <section className="footer">
                <p>
                Movie Overview : A short description of movies along with its performance in the BOX OFFICE...
                </p>
            </section>
        </div>
    );
};

const container=document.getElementById("root");
const root= createRoot(container);
root.render(<App/>);