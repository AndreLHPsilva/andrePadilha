import { particlesConfig } from "@/utils/particles/particlesConfig";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function ParticlesComponent() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      params={particlesConfig}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
}
