import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';




export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const history = useHistory();

    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {

    //         history.push("/registro")
    //     }
    // }, []);

    async function login() {
        console.warn(email, password);
        let item = { email, password };
        let result = await fetch("http://127.0.0.1:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/registro")
    }



    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='usuario' onChange={(e) => setEmail} className='form-control' />
            
            <input type="password" placeholder='password' onChange={(e) => setPassword} className='form-control' />
            
            <button onClick={login} className="btn btn-primary" >Ingresar</button>
        </div>
    );

}