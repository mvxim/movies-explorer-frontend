import { useEffect } from 'react'


export function useDisableBodyScroll(disable){
    useEffect(() => {
        const defaultBodyOverflow = 'auto'
        
        window.document.body.style.overflow = disable
            ? 'hidden'
            : defaultBodyOverflow
        
        return () => {
            window.document.body.style.overflow = defaultBodyOverflow
        }
    }, [disable])
}
