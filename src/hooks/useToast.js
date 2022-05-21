import { useState } from 'react';

const useToast = () => {
    const [ toasts, setToasts ] = useState([]);
    
    function generateRandomInternalId() {
        return Math.random() * 100500100500;
    }
    
    const generateNotification = (title, details) => {
        setToasts((prevState) => {
            return [ ...prevState, {
                id: generateRandomInternalId(),
                type: 'success',
                title: title,
                details: details
            } ];
        });
    };
    
    const generateError = (details) => {
        console.log('Generating error toast → ', details);
        setToasts((prevState) => {
            return [ ...prevState, {
                id: generateRandomInternalId(),
                type: 'error',
                title: 'Ошибка 😔',
                details: details
            } ];
        });
    };
    
    return {
        toasts,
        generateNotification,
        generateError
    };
};
export default useToast;
