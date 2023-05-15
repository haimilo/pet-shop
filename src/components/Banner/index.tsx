import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div
      className='flex h-[378px] px-[86px] mx-[130px] mb-[120px] rounded-3xl items-center justify-center'
      style={{
        backgroundImage: 'url(/image/Banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className='flex-1'
        style={{
          backgroundImage: 'url(/image/peopleAndPug.png)',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
        }}
      />
      <div
        className='flex-1 flex items-end py-16 h-full flex-col'
      >
        <h1
          className='text-[52px] leading-[68px] font-bold text-[#002A48]'
        >
          One More Friend
        </h1>
        <h3
          className='text-[36px] leading-[54px] font-bold text-[#002A48]'
        >
          Thousands More Fun!
        </h3>
        <p
          className='mb-6 text-[12px] text-right leading-[18px] w-[400px]'
        >
          Having a pet means you have more joy, anew friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <div
          className='flex space-x-10'
        >
          <button
            className='bg-transparent text-[#002A48] border border-[#002A48] px-10 py-3 rounded-full flex'
          >
            View Intro
            <Image
              src='/icon/Play_Circle.svg'
              alt='play circle'
              width={24}
              height={24}
              style={{
                marginLeft: '10px',
                borderRadius: '50%',
                border: '1px solid #002A48'
              }}
            />
          </button>
          <button
            className='bg-[#002A48] text-white px-10 py-3 rounded-full flex'
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner