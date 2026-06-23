// app/CyberScene.js
"use client";

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function CyberCoreMesh({ isShieldActive }) {
  const meshRef = useRef(null);
  const activeRef = useRef(isShieldActive);
  
  // Keep structural changes reactive within the animation thread loop
  useEffect(() => {
    activeRef.current = isShieldActive;
  }, [isShieldActive]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const speed = activeRef.current ? 0.05 : 0.25;
    meshRef.current.rotation.y += speed * 0.05;
    meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <group ref={meshRef}>
      <Sphere args={[1.2, 64, 64]} scale={1}>
        <MeshDistortMaterial
          color={isShieldActive ? "#a855f7" : "#06b6d4"} 
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.03, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" wireframe opacity={0.4} transparent />
      </mesh>
      
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#a855f7" wireframe opacity={0.3} transparent />
      </mesh>
    </group>
  );
}

// Ensure isShieldActive is accepted right here in the arguments destructured wrapper!
export default function CyberScene({ isShieldActive }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color={isShieldActive ? "#a855f7" : "#06b6d4"} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <directionalLight position={[0, 5, 2]} intensity={0.8} />
      
      <CyberCoreMesh isShieldActive={isShieldActive} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}