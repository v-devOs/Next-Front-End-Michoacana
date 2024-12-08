import { UserClass } from '@/interfaces/general'
import { createContext } from 'react'

interface ContextProps {
  isLoggedIn: boolean
  user?: UserClass
  loginUser: (email: string, password: string) => Promise<boolean>
}

export const AuthContext = createContext({} as ContextProps)