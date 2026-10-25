import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';

const FONT = `${import.meta.env.BASE_URL}fonts/Inter-500.ttf`;

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * increment;
    points.push(new THREE.Vector3(Math.cos(phi) * r, y, Math.sin(phi) * r).multiplyScalar(radius));
  }
  return points;
}

function Word({ text, position }: { text: string; position: THREE.Vector3 }): JSX.Element {
  const [hovered, setHovered] = useState(false);
  return (
    <Billboard position={position}>
      <Text
        font={FONT}
        fontSize={hovered ? 0.36 : 0.26}
        color={hovered ? '#38bdf8' : '#e2e8f0'}
        anchorX="center"
        anchorY="middle"
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = ''; }}
      >
        {text}
      </Text>
    </Billboard>
  );
}

function Cloud({ words, reduced }: { words: string[]; reduced: boolean }): JSX.Element {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => fibonacciSphere(words.length, 2.7), [words.length]);
  useFrame(({ pointer }, dt) => {
    if (!group.current || reduced) return;
    group.current.rotation.y += dt * (0.15 + pointer.x * 0.35);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.4, 0.05);
  });
  return (
    <group ref={group}>
      {words.map((w, i) => <Word key={w} text={w} position={points[i]} />)}
    </group>
  );
}

export function SkillsSphere({ words, reduced, active }: { words: string[]; reduced: boolean; active: boolean }): JSX.Element {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true }}
      frameloop={active ? 'always' : 'never'}
    >
      <fog attach="fog" args={['#070b16', 7, 12]} />
      <Cloud words={words} reduced={reduced} />
    </Canvas>
  );
}
