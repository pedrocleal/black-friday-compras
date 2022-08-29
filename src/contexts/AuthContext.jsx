import { useState, createContext } from "react"

export const AuthContext = createContext()

export default function AuthProvider({children}) {

  const [currentUser, setCurrentUser] = useState(null)
  const isAuth = true;

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}