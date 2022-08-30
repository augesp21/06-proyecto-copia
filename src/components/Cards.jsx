import { useItemsContext } from '../context/ItemsContext'
import Card from './Card'

const Cards = () => {

  const context = useItemsContext()

  return (
    <div className='d-flex flex-wrap justify-content-evenly'>
       {context.loading
        ? <div className='alert alert-info'>
            <h1>Cargando...</h1>
        </div> 
        : context.items.filter(item => {
          if (context.search === '') {
            return item 
          } else if (item.product_name.toLowerCase().includes(context.search.toLowerCase())) {
            return item 
          }
          return null
        }).map((item, id) => (
        <div  
          key={item.id}
          className='row col-md-3'
        >
          <Card 
          item={item} 
          
          />
        </div>
      ))}
    </div>
  )
}

export default Cards