import { useContext } from 'react'
import { AuthContext } from "../context/AuthContext"
import { Link } from 'react-router-dom'
import { useItemsContext } from '../context/ItemsContext'
import './Navbar.css'


const NavBar = () => {
  const { isAuth } = useContext(AuthContext)
  const context = useItemsContext()

  const handleSearch = (e) => {
    context.setSearch(e.target.value)
  }

  return (
    
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
          <img src="./src/assets/logo.png" className='ecommerce img-fluid rounded float-start' alt="logo" />
     
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-center mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link link-dark active h3" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-dark h4" to="/createProducts">Create <br></br> Products</Link>
            </li>
            <div className="nav-link link-dark active h3" >
              {isAuth
              ? (
                <Link to='/logout'>
                <button type='button' className='btn btn-outline-primary me-2'>Logout</button>
              </Link>
              ) 
              : (
                <>
                <Link to="/login" >
                <button className="nav-link link-dark active h3">Login</button>
                </Link>
                <Link to="/signup" >
                <button className="nav-link link-dark active h3">Sign-up</button>
                </Link>   
                </>             
              )
            }

              
            </div>
          </ul>
          <form className="d-flex" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              onChange={handleSearch} 
              placeholder="Search" 
              aria-label="Search" 
              />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

     