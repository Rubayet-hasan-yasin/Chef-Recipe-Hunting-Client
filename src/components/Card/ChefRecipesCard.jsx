import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ChefRecipesCard = ({ recipe }) => {
    const [readmore, setReadMore] = useState(false);
    const { image_url, recipe_name, ingredients, cooking_method, rating } = recipe;

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
                    <img className='w-fit h-fit rounded-lg shadow-xl' src={image_url} alt="img" />

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
        </div>
    );
};

export default ChefRecipesCard;