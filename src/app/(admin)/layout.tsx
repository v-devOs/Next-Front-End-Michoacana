import { AuthProvider } from "@/context/auth/AuthProvider"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const LayoutAuth = ({ children }: Props) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default LayoutAuth
