// import { useEffect, useState } from 'react';
// import UseGlobalError from './useGlobalError';
//
// export const useFetch = (callback) => {
//     const [ isLoading, setIsLoading ] = useState(false);
//     const [ error, setError ] = useState();
//
//     const {
//         globalError,
//         handleError
//     } = UseGlobalError();
//
//     const fetching = async (...args) => {
//         try {
//             setIsLoading(true);
//             return await callback(...args);
//         } catch (error) {
//             console.log('error happened', error);
//             setError(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };
//
//     useEffect(() => {
//         if (error) {
//             handleError(error);
//         }
//     }, [ error ]);
//
//     return [ fetching, isLoading, error ];
// };
