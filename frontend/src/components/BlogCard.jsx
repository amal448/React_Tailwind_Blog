import React from 'react'
import { Link } from 'react-router'

const BlogCard = ({ blogs,currentPage,selectedCategory,pageSize }) => {
    const filteredBlogs = blogs.
    filter((blogs)=>!selectedCategory || blogs.category ===selectedCategory)
    .slice((currentPage-1)*pageSize,currentPage*pageSize) //ex slice(0,12)
    console.log(filteredBlogs);
    
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
            {
                filteredBlogs.map((blog) =>(
                    
                    <Link to={'blogs/'+blog.id} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
                        <div>
                            <img src={blog.image} alt="" className='w-full' />
                        </div>
                        <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                        <p>{blog.author}</p>
                        <p>Published:{blog.published_date}</p>
                    </Link>
                    
                ))
            }
        </div>
    )
}

export default BlogCard