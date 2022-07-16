import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import WavingAvatar from '../WavingAvatar/WavingAvatar';

const AvatarCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 15 }}
      style={{
        background: "rgb(20, 20, 20)",
        position: "fixed",
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={.5} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.2} />
      <Suspense fallback={null}>
        <WavingAvatar position={[0.025, -2, 1]} />
      </Suspense>
    </Canvas>
  )
}

export default AvatarCanvas;