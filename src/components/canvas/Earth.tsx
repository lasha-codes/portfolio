'use client'

import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Html } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
  const { scene } = useGLTF('/planet/scene.gltf', true)

  const cloned = useMemo(() => {
    const c = scene.clone()
    c.traverse((child: any) => {
      if (child.isMesh) {
        child.receiveShadow = false
        child.castShadow = false
        if (child.material) {
          child.material.roughness = 1
          child.material.metalness = 0
          child.material.flatShading = true
        }
      }
    })
    return c
  }, [scene])

  return <primitive object={cloned} scale={2.5} position={[0, 0, 0]} />
}

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      gl={{
        antialias: false,
        preserveDrawingBuffer: false,
        powerPreference: 'high-performance',
        precision: 'lowp',
      }}
      dpr={[1, 1.2]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense
        fallback={
          <Html center>
            <CanvasLoader />
          </Html>
        }
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 5, 5]} intensity={1} />

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.2}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas
