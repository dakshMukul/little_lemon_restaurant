import React from 'react'
import Hero from './Hero/Hero'
import Highlights from './Highlights/Highlights'
import Testimonials from './Testimonials/Testimonials'

function Main() {
  return (
    <main className='main'>
      <Hero />
      <Highlights />
      <Testimonials />
    </main>
  )
}

export default Main