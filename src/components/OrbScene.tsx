import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";

function Ring({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) {
  const ref = useRef<Group>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.z = s.clock.elapsedTime * speed;
  });
  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.02, 16, 128]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.08, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} />
      </mesh>
    </group>
  );
}

export default function OrbScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere args={[1.1, 96, 96]}>
            <MeshDistortMaterial color="#6a3cff" distort={0.28} speed={1.4} metalness={0.7} roughness={0.15} />
          </Sphere>
          <Ring radius={1.6} color="#4fb3ff" speed={0.4} tilt={1.2} />
          <Ring radius={2.0} color="#ff5ac8" speed={-0.3} tilt={0.6} />
          <Ring radius={2.4} color="#a97bff" speed={0.2} tilt={-0.4} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
