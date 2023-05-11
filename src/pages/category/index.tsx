import React from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const Category = () => {
  return (
    <div
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Header />
    </div>
  )
}

export default Category