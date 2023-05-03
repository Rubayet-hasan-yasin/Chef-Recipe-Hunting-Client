import React from 'react';

const ChefRecipesCard = ({ recipe }) => {
    const { image_url, recipe_name, ingredients, cooking_method, rating } = recipe;
    // console.log(recipe);
    return (
        <div className='border px-5 py-6 rounded-lg shadow-xl'>
            <div className='grid md:grid-cols-2 gap-4'>
                <div>
                    <h1 className='text-4xl my-7 text-gray-700 border-b pb-1'>INGREDIENTS</h1>
                    <ol className='list-disc ml-8 text-gray-500'>
                        {
                            ingredients.map((ing, i) => <li key={i}>{ing}</li>)
                        }
                    </ol>
                </div>

                <img className='w-52 h-fit rounded-lg shadow-xl' src={image_url} alt="img" />


            </div>
            <div>
                <h4 className='text-4xl my-8 text-gray-700 border-b pb-2'>Cooking Method</h4>
                <p className='text-gray-600'>{cooking_method}</p>
            </div>
        </div>
    );
};

export default ChefRecipesCard;