import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const About = () => {
  return (
    <div
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Header />
    </div>
  )
}

export default About