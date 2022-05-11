import React, { useMemo, useState } from 'react'

export const useFilter = ( movies, callback ) => {

    const [ isFiltering, setIsFiltering ] = useState( false )

    const filteredMovies = useMemo( () => {
        return movies.filter( callback )
    }, [ movies, callback ] )

    const filtrationResult = isFiltering ? filteredMovies : movies

    const handleFilter = ( event ) => {
        setIsFiltering( event.target.checked )
    }

    return { filtrationResult, isFiltering, handleFilter }
}
