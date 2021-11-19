import React, {useState, useEffect} from "react";
import * as Yup from 'yup';
import axios from "axios";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = Yup.object().shape({
    phone: Yup.string()
        .nullable()
        .notRequired()
        .when('phone', {
            is: (value) => value?.length,
            then: (rule) => rule.matches(phoneRegExp, "Must be a valid phone number"),
        }),
        
    pwd: Yup.string()
        .nullable()
        .notRequired()
        .when('pwd', {
            is: (value) => value?.length,
            then: (rule) => rule.min(8, 'New password must be at least 8 characters long.'),
        }),
        
},  [
        ['phone', 'phone'], ['pwd', 'pwd']
    ]
)



const Profile = ({user}) => {
    const [editForm, setEditForm] = useState({phone:'', pwd:''})
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [errors, setErrors] = useState({
        phone: '',
        pwd: '',
    })
    
    const setFormErrors = (name, value) => {
        Yup.reach(formSchema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch( err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const onFormChange = (event) => {
        const {name, value} = event.target
        setEditForm({...editForm, [name]: value})
        setFormErrors(name, value)
      }

    const handleSubmit = event => {
        const editedUser = {...user, 
            phone: editForm.phone ? editForm.phone.trim() : user.phone,
            pwd: editForm.pwd ? editForm.pwd : user.pwd }
        event.preventDefault();
        axios.put('https://reqres.in/api/users', editedUser)
            .then(res => 
                setEditForm({phone:'', pwd:''}))
            .catch(err => console.error(err))
    }

    useEffect( () => {
        if(!editForm.phone && !editForm.pwd){
            setButtonDisabled(true)
        }
        else{
           formSchema.isValid(editForm)
            .then(valid => {
                setButtonDisabled(!valid)
            }) 
        }
        
    }, [editForm])

    return(
        <div>
            <div>
                <h2>My Profile</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phone}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Edit your profile details below:</h3>
                <div id='errPhone'>{errors.phone}</div>
                <label>Phone Number: 
                    <input 
                    type='text'
                    name='phone'
                    value={editForm.phone}
                    onChange={event => onFormChange(event)}
                    />
                </label>
                <br/>
                <label>Password: 
                    <input 
                    type='password'
                    name='pwd'
                    value={editForm.pwd}
                    onChange={event => onFormChange(event)}
                    />
                </label>
                <br/>
                <button id='submitBtn' type='submit' disabled={buttonDisabled}>Submit</button>
            </form>
        </div>
    )
}

export default Profile