import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
    return (
        <div className='border w-[calc(100%-20px)] rounded-lg p-10'>
            <div className='w-72 mb-8 ml-auto'>

                <LazyLoad  threshold={0.95} width={288} >
                    <img src={chef.picture} alt="logo" className='object-contain rounded-2xl shadow-2xl' />
                </LazyLoad>
            </div>


            <h2 className='text-2xl font-extrabold my-2 shadow '>
                {chef.name}
            </h2>

            <p className='text-[#757575] text-xl font-bold mb-4'>Experience: {chef.experience} Years of experience</p>

            <p className='text-[#757575] text-xl font-bold mb-4'>Numbers of recipes: {chef.recipes}</p>


            <div className='border-2 border-blue-200 px-5 py-1 w-fit rounded mb-4 flex items-center'>
                <FcLike className='h-6 w-6 mr-2' />
                <p className='text-[#757575] text-xl font-bold'>{chef.likes} </p>
            </div>


            <Link to={`/chef-recipes/${chef.id}`}>
                <button className='text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2'>View Recipes</button>
            </Link>

        </div>
    );
};

export default ChefCard;