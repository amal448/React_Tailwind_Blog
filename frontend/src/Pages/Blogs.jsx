import React from 'react'
import BlogComponent from '../components/BlogComponent'

const Blogs = () => {
  return (
    <div>
      <div className='py-40 px-4 text-center text-white bg-black'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '> Blog Page</h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <BlogComponent />
      </div>
    </div>
  )
}

export default Blogs