import React, { useState } from 'react';


export default function LoginForm ({submit, error}) {
    const initalDetails = {email: '', password: ''}
    const [details, setDetails] = useState(initalDetails)


    // declare onsubmit function
    const onSubmit = event => {
        event.preventDefault();
        submit(details);
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
                    <label>Email:
                        <input 
                        type='email'
                        name='email'
                        onChange={onChange}
                        />
                    </label>
                </div>
                <div className = 'form'>
                    <label>Password:
                        <input 
                        type='password'
                        name='password'
                        onChange={onChange}
                        />
                    </label>
                </div>
                <div className ="buttoncontainer">
                <input type='submit' value='Click here to Login'/>
                </div>
            </div>
        </form>
    )
}
