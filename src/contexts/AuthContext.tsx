import React, { createContext, useContext, useMemo, useState } from 'react'
import { User } from '../types/User'

export interface IAuthContext {
  user: User,
  setUser: (user: User) => void
}

const AuthContext = createContext<IAuthContext | null>(null)

export function AuthContextProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User>({ id: 'dasd-123-43234-534' })

  const value = useMemo(() => ({ user, setUser: (user: User) => { setUser(user) } }), [user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  return context
}