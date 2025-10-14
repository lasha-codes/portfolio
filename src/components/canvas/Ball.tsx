'use client'

import { Suspense, memo, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  Html,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'
import CanvasLoader from '../Loader'

interface BallProps {
  imgUrl: string | { src: string }
}

const Ball = memo(({ imgUrl }: BallProps) => {
  const textureUrl = typeof imgUrl === 'string' ? imgUrl : imgUrl.src
  const [decal] = useTexture([textureUrl])

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, 1), [])
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#fff8eb',
        polygonOffset: true,
        polygonOffsetFactor: -5,
        flatShading: true,
      }),
    []
  )

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.1]} />

      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
        scale={2.2}
      >
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.8}
          map={decal}
        />
      </mesh>
    </Float>
  )
})

// ✅ only call this once at module load — before rendering
export const preloadBallTextures = (icons: Array<string | { src: string }>) => {
  icons.forEach((icon) => {
    const url = typeof icon === 'string' ? icon : icon.src
    useTexture.preload(url)
  })
}

const BallCanvas = memo(({ icon }: { icon: any }) => (
  <Canvas
    frameloop='always'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{ position: [0, 0, 4] }}
  >
    <Suspense
      fallback={
        <Html center>
          <CanvasLoader />
        </Html>
      }
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
))

export default BallCanvas
