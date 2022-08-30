import React from 'react'
import { useItemsContext } from '../context/ItemsContext';


const  Pagination = ({ itemsPerPage, totalItems }) => {
  const pageNumbers = [];

  const context = useItemsContext()

  for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
    pageNumbers.push(i);
  }
  
  return (
    <nav>
        <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;