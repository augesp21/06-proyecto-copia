/* import { Link } from 'react-router-dom' */
import { useItemsContext } from '../context/ItemsContext'

const Pagination = () => {

  const context = useItemsContext()

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {/* <button 
          className="page-item"
          onClick={context.nextPage}
          >
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo; Anterior</span>
          </a>
        </button>
        <button 
          className="page-item"
          onClick={context.prevPage}
          >
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">Siguiente &raquo;</span>
          </a>
        </button> */}
      </ul>
    </nav>
  )
}

export default Pagination