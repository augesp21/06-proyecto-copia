import { useContext } from 'react'
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import axios from 'axios'
import '../assets/css/form.css'
import logo from '../assets/logo.svg'

const Login = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const sendData = (data) => {
    // Hago la petición a la API
    axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', data)
      .then((response) => {
        if (response.status === 200) {
          // Cuando el usuario inicia sesión correctamente
          console.log(response.data)
          // Guardar el token en el localStorage del Navegador
          // Este token permanece aún si el navegador se cierra y vuelve a abrir.
          // window.localStorage.setItem('token', response.data.token)
          loginUser(response.data.token)
          navigate('/')
        }
      }).catch((error) => {
        console.log(error.message)
      })
  }

  // Comenzar a usar useForm y declarar los valores iniciales para evitar problemas en el renderizado de componentes controlados
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4 rounded mx-auto d-block' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal text-center'>Please sign in</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
      </form>
    </main>
  )
}

export default Login