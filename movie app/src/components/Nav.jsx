import  { useState , useEffect } from 'react'
import "./nav.css"
function Nav() {
const [mode , setMode] = useState("bi bi-moon-fill moon")
const [scroll, setScroll] = useState(false)
useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);
    function handleScroll() {
        if (window.scrollY > 50) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
    const [openMenu, setOpenMenu] = useState(false)
    function handleMenu() {
        setOpenMenu(!openMenu)
    }
    function handleDarkMode() {
        if (mode === "bi bi-moon-fill moon") {
            setMode("bi bi-brightness-low-fill moon")
            document.body.classList.add("dark-mode")
            localStorage.setItem("mode", "dark-mode")
        }
        else {
            setMode("bi bi-moon-fill moon")
            document.body.classList.remove("dark-mode")
            localStorage.setItem("mode", "light-mode")
        }
    }
    useEffect(() => {
        let currentMode = localStorage.getItem("mode")
            if (currentMode === "dark-mode") {
                document.body.classList.add("dark-mode")
                setMode("bi bi-brightness-low-fill moon")
            }
            else {
                document.body.classList.remove("dark-mode")
                setMode("bi bi-moon-fill moon")
            }
        
    } , [])
    return (
    <nav className={scroll?"active":""}>
        <h3>movie app</h3>
        <ul className={openMenu?"active":""}>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#service">service</a></li>
            <li><a href="#movies">movies</a></li>
            <li><a href="#connect">connect</a></li>
        </ul>
            <i onClick={handleMenu} className="bi bi-list "></i>
            <i onClick={handleDarkMode} className={mode}></i>
    </nav>
)
}

export default Nav


