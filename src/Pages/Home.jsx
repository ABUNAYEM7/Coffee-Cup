import React from 'react'
import Banner from '../components/Banner'
import Info from '../components/Info'
import CardContainer from '../components/CardContainer'
import Instagram from '../components/Instagram'

const Home = () => {
  return (
    <div>
      <header>
      <div>
        <Banner></Banner>
      </div>
      <div className='bg-[#f7efd2] text-primary'>
        <Info/>
      </div>
      </header>
      <section className=' bg-cardBg  bg-no-repeat bg-cover object-cover object-center'>
        <CardContainer/>
      </section>
      <section>
        <Instagram/>
      </section>
    </div>
  )
}

export default Home
