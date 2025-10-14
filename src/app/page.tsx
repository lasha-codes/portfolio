import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from '@/components'

const Home = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />

      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default Home
