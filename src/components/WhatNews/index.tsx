import React from 'react'
import Image from 'next/image'
import { petsFakeList } from '../common/defines/pets'
import SinglePetProduct from '../common/SinglePetProduct/SinglePetProduct'
import { ISinglePetProduct } from '../common/SinglePetProduct/ISinglePetProduct'

const WhatNews = () => {
  return (
    <div
      className="py-20 px-32"
    >
      {/* Control */}
      <div
        className='flex justify-between items-center mb-9'
      >
        <div>
          <p
            className='text-4 leading-6'
          >
            Whats new?
          </p>
          <h2
            className='text-[24px] leading-[36px] font-bold text-[#002A48]'
          >
            Take a look at some of our pets
          </h2>
        </div>
        <button
          className='bg-transparent text-[#002A48] border border-[#002A48] px-7 py-3 rounded-full flex items-center text-[14px] leading-5'
        >
          View more
          <Image
            src='/icon/ArrowVector.svg'
            alt='play circle'
            width={8}
            height={8}
            style={{
              marginLeft: '10px',
            }}
          />
        </button>
      </div>
      {/* Product List */}
      <div
        className='
          grid grid-cols-4 gap-10 gap-y-16 
        '
      >
        {
          petsFakeList.map((pet: ISinglePetProduct) => (
            <SinglePetProduct
              key={pet.id}
              {...pet}
            />
          ))
        }
      </div>
    </div>
  )
}

export default WhatNews