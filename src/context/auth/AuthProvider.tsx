"use client"
import { FC, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import Cookies from 'js-cookie';
import { login } from '@/actions/auth/login';
import { UserClass } from '@/interfaces/general';

interface Props {
  children: React.ReactNode;
}

export interface AuthState {
  isLoggedIn: boolean;
  user?: UserClass;
  token?: string
}

const Auth_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
  token: ''
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const data = await login(email, password);
      Cookies.set('token', data.access_token);
      dispatch({ type: 'Login', payload: data.user });
      return true;
    } catch (error) {
      console.log('Error en el logeo:', error);
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
