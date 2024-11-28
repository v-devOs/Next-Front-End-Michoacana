import { Employee } from '@/interfaces/admin'
import { User } from '@/interfaces/general'
import { createContext } from 'react'

interface ContextProps {
  isLoggedIn: boolean
  user?: User
  employee?: Employee
  loginUser: (email: string, password: string) => Promise<boolean>
}

export const AuthContext = createContext({} as ContextProps)