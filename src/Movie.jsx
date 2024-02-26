import MovieCard from "./MovieCard";

const Movie = ({movies}) => {
    return (
        <section className="main_box">{
            (!movies.length)?(
                <h1>No Movies Found with that keyword! Try with other keyword...</h1>
            ):(
                movies.map(movie => (
                    <MovieCard 
                    name={movie.title || movie.name}
                    overview={movie.overview}
                    image={movie.poster_path}
                    rating={movie.vote_average  }
                    key={movie.id}
                    />
                ))
            )
        }
        </section>
    )
}

export default Movie;