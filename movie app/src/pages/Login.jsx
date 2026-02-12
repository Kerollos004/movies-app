import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"
function Login() {
    const [form , setForm] = useState("login")
    const navigate = useNavigate()
    return (
        <div className='container'>
            <i onClick={() => {
                navigate("/")
            }}  className="bi bi-arrow-left-square"></i>
            {form === "login" && (
            <div className="login">
            <h3>login</h3>
            <form action="">
            <input type="text" placeholder='email...' />
            <input type="password" placeholder='password...' />
            <a href="#">log in</a>
            </form>
            <div>
                <p>don,t have an account</p>
                        <a href="#" onClick={(e) => {
                        e.preventDefault()    
                        setForm("signup")
                }}>sign up</a>
            </div>
            </div>
            )}

            {form === "signup" && (
            <div className="signup">
            <h3>sign up</h3>
            <form action="">
            <input type="text" placeholder='name...' />
            <input type="text" placeholder='email...' />
            <input type="password" placeholder='password...' />
            <a href="#">sign up</a>
            </form>
            <div>
                <p>already have an account</p>
                        <a href="#" onClick={(e) => {
                        e.preventDefault()
                        setForm("login")
                }}>log in</a>
            </div>
            </div>
            )}
        </div>
    )
}

export default Login
