import React from 'react'
import { Link } from 'react-router'
const Pagination = ({ onPageChange, currentPage, blogs, pageSize, totalPages }) => {
    // const totalPages = Math.ceil(blogs.length / pageSize)

    const renderPaginationIndex = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            // ex:length=5        1,2,3,4,5,6(starts from 1)
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <Link className='pagenum' onClick={() => onPageChange(pageNumber)}>{pageNumber}</Link>
            </li>
        ))
    }
    return (
       <ul className='pagination my-8 flex flex-wrap gap-4'>
            <li>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            </li>
            <div className='flex gap-1'>
                {renderPaginationIndex()}
            </div>
            <li>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </li>
        </ul>
    )
}

export default Pagination