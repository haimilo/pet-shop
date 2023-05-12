import React from 'react'
import Image from 'next/image'

const SliderCarousel = () => (
  <>
    <div
      className='flex min-h-screen px-[200px] pt-[100px] h-[695px]'
      style={{
        backgroundImage: 'url(/image/herroBanner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className='flex-1 pt-[80px]'
      >
        <h1
          className='text-[56px] leading-[68px] font-bold text-[#002A48] mb-1'
        >
          One More Friend
        </h1>
        <h3
          className='text-[40px] leading-[60px] font-bold text-[#002A48] mb-6'
        >
          Thousands More Fun!
        </h3>
        <p
          className='mb-9 text-[16px] text-justify leading-7 w-[480px]'
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
      <div
        className='flex-3'
        style={{
          backgroundImage: 'url(/image/peopleAndDog.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
        }}
      >
      </div>
    </div>
  </>
)

export default SliderCarousel