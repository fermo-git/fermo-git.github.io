import BorderGlow from '../components/BorderGlow/BorderGlow.jsx';
import './Section.css';
import './Experience.css';

const ITEMS = [
  {
    role: 'Programador Web',
    place: 'Óptica Gutiérrez',
    period: 'sep 2025 — ene 2026',
    desc: 'Diseñé y programé el sitio web de marketing con HTML, CSS y JavaScript, con estrategias para impulsar el alcance de sus servicios.',
    span: 'lg',
  },
  {
    role: 'Ingeniería en TI',
    place: 'Universidad Tecnológica de San Luis Río Colorado',
    period: 'sep 2023 — actualmente',
    desc: 'Formación en Tecnologías de la Información, con enfoque práctico en proyectos reales de desarrollo y diseño.',
    span: 'tall',
    highlight: true,
    badge: 'En curso',
  },
  {
    role: 'Diseñador UI/UX',
    place: 'Air Metrics',
    period: 'feb 2025 — nov 2025',
    desc: 'Diseñé interfaces para una app web y móvil de mediciones ambientales (humedad, CO2, temperatura), optimizando reportes y visualización de datos.',
    span: 'md',
    expandable: true,
  },
  {
    role: 'Analista / Front End',
    place: 'Progressus',
    period: 'jun 2024 — ene 2025',
    desc: 'Lideré el desarrollo front end de HappyTeeth, una app para agendar citas de profilaxis dental, gestionando reuniones y reportes con stakeholders.',
    span: 'md',
    expandable: true,
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">Experiencia</p>
        <h2 className="section__title">Lo que he construido</h2>
        <p className="section__lead">
          Un recorrido corto pero denso: cuatro contextos distintos, un mismo hilo conductor.
        </p>

        <div className="experience-grid">
          {ITEMS.map(item => (
            <BorderGlow
              key={item.role}
              className={[
                'experience-card',
                `experience-card--${item.span}`,
                item.expandable ? 'experience-card--expandable' : '',
                item.highlight ? 'experience-card--highlight' : '',
              ].filter(Boolean).join(' ')}
              backgroundColor={item.highlight ? '#1a1033' : '#120a26'}
              colors={item.highlight ? ['#f0abfc', '#facc15', '#8b5cf6'] : ['#8b5cf6', '#e879f9', '#6366f1']}
              glowColor={item.highlight ? '292 90% 78%' : '270 90% 75%'}
              borderRadius={20}
              glowRadius={34}
            >
              <div className="experience-card__body">
                {item.badge && <span className="experience-card__badge">{item.badge}</span>}
                <p className="experience-card__period">{item.period}</p>
                <h3 className="experience-card__role">{item.role}</h3>
                <p className="experience-card__place">{item.place}</p>
                <p className="experience-card__desc">{item.desc}</p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
