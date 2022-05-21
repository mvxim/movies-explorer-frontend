import { useEffect } from 'react';
import { SCREEN_SIZES } from '../utils/constants';

export const useCountMoviesInARow = (listElementRef, onCount) => {
    const countMoviesInARow = () => {
        if (listElementRef.current) {
            const screenWidth = listElementRef?.current.offsetWidth;
            const cardWidth = listElementRef?.current.children[0].offsetWidth;
            
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
            
            const approxCapacityOfOneRow = Math.floor((screenWidth - paddings) / cardWidth) || 1;
            onCount(approxCapacityOfOneRow);
        }
    };
    
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
    }, [ countMoviesInARow, listElementRef ]);
};
