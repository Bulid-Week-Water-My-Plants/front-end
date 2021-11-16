import React, { useState } from 'react';
import LoginForm from './Components/LoginForm'

function App() {

  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }

  const initialUser = {
    name: '',
    email: ''
  }


  const [user,setUser] = useState(initialUser);
  const [error,setError] = useState('');

  const submit = details => {
    console.log(details);
    if(details.email === adminUser.email && details.password===adminUser.password){
      console.log('Success!')
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log('Inputs Incorrect')
    }
  }

  
  const Logout = () => {
    console.log('Logout');
    setUser(initialUser);
  }

  return (
    <div className="App">
      {(user.email != '') ? ( 
        <div>
          <h2>Hello <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm 
        submit={submit} 
        error={error}
        />
      )}
    </div>
      
  );
}


export default App;
