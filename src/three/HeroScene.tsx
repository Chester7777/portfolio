import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const ACCENT = '#38bdf8';
const VIOLET = '#a78bfa';

function Core(): JSX.Element {
  const shell = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (shell.current) {
      shell.current.rotation.x += dt * 0.08;
      shell.current.rotation.y += dt * 0.12;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh>
        <icosahedronGeometry args={[1.35, 24]} />
        <MeshDistortMaterial color={VIOLET} emissive="#1e1b4b" roughness={0.15} metalness={0.6} distort={0.38} speed={1.6} />
      </mesh>
      <mesh ref={shell} scale={1.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={ACCENT} wireframe={true} transparent={true} opacity={0.35} />
      </mesh>
    </Float>
  );
}

function Orbit({ radius, speed, tilt, color }: { radius: number; speed: number; tilt: number; color: string }): JSX.Element {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * speed;
  });
  return (
    <group rotation={[tilt, 0, tilt / 2]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.006, 8, 160]} />
        <meshBasicMaterial color={color} transparent={true} opacity={0.35} />
      </mesh>
      <group ref={group}>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.08, 24, 24]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </mesh>
      </group>
    </group>
  );
}

function Rig(): null {
  const target = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ camera, pointer }) => {
    target.set(pointer.x * 0.8, pointer.y * 0.5, 6);
    camera.position.lerp(target, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroScene({ reduced }: { reduced: boolean }): JSX.Element {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduced ? 'demand' : 'always'}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={40} color={ACCENT} />
      <pointLight position={[-4, -2, 2]} intensity={30} color="#f472b6" />
      <group scale={0.78} position={[0.6, 0, 0]}>
        <Core />
        <Orbit radius={2.4} speed={0.6} tilt={0.5} color={ACCENT} />
        <Orbit radius={2.9} speed={-0.4} tilt={-0.7} color="#f472b6" />
        <Orbit radius={3.4} speed={0.25} tilt={1.1} color={VIOLET} />
      </group>
      <Sparkles count={90} scale={[10, 6, 6]} size={2} speed={0.3} color="#c7d2fe" />
      {!reduced && <Rig />}
    </Canvas>
  );
}
