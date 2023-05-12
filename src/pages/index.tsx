import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import SliderCarousel from '@/components/SliderCarousel'
import WhatNews from '@/components/WhatNews'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Header />
      <SliderCarousel />
      <WhatNews />
    </main>
  )
}
