import React from 'react';

export default function PlantForm(props){
    const {values, change, submit, errors} = props 

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className= 'form-group inputs'>
                <h2>Input Your Plants!</h2>
                
                {/* Text Inputs */}
                <label> Plant Nick Name: 
                    <input id='name-input'
                        value={values.name}
                        name='name'
                        type='text'
                        onChange={onChange}
                        placeholder='Please Input Plant Nick Name'
                    />
                </label>
                <label> Plant Species:
                    <input id='species-input'
                        value={values.species}
                        name='species'
                        type='text'
                        onChange={onChange}
                        placeholder='Please Input Plant Species'
                    />
                </label>
                {/* CheckBox - Does the plant require strict vs not strict watering schedule. i.e. cactus (doesnt need much water) vs other normal plant */}
                <label> Does Plant Require Strict Watering Schedule? 
                    <input 
                        type='checkbox'
                        name='water'
                        onChange={onChange}
                        checked={values.water}
                    />
                </label>
                <button onSubmit={submit}>Submit Plant!</button>
            </div>
        </form>
    )
}