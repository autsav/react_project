// src/Globe.js
import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';

const Globe = () => {
  const globeRef = useRef();

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[1, 1, 1]} />
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="blue" />
      </mesh>
    </Canvas>
  );
};

export default Globe;
