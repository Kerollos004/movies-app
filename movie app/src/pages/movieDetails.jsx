import "./movieDetails.css"
import {  useNavigate, useParams } from 'react-router-dom'
import {useEffect , useState} from 'react'
function MovieDetails() {
    const [movies , setMovies] = useState ([])
    let { movieId } = useParams()
    const movieNavigate = useNavigate()
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
        setMovies(data.results)
    } catch (err) {
    console.error(err);
    }
}

fetchMovies();
    }, [])
    
let currentMovie = movies.find(movie => movie.id.toString() === movieId);

return (
<div className='container'>
    {currentMovie ? (
        <div>
            <img 
            src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`} 
            alt={currentMovie.title} 
            loading="lazy" 
            />    
            <h3>{currentMovie.title}</h3>
        </div>
    ) : (
        <p>Loading...</p>
    )}

    <i 
        onClick={() => movieNavigate("/")} 
        className="bi bi-arrow-left-square"
    ></i>
</div>
);

}

export default MovieDetails
