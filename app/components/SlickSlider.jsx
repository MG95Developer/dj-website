"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jsonData from '../../app/data.json'
import Image from 'next/image'
import Link from 'next/link'

const SlickSlider = () =>
{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }


    return (
        <Slider {...settings} className='w-full md:max-w-[90%] lg:max-w-[95%] xl:max-w-[85%] mx-auto px-2 lg:px-10'>
            {jsonData.map( ( product ) => (
                <div key={product.id} className='bg-ddl-pink text-ddl-white p-4'>

                    <div className='h-[400px] flex justify-center items-center bg-[#fbf8f9]'>
                        <Image src={product.image} alt={product.title} width={500} height={200} />
                    </div>

                    <div className='h-[80px] text-3xl font-bold px-2 py-3 flex justify-start items-center mt-5'>
                        <h3>{product.title}</h3>
                    </div>

                    <div className='py-3 mt-2 text-md px-2'>
                        <p>{product.description}</p>
                    </div>

                    <div className='py-3 text-md px-2'>
                        <Link href={product.ctaLink} target='_blank'>
                            <button className='bg-ddl-purple text-ddl-white px-8 py-4 rounded-lg hover:opacity-85 cursor-pointer'>
                                {product.ctaText}
                            </button>
                        </Link>
                    </div>
                </div>
            ) )}
        </Slider>
    )
}

export default SlickSlider