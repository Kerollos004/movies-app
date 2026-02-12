import React from 'react'
import "./home.css"
// import homeBg from "../assets/imgs/movie-background-collage.jpg"
function Home() {
return (
    <div className='home' id="home" >
        <div className="home-text">
        <h3>your movies are here</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quae delectus ex ipsa perferendis, ut inventore nulla atque ipsam repellat?</p>
        <a href="#movies"> <i className="bi bi-play"></i>  <span>watch now</span> </a>
        </div>
    </div>
)
}

export default  Home