import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const useGlobal = () => {
    return useContext(GlobalContext);
};
