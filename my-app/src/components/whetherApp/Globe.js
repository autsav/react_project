import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Globe = () => {
  // Refs for objects
  const canvasRef = useRef(null);
  const globeRef = useRef(null);

  // Create a Three.js scene
  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a globe mesh
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('../../assets/images/earth_texture.jpg'); // Adjust the path
    const material = new THREE.MeshPhongMaterial({ map: texture });
    const globeMesh = new THREE.Mesh(geometry, material);
    scene.add(globeMesh);
    globeRef.current = globeMesh;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Globe;
