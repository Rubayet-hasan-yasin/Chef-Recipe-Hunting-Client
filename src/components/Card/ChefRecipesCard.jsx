import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { toast } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';

const ChefRecipesCard = ({ recipe }) => {
    const [readmore, setReadMore] = useState(false);
    const { image_url, recipe_name, ingredients, cooking_method, rating } = recipe;



    const handledisable = e => {
        e.target.disabled = true
        toast.success('The recipe is your favorite')
    }
    return (
        <div className='border px-5 py-6 rounded-lg shadow-xl'>
            <div className='grid md:grid-cols-2 gap-4'>
                <div>

                    <h1 className='text-5xl my-7 text-orange-600 border-b pb-3 font-bold'>{recipe_name}</h1>
                    <h1 className='text-3xl my-7 text-gray-700 border-b pb-1'>INGREDIENTS</h1>
                    <ol className='list-disc ml-8 text-gray-500'>
                        {
                            ingredients.map((ing, i) => <li key={i}>{ing}</li>)
                        }
                    </ol>
                </div>

                <div>
                    <LazyLoad offset={100}>
                        <img className='w-fit h-fit rounded-lg shadow-xl' src={image_url} alt="img" />
                    </LazyLoad>

                    <div className='flex gap-3 items-center mt-6'>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly
                        />
                        <p className='text-base text-gray-500 font-semibold'>{rating}</p>
                    </div>
                </div>


            </div>
            <div>
                <h4 className='text-3xl my-8 text-gray-700 border-b pb-2'>Cooking Method</h4>
                <p className='text-gray-600'>
                    {
                        readmore ? cooking_method : cooking_method.slice(0, 300) + ' '
                    }
                    <button
                        onClick={() => setReadMore(!readmore)}
                        className='text-blue-600 font-semibold underline'
                    >
                        {readmore ? " read less" : " read more ...."}
                    </button>
                </p>
            </div>
            <button onClick={handledisable} className='text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center my-5 disabled:opacity-60'>Favorite</button>
        </div>
    );
};

export default ChefRecipesCard;