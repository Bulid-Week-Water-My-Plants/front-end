import logo from './logo.svg';
import React, {useState} from 'react'
import {Route, Routes} from 'react-router-dom';
import SignUpForm from './Components/SignUpForm';
import LoginForm from './Components/LoginForm'
import PlantForm from './Components/PlantForm';
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import axios from 'axios';
import schema from './validation/formSchema';
import { ValidationError } from 'yup';
import * as yup from 'yup';

//Delcaring const for PlantForm.js
const initialFormValues = {
  //Text inputs (name and species) for Plants in PlantForm.js
  name:'',
  species:'',
  //checkbox for watering instructions 
  water: false
}

const initialFormErrors = {
  name:'',
  species: '',
  water: ''
}

const initialPlant = []
//::::::

function App() {
  //::::States for SignUpForm
  const freshForm = {username:'', email:'', phone:'', pwd:'', tos: false}
  const [users, setUsers] = useState([]) // <-- This can be rewritten to be a list of plants
  const [form, setForm] = useState(freshForm)

  //::::User Sign Up 
  const onSignUpSubmit = () => {
    const newUser = {username: form.username.trim(), email: form.email.trim(), phone: form.phone.trim(), pwd: form.pwd, tos: form.tos}
    axios.post('https://reqres.in/api/users'/* <-- To be replaced with backend api */, newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setForm(freshForm) })
      .catch(err => console.log(err))
    
  }
  //::::Form state Change for SignUp submit button
  const onSignUpChange = (name, value) => {
    setForm({...form, [name]: value})
  }


  //::::Login Variables/States/Functions
  const adminUser = {
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin123'
  }

  const initialUser = {
    username: '',
    email: ''
  }


  const [user,setUser] = useState(initialUser);
  const [error,setError] = useState('');

  const loginSubmit = details => {
    if(details.email === adminUser.email && details.password===adminUser.password){
      console.log('Success!')
      setUser({
        name: adminUser.name, //THIS IS TEMPORARY WHILE USER BACKEND IS BEING SETUP
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

  //::::States for PlantForm
  const [plant, setPlant] = useState(initialPlant)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)


  ////Below here will be onChange and onSubmit functions for PlantForm.js
  //::::::
  //Input Change for props in PlantForm.js
  const inputChange = (name,value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]:value
    })
  }

  //validation 
  const validate = (name, value) => {
    yup.reach(schema,name).validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  //Post Form to backend ::: Uncomment code below when we have API

  const postNewPlant = newPlant => {
    axios.post(`https://reqres.in/api/users`, newPlant)
      .then(res => {
        setPlant([res.data, ...plant])
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  //submit form for props in PlantForm.js
  const formSubmit = () => {
    const newPlant = {
      name: formValues.name.trim(),
      species: formValues.species.trim(),
      water: ['water'].filter(water => !!formValues[water])
    }
    postNewPlant(newPlant);
  }

/* 
  ################### REACT JSX #########################
*/

  return (
    <div className="App">
      <NavBar user={user} logout={Logout}/>
      <Routes>

        <Route path='/' element={
          <Home user={user} plant={plant}/>} 
        /> 

        <Route path='/login' element={
          <LoginForm 
            submit={loginSubmit} 
            error={error}
          />} 
        />
        
        <Route path='/signup' element={ 
          <SignUpForm
            form={form}
            submit={onSignUpSubmit}
            change={onSignUpChange}      
            />} 
        />

        <Route path='/addplant' element={
          <PlantForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            /> 
          } 
        />

        <Route path='/profile' element={
          <Profile user={user}/>
          }
        />
      </Routes>
      {/* This code below is a map to return the plant cards */}
      
    </div>   
  );
}

export default App;
