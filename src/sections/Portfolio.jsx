import { useEffect, useRef, useState } from 'react';
import { Home, User, Briefcase, Sparkles, FolderGit2, Github, Mail } from 'lucide-react';
import Particles from '../components/Particles/Particles.jsx';
import LineWaves from '../components/LineWaves/LineWaves.jsx';
import Dock from '../components/Dock/Dock.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import GithubSection from './GithubSection.jsx';
import Contact from './Contact.jsx';
import './Portfolio.css';

const scrollTo = (id) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Portfolio() {
  const particlesRef = useRef(null);
  const wavesRef = useRef(null);

  // Cuando un fondo llega a opacidad 0 no tiene sentido seguir corriendo su
  // shader en la GPU cada frame — lo pausamos por completo (sin desmontar el
  // canvas, así se retoma al instante sin reinicializar WebGL).
  const particlesPausedRef = useRef(false);
  const wavesPausedRef = useRef(true);
  const [particlesPaused, setParticlesPaused] = useState(false);
  const [wavesPaused, setWavesPaused] = useState(true);

  // Fondo dividido: Particles domina de Inicio a "Lo que he construido", y hace
  // una transición suave (crossfade atado al scroll) hacia LineWaves justo cuando
  // entra "Mi caja de herramientas", quedando LineWaves como fondo de ahí en adelante.
  useEffect(() => {
    const skillsEl = document.getElementById('habilidades');
    if (!skillsEl) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const vh = window.innerHeight || 1;
      const rect = skillsEl.getBoundingClientRect();
      // progress 0 -> mientras "Mi caja de herramientas" aún no entra en pantalla
      // progress 1 -> cuando su borde superior llega al techo del viewport
      let progress = 1 - rect.top / vh;
      progress = Math.min(Math.max(progress, 0), 1);
      const eased = progress * progress * (3 - 2 * progress); // smoothstep

      if (particlesRef.current) particlesRef.current.style.opacity = String(1 - eased);
      if (wavesRef.current) wavesRef.current.style.opacity = String(eased * 0.55);

      const nextParticlesPaused = eased >= 0.999;
      const nextWavesPaused = eased <= 0.001;
      if (nextParticlesPaused !== particlesPausedRef.current) {
        particlesPausedRef.current = nextParticlesPaused;
        setParticlesPaused(nextParticlesPaused);
      }
      if (nextWavesPaused !== wavesPausedRef.current) {
        wavesPausedRef.current = nextWavesPaused;
        setWavesPaused(nextWavesPaused);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const dockItems = [
    { icon: <Home size={18} />, label: 'Inicio', onClick: scrollTo('inicio') },
    { icon: <User size={18} />, label: 'Sobre mí', onClick: scrollTo('sobre-mi') },
    { icon: <Briefcase size={18} />, label: 'Experiencia', onClick: scrollTo('experiencia') },
    { icon: <Sparkles size={18} />, label: 'Habilidades', onClick: scrollTo('habilidades') },
    { icon: <FolderGit2 size={18} />, label: 'Proyectos', onClick: scrollTo('proyectos') },
    { icon: <Github size={18} />, label: 'GitHub', onClick: scrollTo('github') },
    { icon: <Mail size={18} />, label: 'Contacto', onClick: scrollTo('contacto') },
  ];

  return (
    <div className="portfolio">
      <div className="portfolio__bg-waves" ref={wavesRef}>
        <LineWaves
          speed={0.25}
          innerLineCount={28}
          outerLineCount={34}
          warpIntensity={0.9}
          rotation={-45}
          edgeFadeWidth={0.05}
          colorCycleSpeed={0.6}
          brightness={0.16}
          color1="#8b5cf6"
          color2="#6366f1"
          color3="#e879f9"
          enableMouseInteraction
          mouseInfluence={1.4}
          paused={wavesPaused}
        />
      </div>

      <div className="portfolio__bg-particles" ref={particlesRef}>
        <Particles
          particleColors={['#c4b5fd', '#a78bfa', '#f0abfc', '#ffffff']}
          particleCount={260}
          particleSpread={14}
          speed={0.08}
          particleBaseSize={70}
          moveParticlesOnHover
          particleHoverFactor={0.6}
          alphaParticles
          disableRotation={false}
          paused={particlesPaused}
        />
      </div>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GithubSection />
      <Contact />

      <Dock items={dockItems} panelHeight={62} baseItemSize={46} magnification={64} />
    </div>
  );
}
