const MovieCard=({name,overview,image,rating}) =>{
    let dummyImg="https://pets-images.dev-apis.com/pets/none.jpg"
    if(image?.length)
    {
        dummyImg=image;
    }
    return (
        <div className="movie_card">
            <div className="movie_image">
                <img src={`https://image.tmdb.org/t/p/w500${dummyImg}`} alt={`${name} poster`}/>
            </div>
            <div className="movie_info">
                <div className="movie_name">{name}</div>
                <div className="movie_rating">{rating}</div>
            </div>
            <div className="overview">
                <div className="movie_overview">{overview}</div>
            </div>   
        </div>
    );        
};

export default MovieCard;