import React, { useCallback } from 'react'
import { ISinglePetProduct } from './ISinglePetProduct'
import Image from 'next/image'

const SinglePetProduct = (props: ISinglePetProduct) => {
  const handleFormatPrice = useCallback((price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
  }, [props]);

  return (
    <div
      className='flex flex-col w-[280px] items-center justify-self-center cursor-pointer hover:scale-[1.1] transition duration-300 ease-in-out'
    >
      {/* Image */}
      <div
        className='m-2 rounded-xl min-w-[264px] min-h-[264px]'
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
      </div>
      {/* Info */}
      <div
        className='w-full h-full flex flex-col items-start m-4 p-2
          
        '
      >
        <p
          className='font-bold text-[#00171F] text-[16px] leading-6 mb-1'
        >
          {props.name}
        </p>
        <div
          className='text-[#667479] text-[12px] leading-[18px] w-full flex space-x-4 mb-1'
        >
          <p>
            Gene: <b>{props.gene}</b>
          </p>
          <Image src='/icon/DotIcon.svg'
            alt='play circle'
            width={8}
            height={8}
          />
          <p>
            Age: <b>{props.age} months</b>
          </p>
        </div>
        <p
          className='font-bold text-[#00171F] text-[16px] leading-6 mb-1'
        >
          {handleFormatPrice(props.price)}
        </p>
      </div>
    </div>
  )
}

export default SinglePetProduct