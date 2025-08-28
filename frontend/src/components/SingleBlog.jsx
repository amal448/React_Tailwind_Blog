import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router'
import SideBar from './SideBar';

const SingleBlog = () => {
    const data = useLoaderData()
    console.log(data);
    const { title, image, category, author, published_date,content, reading_time } = data[0]

    return (
        <>
        <div className='py-40 px-4 text-center text-white bg-black'>
            <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '> Single Blog Page</h2>
        </div>

        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} className='w-full mx-auto rounded'alt="" />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>
                {author}| {published_date}
                </p>
                <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>
                {reading_time}
                </p>
                <p className='text-base text-gray-500 mb-6'>{content}</p>
                <div className='text-base text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum, quaerat cumque nobis minima voluptatibus quis eius eveniet cupiditate similique ducimus hic amet necessitatibus perferendis sapiente exercitationem, odit, assumenda numquam.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum, quaerat cumque nobis minima voluptatibus quis eius eveniet cupiditate similique ducimus hic amet necessitatibus perferendis sapiente exercitationem, odit, assumenda numquam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum, quaerat cumque nobis minima voluptatibus quis eius eveniet cupiditate similique ducimus hic amet necessitatibus perferendis sapiente exercitationem, odit, assumenda numquam.</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum, quaerat cumque nobis minima voluptatibus quis eius eveniet cupiditate similique ducimus hic amet necessitatibus perferendis sapiente exercitationem, odit, assumenda numquam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum, quaerat cumque nobis minima voluptatibus quis eius eveniet cupiditate similique ducimus hic amet necessitatibus perferendis sapiente exercitationem, odit, assumenda numquam.</p>
                </div>
            </div>
            <div>
                <SideBar />
            </div>
        </div>
        <div>

        </div>
        </> 

    )
}

export default SingleBlog