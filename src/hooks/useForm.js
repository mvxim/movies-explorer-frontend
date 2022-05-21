import { useCallback, useState } from 'react';

const useForm = () => {
    const [ values, setValues ] = useState({});
    const [ errorMessages, setErrorMessages ] = useState({});
    const [ isValid, setIsValid ] = useState(false);
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'name') {
            setValues({
                ...values,
                [name]: value.replace(/[^а-яА-ЯёЁa-zA-Z -]/gi, '')
            });
        } else {
            setValues({
                ...values,
                [name]: value,
            });
        }
        
        
        setErrorMessages({
            ...errorMessages,
            [name]: event.target.validationMessage
        });
        
        setIsValid(event.target.closest('form').checkValidity());
    };
    
    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrorMessages(newErrors);
        setIsValid(newIsValid);
    }, [ setValues, setErrorMessages, setIsValid ]);
    
    
    return {
        values,
        errorMessages,
        setValues,
        handleChange,
        isValid,
        resetForm
    };
};

export default useForm;
