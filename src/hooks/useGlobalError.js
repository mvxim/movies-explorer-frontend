import { useState } from 'react';
import { ERRORS } from '../utils/constants';

const useGlobalError = () => {
    const [ globalError, setGlobalError ] = useState('');
    
    const handleError = (error) => {
        if (error) {
            switch (error.status) {
                case 400:
                    setGlobalError(ERRORS[400]);
                    break;
                case 401:
                    setGlobalError(ERRORS[401]);
                    break;
                case 403:
                    setGlobalError(ERRORS[403]);
                    break;
                case 404:
                    setGlobalError(ERRORS[404]);
                    break;
                case 409:
                    setGlobalError(ERRORS[409]);
                    break;
                case 500:
                    setGlobalError(ERRORS[500]);
                    break;
                default:
                    setGlobalError(ERRORS[500]);
                    break;
            }
        } else {
            setGlobalError('');
        }
    };
    
    return {
        globalError,
        handleError
    };
    
};
export default useGlobalError;
