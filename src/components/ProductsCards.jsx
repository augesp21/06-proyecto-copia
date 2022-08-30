import { useItemsContext } from '../context/ItemsContext'

const ProductsCards = () => {
  const context = useItemsContext()

  return (
    <>
      {context.selectedItems.product_name
        ? <div className='d-flex flex-wrap justify-content-center' >
          <div className="card mb-3" style={{ width: '600px' }} >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={context.selectedItems.image} className="img-fluid rounded-start" alt="imagen-del-producto" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{context.selectedItems.product_name}</h5>
                  <p className="card-text">{context.selectedItems.description}</p>
                  <p className="card-text">Clasificacion: {context.selectedItems.category}</p>
                  <p className="card-text"><small className="text-muted">Precio: {context.selectedItems.price}</small></p>
                  <Link
                    className="btn btn-outline-secondary rounded-0"
                  >
                    Agregar al Carrito
                  </Link>  
                </div>
              </div>
            </div>
          </div>
        </div>
        : <div className='d-flex flex-wrap justify-content-center'>
          <h2>Cargando...</h2>
        </div>}

    </>

  )
}

export default ProductsCards