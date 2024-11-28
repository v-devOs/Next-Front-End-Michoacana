import { User } from '@/interfaces/general'
import { createContext } from 'react'

interface ContextProps {
  isLoggedIn: boolean
  user?: User
  loginUser: (email: string, password: string) => Promise<boolean>
}

export const AuthContext = createContext({} as ContextProps)