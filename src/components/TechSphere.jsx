import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Billboard } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef } from "react";

import python from "../assets/icons/python.png";
import react from "../assets/icons/react.png";
import html from "../assets/icons/html5.png";
import css from "../assets/icons/css3.png";
import js from "../assets/icons/javascript.png";
import mysql from "../assets/icons/mysql.png";
import django from "../assets/icons/django.png";
import bootstrap from "../assets/icons/bootstrap.png";

/* Globe */
function Globe() {
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={globeRef}>
      <icosahedronGeometry args={[2.5, 1]} />
      <meshStandardMaterial color="#3b82f6" wireframe />
    </mesh>
  );
}

/* Icon plane */
function Icon({ texture, position }) {
  const map = useLoader(TextureLoader, texture);

  return (
    <Billboard position={position}>
    <mesh renderOrder={1}>
    <planeGeometry args={[0.6, 0.6]} />
    <meshBasicMaterial map={map} transparent depthTest={false} />
    </mesh>
</Billboard>
  );
}

/* Orbit icons */
function OrbitIcons() {
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  const radius = 3;

  const icons = [
    python,
    react,
    html,
    css,
    js,
    mysql,
    django,
    bootstrap
  ];

  return (
    <group ref={group}>
      {icons.map((icon, i) => {
        const angle = (i / icons.length) * Math.PI;

        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle) + 1.5;

        return (
          <Icon key={i} texture={icon} position={[x, 0, z]} />
        );
      })}
    </group>
  );
}

/* Canvas */
export default function TechSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 7] }} style={{ height: "520px", width: "520px" }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} />

      <Globe />
      <OrbitIcons />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}