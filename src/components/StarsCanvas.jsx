import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";

function StarsCanvas() {
  return (
    <div className="fixed inset-0 -z-20">
      <Canvas
        dpr={[1, 2]} // control pixel ratio
        camera={{ position: [0, 0, 1] }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Stars
            radius={150}
            depth={80}
            count={8000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default StarsCanvas;