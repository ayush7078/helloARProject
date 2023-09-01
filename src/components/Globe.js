import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Globe = ({ city }) => {
  const globeContainerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = globeContainerRef.current;

    // Create a scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a globe geometry
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x2c3e50 });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Create a marker for the selected city
    const markerGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    scene.add(marker);

    // Update marker position based on city
    // This is a simplified example, and you'd need a library like 'geolib' for accurate geographic coordinates
    if (city === 'New York') {
      marker.position.set(0, 2, 0);
    } else if (city === 'Los Angeles') {
      marker.position.set(-1, 2, 0);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Clean up Three.js resources
      renderer.dispose();
    };
  }, [city]);

  return <div ref={globeContainerRef} className="globe-container" />;
};

export default Globe;
