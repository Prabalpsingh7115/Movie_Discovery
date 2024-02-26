
let movies=[];

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTlhYzZhOWQwZjY2YTA0MjI5YWZiNjQ5M2ZjMzhhNSIsInN1YiI6IjY1ZDQ2YThiNDk4YmMyMDE3YTcxZjZkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WJ26kR3juT4kbA5TUlgkrGYfJ_PdN4_Lc0HjggtYu7M'
    }
};

async function fetchMovies()
{
    let response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    response = await response.json();
    // console.log(response);
    movies=[];
    for(let i=0;i<response["results"].length;i++)
    {   
        let movie_card={
            name:response["results"][i]["title"],
            rating:response["results"][i]["vote_average"],
            image:`https://image.tmdb.org/t/p/w500${response["results"][i]["poster_path"]}`,
            info:response["results"][i]["overview"],
        }
        movies.push(movie_card);
    }
    buildCards();
}


async function searchMovies(keyword)
{
    let response =await fetch(`https://api.themoviedb.org/3/search/collection?query=${keyword}&include_adult=false&language=en-US&page=1`, options)
    response=await response.json();
    // console.log(response);
    movies=[];
    for(let i=0;i<response["results"].length;i++)
    {   
        let movie_card={
            name:response["results"][i]["name"],
            rating:response["results"][i]["vote_average"],
            image:`https://image.tmdb.org/t/p/w500${response["results"][i]["poster_path"]}`,
            info:response["results"][i]["overview"],
        }
        movies.push(movie_card);
    }
    buildCards();
}

function buildCards(){
    let main_box=document.getElementById("main_box");
    main_box.innerHTML=``;
    for(let i=0;i<movies.length;i++)
    {
        main_box.innerHTML+=
            `<div class="movie_card">
                <div class="movie_image">
                    <img src="${movies[i]["image"]}" alt="${movies[i]["name"]} poster"/>
                </div>
                <div class="movie_info">
                    <div class="movie_name">${movies[i]["name"]}</div>
                    <div class="movie_rating">${movies[i]["rating"]}</div>
                </div>
                <div class="overview">
                    <div class="movie_overview">${movies[i]["info"]}</div>
                </div>   
            </div>`
    }
}

let movie_cards=document.querySelectorAll(".movie_card");
console.log(movie_cards);
// movie_cards.addEventListener("hover",(e)=>{
//     let movie_img=document.querySelector("e>.movie_image");
//     movie
// })

let input=document.querySelector('input[type="search"]');
input.addEventListener("search",()=>{
    searchMovies(input.value);

});

fetchMovies();


