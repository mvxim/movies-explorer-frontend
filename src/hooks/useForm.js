import { useCallback, useEffect, useState } from 'react'
import { useAuth } from './useAuth'

const useForm = () => {
    const [ values, setValues ] = useState({})
    const [ errorMessages, setErrorMessages ] = useState({})
    const [ isValid, setIsValid ] = useState(false)
    
    const { currentUser } = useAuth()
    
    const nameRegex = /[^[a-zа-яё -]+/i
    // Не знаю, как выполнить требование, чтобы валидация почты и на сервере, и на клиенте была одинаковой.
    // На сервере используется валидация JOI, а за использование сторонних библиотек на проекте с фронтом — минус балл.
    // Так что тут САМОЕ_МЕГА_ТОЧНОЕ_РЕГУЛЯРНОЕ—ВЫРАЖЕНИЕ_9000 ТОЧНОСТЬ 99.99%
    // Email regex that 99.99% WORKS → https://emailregex.com/
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
    
    const validateName = (value, currentName, event) => {
        if (value === currentName) {
            setErrorMessages({
                ...errorMessages,
                'name': ''
            })
            setIsValid(false)
        } else if (value.length === 0) {
            setErrorMessages({
                ...errorMessages,
                'name': 'Имя нужно указать'
            })
            setIsValid(false)
        } else if (value.length < 2) {
            setErrorMessages({
                ...errorMessages,
                'name': 'Имя не может быть короче 2-х символов'
            })
            setIsValid(false)
        } else if (value.length >= 30) {
            setErrorMessages({
                ...errorMessages,
                'name': 'Имя не может быть длиннее 30 символов'
            })
            setIsValid(false)
        } else if (nameRegex.test(value)) {
            setErrorMessages({
                ...errorMessages,
                'name': 'В имени могут быть только буквы, дефис и пробел'
            })
            setIsValid(false)
        } else {
            setErrorMessages({
                ...errorMessages,
                'name': ''
            })
            setIsValid(event.target.closest('form').checkValidity())
        }
    }
    
    const validatePassword = (value, event) => {
        if (value.length === 0) {
            setErrorMessages({
                ...errorMessages,
                'password': 'Пароль нужно указать'
            })
            setIsValid(false)
        } else if (value.length < 6) {
            setErrorMessages({
                ...errorMessages,
                'password': 'Пароль не может быть короче 6 символов'
            })
            setIsValid(false)
        } else {
            setErrorMessages({
                ...errorMessages,
                'password': ''
            })
            setIsValid(event.target.closest('form').checkValidity())
        }
    }
    
    const validateEmail = (value, currentEmail, event) => {
        if (value === currentEmail) {
            setErrorMessages({
                ...errorMessages,
                'email': ''
            })
            setIsValid(false)
        } else if (value.length === 0) {
            setErrorMessages({
                ...errorMessages,
                'email': 'Почту нужно указать'
            })
            setIsValid(false)
        } else if (!emailRegex.test(value)) {
            setErrorMessages({
                ...errorMessages,
                'email': 'Формат почты неправильный'
            })
            setIsValid(false)
        } else {
            setErrorMessages({
                ...errorMessages,
                'email': ''
            })
            setIsValid(event.target.closest('form').checkValidity())
        }
    }
    
    const validateValue = (inputName, value, event) => {
        if (inputName === 'name') {
            validateName(value, currentUser.name, event)
        } else if (inputName === 'email') {
            validateEmail(value, currentUser.email, event)
        } else if (inputName === 'password') {
            validatePassword(value, event)
        } else {
            setErrorMessages({
                ...errorMessages,
                [inputName]: event.target.validationMessage
            })
            
        }
    }
    
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        
        setValues({
            ...values,
            [name]: value,
        })
        
        validateValue(name, value, event)
    }
    
    useEffect(() => {
        if (values.name === currentUser.name || values.email === currentUser.email) {
            setIsValid(false)
        }
    }, [ values.name, values.email ])
    
    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues)
        setErrorMessages(newErrors)
        setIsValid(newIsValid)
    }, [ setValues, setErrorMessages, setIsValid ])
    
    
    return {
        values,
        errorMessages,
        setValues,
        handleChange,
        isValid,
        resetForm
    }
}

export default useForm
