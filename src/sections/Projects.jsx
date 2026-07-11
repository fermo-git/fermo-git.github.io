import CardSwap, { Card } from '../components/CardSwap/CardSwap.jsx';
import './Section.css';
import './Projects.css';

const BASE = import.meta.env.BASE_URL;

const PROJECTS = [
  {
    title: 'Óptica Gutiérrez',
    description: 'Sitio web de marketing para un centro óptico, desarrollado con HTML, CSS y JavaScript. En producción.',
    image: `${BASE}projects/optica-gutierrez.webp`,
    link: 'https://gutierrezcentrooptico.com/',
  },
  {
    title: 'Sistema de Colas Virtuales',
    description: 'Plataforma de gestión de turnos y eventos en tiempo real para la UT San Luis Río Colorado.',
    image: `${BASE}projects/sistema-colas.webp`,
    link: 'https://colavirtualut.utportfolio.cloud/Homepage',
  },
];

export default function Projects() {
  const openProject = (index) => {
    window.open(PROJECTS[index].link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="proyectos" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">Proyectos</p>
        <h2 className="section__title">Trabajo en producción</h2>
        <p className="section__lead">
          Dos proyectos reales, en uso hoy. Haz clic en una tarjeta para visitarlos.
        </p>

        <div className="projects-stage">
          <CardSwap
            width={440}
            height={330}
            cardDistance={50}
            verticalDistance={56}
            delay={5500}
            pauseOnHover
            skewAmount={5}
            easing="elastic"
            onCardClick={openProject}
          >
            {PROJECTS.map((p) => (
              <Card key={p.title}>
                <div className="project-card-inner">
                  <img className="project-card-image" src={p.image} alt={`Preview de ${p.title}`} />
                  <div className="project-card-body">
                    <h3 className="project-card-title">{p.title}</h3>
                    <p className="project-card-desc">{p.description}</p>
                    <span className="project-card-link">Ver proyecto ↗</span>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
