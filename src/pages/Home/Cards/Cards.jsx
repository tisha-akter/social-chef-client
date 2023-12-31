import React, { useEffect, useState } from 'react';
import { FaGulp, FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';


const Cards = () => {

    const [cardsData, setCardData] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-tisha-akter.vercel.app/cards')
            .then(response => response.json())
            .then(data => setCardData(data))
    }, [])

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container py-24 mx-auto">
                    <h2 className='text-center text-orange-500 font-sans text-5xl mb-8'><span className='text-black'>Our</span> Chefs</h2>
                    <p className='mb-12 text-lg text-center'>
                        Our chef is a master of Italian healthy cuisine. With years of experience in the culinary industry, they have honed their skills in creating delicious meals that are both nutritious and satisfying. They have a deep understanding of how to balance flavors and ingredients to create dishes that not only taste great, but are also good for you. Their passion for healthy cooking is evident in every dish they create, and they are always exploring new ways to innovate and improve. Whether you're a health-conscious foodie or simply looking for a delicious meal, our chef has you covered with their expertise in Italian healthy food.</p>
                    <div className="flex flex-wrap ">
                        {cardsData.map(card => (
                            <div className="p-4 md:w-1/3" key={card?.id}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <LazyLoad effect ="blur">
                                        <img className="lg:h-90 md:h-90 w-full object-cover object-center" src={card?.picture} alt="blog" />
                                    </LazyLoad>



                                    <div className="p-6">
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{card?.name}</h1>
                                        <p className="leading-relaxed mb-3">{card?.years_of_experience} years of experience</p>
                                        <div className="flex items-center flex-wrap ">


                                            <Link to={`/cards-details/${card?.id}`}><button className="btn btn-active bg-orange-500">View Recipes</button></Link>

                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-2 py-1">
                                                <FaGulp className="w-6 h-6  text-orange-300" />
                                                <span>{card?.number_of_recipes} Recipes</span>
                                            </span>

                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <FaHeart className="w-4 h-4 mr-1 text-rose-600" />
                                                <span>  {card?.likes}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Cards;