import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-2 h-[500px] justify-items-end'>
                        <div>
                            <h1 className='text-6xl font-bold text-gray-700 my-8 '>It's CZNBURAK - The Smiling Man</h1>

                            <p className="text-xl text-gray-500">
                                I was born in the city of “Hatay”, the junction point of many civilizations and cultures therefore a meeting point of many different cuisines throughout the ages. Many years ago, my grandfather, who was a kunefe master and my father who operated the 'Zeytindal Restaurant' in Sisli, Istanbul; they have become talented individuals of this culinary heritage and they have opened their restaurant. When I was 13 years old, I started working at my father's restaurant.
                            </p>
                        </div>
                        <div className='h-[700px]'>
                            <img src="https://www.cznburak.com/images/head-chef.png" alt="img" className='h-3/4' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-2 h-[500px]'>
                        <div className='h-[700px]'>
                            <img src="https://i.ibb.co/5L7dBkZ/18ce1.png" alt="img" className='h-3/4' />
                        </div>
                        <div>
                            <h1 className='text-6xl font-bold text-gray-700 my-8 '>Gordon Ramsay</h1>

                            <p className="text-xl text-gray-500">
                                Ramsay's culinary journey began in the 1980s, where he trained with some of the world's top chefs, including Marco Pierre White and Guy Savoy. He went on to work in several Michelin-starred restaurants before opening his first restaurant, Aubergine, in London, which earned two Michelin stars within three years.

                                In 1998, Ramsay opened his signature restaurant, Restaurant Gordon Ramsay, which has held three Michelin stars since 2001. He has since expanded his empire with several restaurants in London, New York, Las Vegas, and other cities worldwide.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='grid grid-cols-2 h-[500px] justify-items-end'>
                        <div>
                            <h1 className='text-6xl font-bold text-gray-700 my-8 '>CHEF AKIRA BACK</h1>

                            <p className="text-xl text-gray-500">
                            Born in Seoul, Korea and raised in Aspen, Colorado, Akira Back moved to the rocky mountain state at the age of 15-years-old for his father to pursue the family business. Back picked up snowboarding as a hobby which led him to pursue the professional circuit where he appeared in a handful of extreme sports movies and garnered praise from the sports top trade publications. During this time, Back began working at a local Japanese restaurant to supplement his income. After seven years on the pro-snowboarding circuit, Back realized that he felt the same thrill in the kitchen as he did on his board, shaping his decision to pursue a full-time culinary career.
                            </p>
                        </div>
                        <div className='h-[700px]'>
                            <img src="https://i.ibb.co/hVLzbgk/b284b584-cff.png" alt="img" className='h-3/4' />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};
export default Banner;




{/* <SwiperSlide>
                    <div className='grid grid-cols-2 h-[500px] gap-x-96'>
                        <div>
                            <h1 className='text-4xl'>It's CZNBURAK - The Smiling Man</h1>
                        </div>
                        <div className='h-[700px]'>
                            <img src="https://www.cznburak.com/images/head-chef.png" alt="img" className='h-3/4' />
                        </div>
                    </div>
                </SwiperSlide> */}