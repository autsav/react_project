// Globe.js
import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '../../threejs/OrbitControls';


const Globe = () => {
  const globeRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" color="blue" />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} args={[globeRef.current.camera]} />
    </Canvas>
  );
};

export default Globe;
