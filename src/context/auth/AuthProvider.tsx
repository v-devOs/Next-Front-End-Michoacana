"use client"
import { FC, useEffect, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import Cookies from 'js-cookie';

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    user: undefined,
    employee: undefined
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // TODO: Hacer petición para validar token y obtener información del usuario
      dispatch({ type: 'Login' });
    }
  }, []);

  const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      // TODO: Implementar la petición de login al backend
      Cookies.set('token', 'dummy-token');
      dispatch({ type: 'Login' });
      return true;
    } catch (error) {
      console.log('Error en el logeo' + error)
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      loginUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};
