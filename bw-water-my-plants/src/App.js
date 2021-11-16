import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import SignUpForm from './Components/SignUpForm';
import PlantForm from './Components/PlantForm';
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

function App() {
  //States for Login
  const freshForm = {name:'', email:'', pwd:'', tos: false}
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(freshForm)

  //States for PlantForm
  const [plant, setPlant] = useState(initialPlant)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  //:::: 
  const onSubmit = () => {
    const newUser = {name: form.name.trim(), email: form.email.trim(), pwd: form.pwd, tos: form.tos}
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setForm(freshForm) })
      .catch(err => console.log(err))
    
  }

  const onChange = (name, value) => {
    setForm({...form, [name]: value})
  }
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

  //submit form for props in PlantForm.js

  const formSubmit = () => {
    const newPlant = {
      name: formValues.name.trim(),
      species: formValues.species.trim(),
      water: ['water'].filter(water => !!formValues[water])
    }
    // postNewPlant(newPlant);
  }


  return (
    <div className="App">
      <SignUpForm
        form={form}
        submit={onSubmit}
        change={onChange}      
      />
      <br/>
      <PlantForm 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      errors={formErrors}
      />
      <h2>User List</h2>
      {users.map(user => {return(
        <div key={Math.random()}>
          <pre>{user.name}</pre>
        </div>
      )})}
    </div>
  );
}

export default App;
