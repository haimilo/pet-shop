import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';

const navTab = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Category',
    link: '/category',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  }
]

const Header = () => {
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(false);
  console.log(isScroll)

  const handleChangeBgOnScroll = () => {
    if (window.scrollY >= 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleChangeBgOnScroll);
    return () => {
      window.removeEventListener('scroll', handleChangeBgOnScroll);
    }
  }, [])

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center h-[100px] px-[200px]'
      style={{
        backgroundColor: isScroll ? 'rgba(255, 255, 255, 0.6)' : 'transparent',
        backdropFilter: isScroll ? 'blur(4px)' : 'none',
        transition: 'all 0.5s ease'
      }}
    >
      {/* Logo */}
      <div
        onClick={() => {
          window.location.href = '/'
        }}
        className='cursor-pointer'
      >
        <Image
          src='/fullIcon.svg'
          alt='Full Logo'
          width={115}
          height={40}
        />
      </div>
      {/* Nav */}
      <div>
        <ul className='flex space-x-10'>
          {navTab.map((item, index) => (
            <li
              key={index}
              onClick={() => router.push(item.link)}
              className='cursor-pointer text-[#003459] font-bold text-base hover:text-[#FDB515] transition duration-300'
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      {/* Search and control box */}
      <div className='flex items-center'>
        <div className="flex items-center ml-4 w-[280px] h-[44px] space-x-2">
          <i className="text-[#667479]">
            <SearchIcon />
          </i>
          <input
            type="text"
            className="py-2 bg-transparent text-baseColor border shadow-sm border-none placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm "
            placeholder="Search something here!"
          />
        </div>
        <button
          className="text-baseColor height-full text-[#FDFDFD] bg-[#003459] hover:bg-[#FDB515] hover:text-white transition duration-300 px-6 py-2 rounded-full font-bold"
        >
          Join the community
        </button>
      </div>
    </div>
  )
}

export default Header