import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Card/ChefCard';

const Home = () => {
    const chefs = useLoaderData();


    return (
        <div className='mx-5'>
            <Banner />

            <section className='my-40'>
                <h1 className='text-6xl text-gray-800 font-bold text-center'>Our Chef's</h1>
                <p className='text-gray-500 text-base text-center my-2'>Our Chef's: skilled culinary artists creating delicious culinary experiences.</p>

                <div className='grid md:grid-cols-2 gap-y-10 gap-5 my-28'>
                    {
                        chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </div>


                <div>
                    <h1 className='text-6xl text-gray-800 font-bold text-center'>Similar Recipes</h1>
                    <p className='text-gray-500 text-base text-center my-2'>They all are provide some similar recipes</p>

                    <div className='grid md:grid-cols-3 justify-items-center'>
                        <div className='text-center w-72 h-52 p-7'>
                            <img
                                className='h-16 mx-auto '
                                src="https://www.cznburak.com/images/iicon2.png" alt="" />
                            <h2 className='text-4xl mb-6'>Mezzes</h2>
                            <p className='text-base'>Mezzes that will satisfy both your eyes and your stomach.</p>
                        </div>
                        <div className='text-center w-72 h-52 p-7'>
                            <img
                                className='h-16 mx-auto '
                                src="https://www.cznburak.com/images/icon01.png" alt="" />
                            <h2 className='text-4xl mb-6'>Meats</h2>
                            <p className='text-base'>Meats with special recipes of the chef.</p>
                        </div>
                        <div className='text-center w-72 h-52 p-7'>
                            <img
                                className='h-16 mx-auto '
                                src="https://www.cznburak.com/images/2977731-200.png" alt="" />
                            <h2 className='text-2xl font-semibold mb-6'>Baklava and Kunefe</h2>
                            <p className='text-base'>Desserts that will take you to other lands...</p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 justify-items-center'>
                        <div className='text-center w-72 h-52 p-7'>
                            <img
                                className='h-16 mx-auto '
                                src="https://www.cznburak.com/images/icon03.png" alt="" />
                            <h2 className='text-4xl mb-6'>Coctails</h2>
                            <p className='text-base'>Our skilled bartenders have chosen for you.</p>
                        </div>
                        <div className='text-center w-72 h-52 p-7'>
                            <img
                                className='h-16 mx-auto '
                                src="https://www.cznburak.com/images/smoke.png" alt="" />
                            <h2 className='text-4xl mb-6'>Shisha</h2>
                            <p className='text-base'>The best quality and most delicious hookahs...</p>
                        </div>
                    </div>
                </div>


                <div className='grid md:grid-cols-2 justify-items-center my-28'>
                    <img
                        className='md:w-3/5 mb-10 md:mb-0'
                        src="https://i.ibb.co/026Wq5y/chef-with-thumb-up.jpg" alt="img" />

                    <div className='flex flex-col'>
                        <div className='my-auto'>
                            <h1 className='text-red-500 text-5xl font-bold'>Food is Love</h1>
                            <p>
                                "Are you food lover? If your answer is yes,
                                <br />
                                then you need good chef for cook.
                                <br />
                                All chef serve foods for reasonable prices.
                                <br />
                                It's awesome, we know."</p>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Home;