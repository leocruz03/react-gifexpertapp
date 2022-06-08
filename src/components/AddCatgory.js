import React,{ useState } from 'react'
import propTypes from 'prop-types';

const AddCatgory = ( { setCategories } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('');

        if (inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type='text' 
                name='' 
                value={ inputValue }
                onChange={ handleInputChange  } 
            />
        </form>
    )
}

export default AddCatgory

AddCatgory.propTypes = {
    setCategories: propTypes.func.isRequired
}