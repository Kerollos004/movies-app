import {useState , useEffect} from 'react'
import "./movies.css"
import { Link } from 'react-router-dom'



function Movies() {


    const [data , setData] = useState([])
useEffect(() => {
    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjM5ZTUwMTVkZWM1NDcwODkyYTFmNjg0ZjhlODViZCIsIm5iZiI6MTc1NTEwNzY3Mi41NjgsInN1YiI6IjY4OWNkMTU4MmY3NjBiMTQ5ZDFhMzdmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0T6tNu7fkH1lqrnPpnc19BIxR087AVMdE9hR4ZhcWk'
}
};
async function fetchMovies() {
    try {
        let res = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options);
        let data = await res.json();
        console.log(data.results); 
        setData(data.results);
    } catch (err) {
    console.error(err);
    }
}

fetchMovies();
}, []);

    let moviesHtml = data.map((movie, index) => {
        return (
            <div className="movie" key={index}>
            <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            loading="lazy" 
            />
                <h3>{movie.title}</h3>
                <Link to={`/movieDetails/${movie.id}`}>view movie</Link>
            </div>
        )
    })
    return (
        <div className='movies-content' id='movies'>
            <h3 className='address'>our movies</h3>
                <div className="movie-row">
                    <h3 className='title'>tv-shows</h3>
                    <div className="movies">
                        {moviesHtml}
                    </div>
                </div>
        </div>
)
}

export default Movies