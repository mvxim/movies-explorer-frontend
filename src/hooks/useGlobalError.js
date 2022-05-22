import { useState } from 'react';
import { ERRORS } from '../utils/constants';

const useGlobalError = () => {
    const [ globalError, setGlobalError ] = useState({
        code: 0,
        message: ''
    });
    
    const handleError = (error) => {
        if (error) {
            switch (error.status) {
                case 400:
                    setGlobalError({
                        code: error.status,
                        message: ERRORS[400]
                    });
                    break;
                case 401:
                    setGlobalError({
                        code: error.status,
                        message: ERRORS[401]
                    });
                    break;
                case 403:
                    setGlobalError({
                        code: error.status,
                        message: ERRORS[403]
                    });
                    break;
                case 404:
                    setGlobalError({
                        code: error.status,
                        message: ERRORS[404]
                    });
                    break;
                case 409:
                    setGlobalError({
                        code: error.status,
                        message: ERRORS[409]
                    });
                    break;
                default:
                    setGlobalError({
                        code: error.status || 500,
                        message: ERRORS[500]
                    });
                    break;
            }
        } else {
            setGlobalError({
                code: 0,
                message: ''
            });
        }
    };
    
    return {
        globalError,
        setGlobalError,
        handleError
    };
    
};
export default useGlobalError;
