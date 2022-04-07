import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { paths } from '../../routes/paths';
import { routerConfig } from '../../routes/routesConfig';
import { useNavigate, useRoutes } from 'react-router-dom';
import styles from "./App.module.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const routing = useRoutes(routerConfig)
  const navigate = useNavigate();
  
  const onLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    !isLoggedIn
        ? navigate(paths.main)
        : navigate(paths.signIn)
  }
  
  return (
      <AuthContext.Provider value={isLoggedIn}>
        <div className={ styles.page }>
          {routing}
        </div>
        <button onClick={onLoginClick}>
          {isLoggedIn ? 'Разлогиниться' : 'Залогиниться'}
        </button>
      </AuthContext.Provider>
  );
}

export default App;
