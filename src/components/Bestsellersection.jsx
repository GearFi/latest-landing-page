import React from 'react'

export default function Bestsellersection() {
    return (
        <>
            <section className="bg-white w-full">
                <h1 className='text-center p-4 text-2xl bold'>
                    Best Seller NFTs
                </h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-10'>
                    <div className='h-96 bg-gray-200 border-2 m-3'></div>
                    <div className=' h-96 bg-gray-200 border-2 m-3'></div>
                    <div className=' h-96 bg-gray-200 border-2 m-3'></div>
                </div>
            </section>
        </>
    )
}
