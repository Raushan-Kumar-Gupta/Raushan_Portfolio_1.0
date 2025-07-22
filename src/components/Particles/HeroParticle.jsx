import ParticlesComponents from "./ParticlesComponents";

import { heroOptions } from "./particlesOptions";

const HeroParticle = () => {
    return (
        <div className="w-full h-screen min-h-[800px]">
            <ParticlesComponents
                id="hero-particles"
                className="w-full h-screen z-999 min-h-[800px]"
                particlesOptions={heroOptions}
            />
        </div>
    );
};

export default HeroParticle;
