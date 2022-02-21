import React from "react"
import _ from "lodash"
import PropTypes from 'prop-types';

const Pagination = ({ itemCount, pageSize, onPageChange, carrentPage }) => {
  const pageCount = Math.ceil(itemCount / pageSize)
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={"page-item" + (page === carrentPage ? " active" : "")}
            key={"page_" + page}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired, 
  onPageChange: PropTypes.func.isRequired, 
  carrentPage: PropTypes.number.isRequired
}
export default Pagination
