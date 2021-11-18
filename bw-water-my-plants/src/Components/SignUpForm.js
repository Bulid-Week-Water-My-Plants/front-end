import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup.string()
        .required('Must include a name'),
    email: Yup.string()
        .email('Must be a valid email address.')
        .required('Must include an email address.'),
    pwd: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters long.'),
    tos: Yup.bool()
        .oneOf([true], 'You must accept Terms of Service')
        .required('You must accept Terms of Service')
})

function SignUpForm (props) {

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        pwd: '',
        tos: ''
    })
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const setFormErrors = (name, value) => {
        Yup.reach(formSchema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch( err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const handleChange = event => {
        const {name, value, type, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse);
        props.change(name, valueToUse);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    useEffect( () => {
        formSchema.isValid(props.form)
        .then(valid => {
            setButtonDisabled(!valid)
        })
    }, [props.form])

    return(
        <div className = "SignupContainer">
            <h2>Sign Up</h2>
            <div>
                <div id='errName'>{errors.name}</div><div id='errEmail'>{errors.email}</div><div id='errPwd'>{errors.pwd}</div><div id='errTos'>{errors.tos}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Name: 
                    <input 
                    type='text'
                    name='name'
                    value={props.form.name}
                    onChange={event => handleChange(event)}
                    />

                </label>
                <br/>
                <label>Email: 
                    <input 
                    type='text'
                    name='email'
                    value={props.form.email}
                    onChange={event => handleChange(event)}
                    />
                </label>
                <br/>
                <label>Password: 
                    <input 
                    type='password'
                    name='pwd'
                    value={props.form.pwd}
                    onChange={event => handleChange(event)}
                    />
                </label>
                <br/>
                <label>Terms of Service 
                <input 
                    type='checkbox'
                    name='tos'
                    checked={props.form.tos}
                    onChange={event => handleChange(event)}
                    />
                </label>
                <br/>
                <button id='submitBtn' type='submit' disabled={buttonDisabled}>Submit</button>

            </form>
        </div>
    );
}

export default SignUpForm;