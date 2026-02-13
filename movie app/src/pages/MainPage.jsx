import {useState,useEffect} from 'react'
import Nav from '../components/Nav'
import Home from '../components/Home'
import About from "../components/About"
import Services from"../components/Services"
import Movies from "../components/Movies"
import Connect from '../components/Connect'
import Footer from "../components/Footer"
import "./mainPage.css"


function MainPage() {
    const [btn, setBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", handleBtnScroll)
return () => {
    window.removeEventListener("click", handleBtnScroll);
};

    }, [])

    function handleBtnScroll() {
        if (window.scrollY > 50) {
            setBtn(true)
        }
        else {
            setBtn(false)
        }
    }

    function handlePageScroll(e) {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }
return (
        <>
            <Nav />
            <Home />
            <About />
            <Services />
            <Movies />
            <Connect/>
            <Footer />
        <i onClick={handlePageScroll} className={btn?"bi bi-arrow-up top-btn active":"bi bi-arrow-up top-btn"}></i>
        </>
)
}

export default MainPage
