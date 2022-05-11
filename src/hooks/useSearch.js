import { useMemo, useState } from 'react'

export const useSearch = ( movies ) => {
    const [ searchQuery, setSearchQuery ] = useState( '' )
    const [ finalSearchQuery, setFinalSearchQuery ] = useState( '' )

    const memoizedSearchResults = useMemo( () => {
        return movies.filter( ( movie ) => ( movie.nameRU.toLowerCase().includes( finalSearchQuery.toLowerCase() ) ) )
    }, [ finalSearchQuery, movies ] )

    const handleControlledInputStateUpdate = ( value ) => {
        setSearchQuery( value )
    }

    const handleFinalSearchQuery = ( finalQuery ) => {
        setFinalSearchQuery( finalQuery )
    }

    return {
        searchQuery, memoizedSearchResults, handleControlledInputStateUpdate, handleFinalSearchQuery
    }
}
