//
// export const useSearch = ( MOVIES ) => {
//     const [ searchQuery, setSearchQuery ] = useState( '' )
//     const [ finalSearchQuery, setFinalSearchQuery ] = useState( '' )
//
//     const memoizedSearchResults = useMemo( () => {
//         return MOVIES.filter( ( movie ) => ( movie.nameRU.toLowerCase().includes( finalSearchQuery.toLowerCase() ) ) )
//     }, [ finalSearchQuery, MOVIES ] )
//
//     const handleControlledInputStateUpdate = ( value ) => {
//         setSearchQuery( value )
//     }
//
//     const handleFinalSearchQuery = ( finalQuery ) => {
//         setFinalSearchQuery( finalQuery )
//     }
//
//     return {
//         searchQuery, memoizedSearchResults, handleControlledInputStateUpdate, handleFinalSearchQuery
//     }
// }
