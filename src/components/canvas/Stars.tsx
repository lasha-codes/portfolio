'use client'

import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'

const Stars = () => {
  const ref = useRef<any>(null)
  const numStars = 1000
  const positions = new Float32Array(numStars * 3)

  for (let i = 0; i < numStars; i++) {
    const phi = Math.random() * 2 * Math.PI
    const costheta = Math.random() * 2 - 1
    const u = Math.random()
    const theta = Math.acos(costheta)
    const r = Math.cbrt(u) * 1.2

    const x = r * Math.sin(theta) * Math.cos(phi)
    const y = r * Math.sin(theta) * Math.sin(phi)
    const z = r * Math.cos(theta)

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
  }

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1
      ref.current.rotation.x += delta * 0.05
    }
  })

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
