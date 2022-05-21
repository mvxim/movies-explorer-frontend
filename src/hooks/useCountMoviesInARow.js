import { useEffect } from 'react';
import { SCREEN_SIZES } from '../utils/constants';

export const useCountMoviesInARow = (listElementRef, cardElementRef, onCount) => {
    const countMoviesInARow = () => {
        if (listElementRef.current && cardElementRef.current) {
            const screenWidth = listElementRef?.current.offsetWidth;
            const cardWidth = cardElementRef?.current.offsetWidth;
            
            let paddings;
            
            if (screenWidth > SCREEN_SIZES.DESKTOP) {
                paddings = 140;
            }
            if (screenWidth <= SCREEN_SIZES.DESKTOP && screenWidth > SCREEN_SIZES.TABLET) {
                paddings = 60;
            }
            if (screenWidth <= SCREEN_SIZES.TABLET && screenWidth > SCREEN_SIZES.MOBILE) {
                paddings = 20;
            }
            
            const approxCapacityOfOneRow = Math.floor((screenWidth - paddings) / cardWidth) || 2;
            onCount(approxCapacityOfOneRow);
        }
    };
    
    useEffect(() => {
        countMoviesInARow();
    }, []);
    
    useEffect(() => {
        
        function handleResize() {
            countMoviesInARow();
        }
        
        window.addEventListener('resize', () => {
            setTimeout(() => {
                handleResize();
            }, 500);
        });
        
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [ countMoviesInARow, listElementRef, cardElementRef ]);
};
