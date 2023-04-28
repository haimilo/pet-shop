import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-[100px] px-[200px] '>
      <Image
        src='/fullIcon.svg'
        alt='Full Logo'
        width={115}
        height={40}
      />
    </div>
  )
}

export default Header