import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    // console.log(products);
    const [latestProducts, setLatestproducts] = useState([])

    useEffect(() => {
        setLatestproducts(products.slice(0, 10))
    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl mb-5'>
                <Title text1={'LATEST'} text2={"COLLECTION"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our latest collection of helmets—crafted with precision, built for protection.</p>
            </div>

        {/* rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latestProducts.length > 0
                ? latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
                : Array.from({ length: 10 }).map((_, i) => (
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

export default LatestCollection