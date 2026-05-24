import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller)); 
        setBestSeller(bestProduct.slice(0,5))  
    }, [products])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8 mb-5'>
                <Title text1={"BEST"} text2={"SELLERS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover our Best Sellers of helmets—crafted with precision, built for protection.</p>
            </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.length > 0
                ? bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
                : Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className='animate-pulse'>
                        <div className='bg-gray-200 aspect-square w-full rounded' />
                        <div className='mt-2 h-3 bg-gray-200 rounded w-3/4' />
                        <div className='mt-1 h-3 bg-gray-200 rounded w-1/3' />
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default BestSeller