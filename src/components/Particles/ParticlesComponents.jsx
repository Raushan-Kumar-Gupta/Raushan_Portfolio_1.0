import { useCallback , useRef} from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
const ParticlesComponents = (props) => {
    const { particlesOptions, className, id } = props;

    const isInitialized = useRef(false);

const particlesInit = useCallback(async (engine) => {
    if (!isInitialized.current) {
        await loadFull(engine);
        isInitialized.current = true;
    }
}, []);

    const particlesLoaded = useCallback(async (container) => {
        await container;
    }, []);
    return (
        <Particles
            id={id}
            className={className}
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        />
    );
};

export default ParticlesComponents;
