//rafc
import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    //Manejar el enter
    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ){

            //si el inputValue sacando los espacios es mayor que 2
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }

        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type  ='text'
                value ={ inputValue }
                onChange = { handleInputChange }
                placeholder="Busca tus gifs"
            />
        </form>
    )
}

//PropTypes = para obligar que se envíe una categoría (necesita que se envie una funcion)

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
