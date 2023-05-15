import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import SliderCarousel from '@/components/SliderCarousel'
import WhatNews from '@/components/WhatNews'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Header />
      <SliderCarousel />
      <WhatNews />
      <Banner />
    </main>
  )
}
