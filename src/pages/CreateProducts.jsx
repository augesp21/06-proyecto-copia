import { useContext } from 'react'
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import axios from 'axios'
import logo from '../assets/logo.svg'

const CreateProducts = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const token = window.localStorage.getItem('token')
  const sendItem = (key, data) => {
    axios.post('https://ecomerce-master.herokuapp.com/api/v1/item', { headers: {"Authorization" : `JWT ${token}`}}, data)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data)
        navigate('/')
      }
    }).catch((error) => {
      console.log(error.message);
    })
  }

  // Comenzar a usar useForm y declarar los valores iniciales para evitar problemas en el renderizado de componentes controlados
  const { input, handleInputChange, handleSubmit } = useForm(sendItem, {
    isActive: true,
    product_name: "",
    description: "",
    price: '',
    category: "",
    brand: "",
    sku: "",
    image: ""
})

 return (
   <div className='d-flex flex-wrap justify-content-center'>
    <div className='d-flex flex-column justify-content-center'>
      <div className='p-1'>
      <h1 className='text-center'>Create Product</h1>
      </div>
      <div className='p-1'>
      {
        user.role === 'ADMIN'
          ? <h2 className='text-center'>Hola Admin</h2>
          : <h2 className='text-center'>Hola Customer</h2>
      }
      </div>

      {
        user.role === 'CUSTOMER' && <h4>Inicia sesión como administrador para crear productos</h4>
      }

      {
        user.role === 'ADMIN' && 
        <>
        <div className='p-1'>
        <h4 className='text-center'>Bienvenido seas Admin</h4>
        </div>
        <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className="rounded mx-auto d-block" src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please create a product</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='product_name'
            name='product_name'
            placeholder='Product'
            value={input.product_name}
            onChange={handleInputChange}
          />
          <label htmlFor='product_name'>What's the product name?</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='description'
            name='description'
            placeholder='Generic description'
            value={input.description}
            onChange={handleInputChange}
          />
          <label htmlFor='description'>What's the product description?</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='price'
            name='price'
            placeholder='$'
            value={input.price}
            onChange={handleInputChange}
          />
          <label htmlFor='price'>How much will cost?</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='category'
            name='category'
            value={input.category}
            onChange={handleInputChange}
          >
            <option value=''>Choose...</option>
            <option value='Kids'>Kids</option>
            <option value='Shoes'>Shoes</option>
            <option value='Computers'>Computers</option>
            <option value='Grocery'>Grocery</option>
            <option value='Automotive'>Automotive</option>
            <option value='Toys'>Toys</option>
            <option value='Tools'>Tools</option>
            <option value='Health'>Health</option>
            <option value='Sports'>Sports</option>
            <option value='Movies'>Movies</option>
            <option value='Electronics'>Electronics</option>
          </select>
          <label htmlFor='category'>Category</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='brand'
            name='brand'
            placeholder='brand'
            value={input.brand}
            onChange={handleInputChange}
          />
          <label htmlFor='brand'>Brand</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='sku'
            name='sku'
            placeholder='Password'
            value={input.sku}
            onChange={handleInputChange}
          />
          <label htmlFor='sku'>SKU</label>
        </div>

        <div className='form-floating'>
          <input
            type='url'
            className='form-control'
            id='image'
            name='image'
            placeholder='Password'
            value={input.image}
            onChange={handleInputChange}
          />
          <label htmlFor='image'>URL from the Image in JPG</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Submit</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
      </form>
    </main>
    </>
        
      }
    </div>
    </div>
  )
}

export default CreateProducts
