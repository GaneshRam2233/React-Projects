import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let [loginEmail, setEmail] = useState("")
    let [loginPass, setPassword] = useState("")
    let navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault()

        let res = await axios.get("http://localhost:3000/users")
        let users = res.data
        console.log(users)

        let user = users.find((ele) => ele.password == loginPass && ele.email == loginEmail)
        console.log(user);

        if (user) {
            alert("Login Done")
            navigate("/products")
        }
        else {
            alert("Wrong Credentials")
        }
    }

    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <div className="inner">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your Email" value={loginEmail} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Enter your Password" value={loginPass} onChange={(e) => setPassword(e.target.value)} />

                        <button>Login</button>

                    </form>
                    <footer>
                        <p>Don't have an account?</p>
                        <Link to="/" >Sign Up</Link>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Login
