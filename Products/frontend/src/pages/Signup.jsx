import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    let [userName, setUserName] = useState("")
    let [password, setPassword] = useState("")
    let [email, setEmail] = useState("")
    let navigate = useNavigate()

    let handleName = (e) => {
        setUserName(e.target.value)
    }
    let handlePassword = (e) => {
        setPassword(e.target.value)
    }
    let handleEmail = (e) => {
        setEmail(e.target.value)
    }

    let handleSubmit = async (e) => {
        e.preventDefault()

        let PayLoad = {
            "userName": userName,
            "password": password,
            "email": email
        }

        await axios.post("http://localhost:3000/users", PayLoad)

        alert("You've Registered Successfully")

        setUserName("")
        setPassword("")
        setEmail("")

        navigate("/login")
    }



    return (
        <>
            <div className="signup">
                <h1>Sign Up page</h1>
                <div className="inner">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter your Username' value={userName} onChange={handleName} />
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter your Email' value={email} onChange={handleEmail} />
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='Enter your Password' value={password} onChange={handlePassword} />

                        <button type='submit' >Register</button>

                        <footer>
                            <p>already have an account?</p>
                            <NavLink to='/login'>Login</NavLink>
                        </footer>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Signup
