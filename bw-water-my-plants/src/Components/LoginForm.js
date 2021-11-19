import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function LoginForm ({submit, error}) {
    const initialDetails = {username: '', password: ''}
    const [details, setDetails] = useState(initialDetails)
    let navigate = useNavigate();

    // declare onsubmit function
    const onSubmit = event => {
        event.preventDefault();
        submit(details);
        setDetails(initialDetails)
        navigate("/")
    }
    //declare onChange 
    const onChange = event =>{
        const {name,value} = event.target
        setDetails({...details, [name]:value});
      }
    


    return (
        <form onSubmit={onSubmit}>
            <div className = 'Logincontainer'>
                <h2>Login</h2>
                <div className = 'form'>
                    <label>Username:
                        <input 
                        type='text'
                        name='username'
                        value={initialDetails.username}
                        onChange={onChange}
                        />
                    </label>
                </div>
                <div className = 'form'>
                    <label>Password:
                        <input 
                        type='password'
                        name='password'
                        value={initialDetails.password}
                        onChange={onChange}
                        />
                    </label>
                </div>
                <div className='buttoncontainer'>
                    <input type='submit' value='Login'/>
                </div>
            </div>
        </form>
    )
}
