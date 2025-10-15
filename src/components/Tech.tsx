'use client'

import dynamic from 'next/dynamic'
import { memo, useEffect } from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { preloadBallTextures } from './canvas/Ball'

const BallCanvas = dynamic(() => import('./canvas/Ball'), {
  ssr: false,
  loading: () => (
    <div className='w-28 h-28 flex items-center justify-center'>
      <div className='w-6 h-6 border-2 border-t-transparent border-white/70 rounded-full animate-spin' />
    </div>
  ),
})

const TechComponent = () => {
  useEffect(() => {
    preloadBallTextures(technologies.map((t) => t.icon))
  }, [])

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

const Tech = memo(TechComponent)

export default SectionWrapper(Tech, '')
