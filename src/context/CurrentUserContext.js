import { createContext } from 'react'

export const CurrentUserContext = createContext( {
    name: '',
    email: '',
    id: ''
} )
