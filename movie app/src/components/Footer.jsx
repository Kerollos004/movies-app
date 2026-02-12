import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
export default function Footer() {
return (
    <footer>
        <div className="footer-block">
            <h3>thanks for watching</h3>
        </div>
        <div className="footer-block">
        <h3>our links</h3>
        <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#service">service</a></li>
            <li><a href="#movies">movies</a></li>
            <li><a href="#connect">connect</a></li>
        </ul>
        </div>
        <div className="footer-block">
            <h3>join our newsletter</h3>
            <Link to="/login" className='log-btn'>log in </Link>
        </div>
    </footer>
)
}
