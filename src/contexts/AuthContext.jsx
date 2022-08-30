import { useState, createContext } from "react"

export const AuthContext = createContext()

export default function AuthProvider({children}) {

  const [currentUser, setCurrentUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isAuth,
        setIsAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}