import React, { useEffect, useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefRecipesCard from '../Card/ChefRecipesCard';

const ChefRecipes = () => {
    const {chef, recipes} = useLoaderData();
    const params = useParams()
    

    console.log(params);


    return (
        <>
            <div className='grid md:grid-cols-2 gap-10 '>

                <div>
                    <h1 className='md:text-6xl text-4xl font-bold text-gray-700 my-8 '>{chef.name}</h1>

                    <p className="md:text-xl text-xs text-gray-500">
                        {chef.description}
                    </p>

                    <p className='text-[#757575] text-xl font-bold my-4'>Experience: {chef.experience} Years of experience</p>

                    <p className='text-[#757575] text-xl font-bold mb-4'>Numbers of recipes: {chef.recipes} </p>


                    <div className='border-2 border-blue-200 px-5 py-1 w-fit rounded mb-4 flex items-center'>
                        <FcLike className='h-6 w-6 mr-2' />
                        <p className='text-[#757575] text-xl font-bold'>{chef.likes}</p>
                    </div>
                </div>
                <div className='h-[600px] mt-20'>
                    <img src={chef.picture} alt="img" className='h-3/4 rounded-xl' />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6 justify-items-center'>
                {
                    recipes.map((recipe, i)=> <ChefRecipesCard key={i} recipe={recipe}></ChefRecipesCard>)
                }
            </div>
        </>
    );
};

export default ChefRecipes;