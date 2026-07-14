import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { TextureLoader, type Group, type Mesh } from "three";
import logoUrl from "@/assets/colony-one-logo.png";

function LogoPlane() {
  const texture = useLoader(TextureLoader, logoUrl);
  const ref = useRef<Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * 0.6) * 0.35;
    ref.current.rotation.x = Math.sin(t * 0.4) * 0.12;
    ref.current.position.y = Math.sin(t * 1.2) * 0.08;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref}>
        <planeGeometry args={[2.6, 2.6]} />
        <meshStandardMaterial
          map={texture}
          transparent
          alphaTest={0.02}
          emissiveMap={texture}
          emissive="#ffffff"
          emissiveIntensity={0.35}
          metalness={0.4}
          roughness={0.35}
        />
      </mesh>
    </Float>
  );
}

function Ring({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) {
  const ref = useRef<Group>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.z = s.clock.elapsedTime * speed;
  });
  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.015, 16, 160]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.07, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.6} />
      </mesh>
    </group>
  );
}

export default function Scene3D({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 4, 5]} intensity={1.1} />
        <pointLight position={[-4, -2, 3]} intensity={0.6} color="#a97bff" />
        <Suspense fallback={null}>
          <LogoPlane />
          <Ring radius={1.9} color="#6a3cff" speed={0.35} tilt={1.2} />
          <Ring radius={2.25} color="#4fb3ff" speed={-0.25} tilt={0.5} />
          <Ring radius={2.6} color="#ff5ac8" speed={0.18} tilt={-0.4} />
          <Sparkles count={60} scale={6} size={2} speed={0.4} color="#a97bff" />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
