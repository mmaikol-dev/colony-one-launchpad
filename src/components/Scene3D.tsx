import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <mesh ref={ref} scale={1.4}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <MeshDistortMaterial color="#6a3cff" distort={0.35} speed={1.6} roughness={0.15} metalness={0.6} />
    </mesh>
  );
}

function Blob({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  return (
    <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[0.6, 4]} />
        <MeshDistortMaterial color={color} distort={0.5} speed={2} roughness={0.1} metalness={0.4} />
      </mesh>
    </Float>
  );
}

export default function Scene3D({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -3, -3]} intensity={0.5} color="#ff5ac8" />
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1}>
            <Knot />
          </Float>
          <Blob position={[-2.6, 1.4, -1]} color="#4fb3ff" scale={0.7} />
          <Blob position={[2.5, -1.2, -0.5]} color="#ff5ac8" scale={0.55} />
          <Blob position={[2.8, 1.6, -2]} color="#a97bff" scale={0.4} />
          <ContactShadows position={[0, -1.8, 0]} opacity={0.25} scale={8} blur={2.4} far={2.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
