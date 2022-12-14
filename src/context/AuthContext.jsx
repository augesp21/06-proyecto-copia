import { createContext, useState, useEffect } from 'react'
import getPayload from '../utils/getPayload'

// #1 Crear el contexto
export const AuthContext = createContext()

// #2 Crear el Proveedor del Contexto
const AuthContextProvider = (props) => {
// Definir los estados globales
// #1 ¿El usuario inicio sesión correctamente?
  const [isAuth, setIsAuth] = useState(false)
  // #2 Información del Payload del JWT descifrado
  const [user, setUser] = useState(null)

  // Lógica que se ejecuta cuando se inicia una sesión
  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    const decoded = getPayload(token)
    setUser(decoded)
    setIsAuth(true)
  }

  // Lógica que se ejecuta cuando cierro la sesión
  const logoutUser = () => {
    window.localStorage.removeItem('token')
    setUser({})
    setIsAuth(false)
  }

  // Verificar en la carga de mi app si ya existe un token, y si es así lo cargo.
  useEffect(() => {
    const item = window.localStorage.getItem('token')
    if (item) {
      const decoded = getPayload(item)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, user, loginUser, logoutUser
    }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider