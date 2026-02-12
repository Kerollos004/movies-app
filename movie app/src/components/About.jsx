import {useState} from 'react'
let images = ""
import "./about.css"
import about1 from "../assets/imgs/about1.avif"
import about2 from "../assets/imgs/about2.avif"
import about3 from "../assets/imgs/about3.avif"
import about4 from "../assets/imgs/about4.avif"
images = [about1, about2, about3, about4] 
function About() {
    const [mainImg, setMainImg] = useState(images[2])
    
return (
    <div id='about' className='about'>
        <div className="about-text">
            <h3>watch your movies free</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi nostrum eaque omnis ea
                laudantium explicabo iusto doloremque, laboriosam harum praesentium quod assumenda animi aut, quam quisquam ex eos sapiente.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi nostrum eaque omnis ea
                laudantium explicabo iusto doloremque, laboriosam harum praesentium quod assumenda animi aut, quam quisquam ex eos sapiente.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi nostrum eaque omnis ea
                laudantium explicabo iusto doloremque, laboriosam harum praesentium quod assumenda animi aut, quam quisquam ex eos sapiente.
            </p>
            <ul>
                <li>
                    <div className="img-box"><img onClick={() => {
                        setMainImg(images[1])
                    }} src={about1} alt="img" loading='lazy' /></div>
                </li>
                <li>
                    <div className="img-box">< img onClick={() => {
                        setMainImg(images[2])
                    }} src={about3} alt="img" loading='lazy' /></div>
                </li>
                <li>
                    <div className="img-box"><img onClick={() => {
                        setMainImg(images[3])
                    }} src={about4} alt="img" loading='lazy' /></div>
                </li>
            </ul>
        </div>
        <div className="about-imgs">
            <div className="big-img-box">
                <img src={mainImg} alt="img" loading='lazy' />
            </div>
        </div>
    </div>
)
}

export default About