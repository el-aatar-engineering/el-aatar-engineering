"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={earthRef} rotation={[0.15, -0.5, 0]}>
      <sphereGeometry args={[1.25, 96, 96]} />
      <meshStandardMaterial
        color="#2676a8"
        roughness={0.82}
        metalness={0.05}
        emissive="#061a35"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[4, 3, 5]}
        intensity={3}
        color="#d9f4ff"
      />
      <pointLight
        position={[-4, -2, -3]}
        intensity={1.5}
        color="#168cff"
      />

      <Stars
        radius={60}
        depth={30}
        count={900}
        factor={2}
        saturation={0}
        fade
        speed={0.35}
      />

      <Earth />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate
        rotateSpeed={0.65}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
      />
    </>
  );
}

export default function AtlasGlobe() {
  return (
    <div
      className="relative aspect-square w-full"
      aria-label="Interactive 3D Earth. Drag to rotate."
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#080d16"]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute inset-0 rounded-full border border-sky-200/[0.08]" />
    </div>
  );
}