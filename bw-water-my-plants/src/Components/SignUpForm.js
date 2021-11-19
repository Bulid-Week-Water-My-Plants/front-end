import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "Username must be at least 2 characters long")
        .required('Must include a username'),
    email: Yup.string()
        .email('Must be a valid email address.')
        .required('Must include an email address.'),
    phone: Yup.string()
        .matches(phoneRegExp, "Must be a valid phone number"),
    pwd: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters long.'),
    tos: Yup.bool()
        .oneOf([true], 'You must accept Terms of Service')
        .required('You must accept Terms of Service')
})

function SignUpForm (props) {

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        phone: '',
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
            <form onSubmit={handleSubmit}>
                <div id='errUsername'>{errors.username}</div>
                <label>Username: 
                    <input 
                    type='text'
                    name='username'
                    value={props.form.name}
                    onChange={event => handleChange(event)}
                    />

                </label>
                <br/>
                <div id='errEmail'>{errors.email}</div>
                <label>Email: 
                    <input 
                    type='text'
                    name='email'
                    value={props.form.email}
                    onChange={event => handleChange(event)}
                    />
                </label>
                <br/>
                <div id='errPhone'>{errors.phone}</div>
                <label>Phone Number: 
                    <input 
                    type='text'
                    name='phone'
                    value={props.form.phone}
                    onChange={event => handleChange(event)}
                    />
                </label>
                <br/>
                <div id='errPwd'>{errors.pwd}</div>
                <label>Password: 
                    <input 
                    type='password'
                    name='pwd'
                    value={props.form.pwd}
                    onChange={event => handleChange(event)}
                    />
                </label>
                <br/>
                <div id='errTos'>{errors.tos}</div>
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