import { createContext, useContext, useEffect, useState } from 'react'
import { authServices } from '../services/auth'

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string) => {
    await authServices.login(email, password)
    const user = await authServices.me()
    setUser(user)
  }

  const register = async (name: string, email: string, password: string) => {
    await authServices.register(name, email, password)
  }

  const logout = () => {
    authServices.logout()
    setUser(null)
  }

  useEffect(() => {
    const restore = async () => {
      const verified = localStorage.getItem('token');
      if(verified){
        const user = await authServices.me();
        setUser(user)
      }
    }
    restore()
  },  []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
