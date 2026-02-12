import "./App.css"
import MainPage from "./pages/MainPage"
import Login from "./pages/Login"
import MovieDetails from "./pages/movieDetails"
import { Routes , Route } from "react-router-dom"
function App() {
return (

    <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="movieDetails/:movieId" element={<MovieDetails />}></Route>
    </Routes>

)
}

export default App

