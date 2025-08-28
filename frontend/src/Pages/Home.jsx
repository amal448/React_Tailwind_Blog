import React from 'react'
import Banner from '../components/Banner'
import BlogComponent from '../components/BlogComponent'
const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <div className='max-w-7xl mx-auto'>
      <BlogComponent />
      </div>
    </div>
  )
}

export default Home