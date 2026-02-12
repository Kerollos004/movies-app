import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./connect.css"
function Connect() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    
    function clearInput(e) {
        e.preventDefault();
        setEmail("")
        setPassword("")
        setMessage("")
    }
    return (
        <div className="connect" id='connect'>
            <h3>connect us</h3>
            <div className="connct-content">
        <form action="">
            <input    value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='email' />
            <input    value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password' />
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={3} placeholder='your message'></textarea>
            <a href="#" onClick={clearInput}>contact us</a>        
        </form>
                <div className="connect-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, velit?</p>
                    <Link  to="/login">log in</Link>
                </div>
            </div>
        </div>
)
}

export default Connect
