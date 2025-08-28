import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import Pagination from './Pagination'
import Category from './Category'
import SideBar from './SideBar'

const BlogComponent = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 //blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] = useState(null)

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`
            // filter by category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`
            }
            const response = await fetch(url)
            const data = await response.json()
            console.log(data);

            setBlogs(data)
        }
        fetchBlogs()
    }, [currentPage, pageSize, selectedCategory])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)
    }
    const totalPages = Math.ceil(blogs?.length / pageSize)
    return (
        <div>
            {/* category */}
            <div><Category onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory}activeCategory={activeCategory} /></div>
            {/* blogs */} 
            <div className='flex flex-col lg:flex-row items-start gap-12'>
                <BlogCard blogs={blogs} currentPage={currentPage}
                    selectedCategory={selectedCategory} pageSize={pageSize}
                />
                <div >
                    {/* sidebar components */}
                  <SideBar />  
                </div>
            </div>
            {/* pagination */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} totalPages={totalPages} pageSize={pageSize} />
            </div>
        </div>
    )
}

export default BlogComponent