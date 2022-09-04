import { useState, createContext } from "react"

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase-config';

export const AuthContext = createContext()

export default function AuthProvider({children}) {
  const [loggedId, setLoggedId] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false);

  async function login(email, password) {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      setCurrentUser({id: user.uid, email})
      localStorage.setItem('auth_token', user.accessToken)
      setIsAuth(true);
      setTimeout(() => {
        navigate("/")
      }, 1000);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isAuth,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}