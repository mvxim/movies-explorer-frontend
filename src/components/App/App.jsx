import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { routerConfig } from '../../routes/routesConfig';
import styles from './App.module.css';

function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    
    const routing = useRoutes(routerConfig);
    
    
    return (
        <AuthContext.Provider value={ isLoggedIn }>
            <div className={ styles.page }>
                { routing }
            </div>
        </AuthContext.Provider>
    );
}

export default App;
