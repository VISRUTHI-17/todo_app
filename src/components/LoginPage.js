import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';



const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [dataInput, setDataInput] = useState("");


    const emailField = e => {
        setEmail(e.target.value)
    }
    const passField = e => {
        setPass(e.target.value)
    }

    const whileSubmit = () => {
        const info = { email: email, pass: pass };
        setDataInput([info]);
    }


    return (
        <div className='main-div'>
          
                
                <form className='form-div' action='' onSubmit={whileSubmit}>
                <h1>Login</h1>
                    <input className='text-box' type='text' placeholder='Email' name='email' id='email' value={email} onChange={emailField} />
                    <input className='text-box' type='password' placeholder='Password' name='pass' id='pass' value={pass} onChange={passField} />



                    <Link className='button-div' to={"/TodoWrapper"}>Submit</Link>



                </form>

           
        </div>
    )

};


export default Loginpage;