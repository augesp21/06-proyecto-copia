import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios';
// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir LA MISMA información entre diferentes niveles de componentes.

// Para usar CONTEXT necesitamos seguir una serie de pasos:

// #1 Creación del Contexto Vacio
// const SongContext = React.createContext()
export const EcommerceContext = createContext()

// #2 Creación del Proveedor del Contexto
// Es decir, maneja de donde se obtiene y como se pasa la información
function ItemsProvider (props) {
  const [items, setItems] = useState([]) // data de la API.
  const [loading, setLoading] = useState(true) // Nos indica cuando los datos esten disponibles.
  const [selectedItems, setSelectedItems] = useState({}) // Nos dira que canción esta seleccionada
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(16)

  const getItems = async() => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
    console.log(res);
    setItems(res.data.slice(0, 20))
  }

  useEffect(() => {
    getItems()
    setLoading(false)
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

  // Tenemos que indicar al Provider, que datos debe proveer. Estos datos son públicos para todos los componentes
  const value = {
    items,
    selectedItems,
    setSelectedItems,
    loading,
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    currentItems
  }

  // Siempre se llamaba value el prop del Provider con la data.
  // value es un objeto que indica que datos son globales.
  return (
    <EcommerceContext.Provider value={value} {...props} />
  )
}

// #3 Consumidor del contexto
// Brinda el acceso a la data a los componentes.

const useItemsContext = () => {
  const context = useContext(EcommerceContext)
  return context
}

// #4 Exportar las funciones del Provider y el Consumir
// para que puedan ser invocadas en nuestros componentes.
export {
  ItemsProvider,
  useItemsContext
}
