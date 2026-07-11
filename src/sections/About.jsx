import BorderGlow from '../components/BorderGlow/BorderGlow.jsx';
import './Section.css';
import './About.css';

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">Sobre mí</p>
        <h2 className="section__title">Desarrollo, diseño y un poco de espacio</h2>
        <p className="section__lead">
          Soy estudiante de Ingeniería en Tecnologías de la Información en la Universidad
          Tecnológica de San Luis Río Colorado. En el último año pasé de programar sitios de
          marketing a diseñar interfaces para apps de medición ambiental, y de ahí a liderar el
          front end de una plataforma de citas médicas. Me interesa la parte completa del
          proceso: interfaz, lógica de negocio y el servidor donde todo termina viviendo.
        </p>

        <BorderGlow
          backgroundColor="#120a26"
          colors={['#8b5cf6', '#e879f9', '#6366f1']}
          glowColor="270 90% 75%"
          borderRadius={20}
          glowRadius={36}
        >
          <div style={{ padding: '1.75rem 2rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.6rem', color: 'var(--text-primary)' }}>1+</p>
              <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>Año de experiencia</p>
            </div>
            <div>
              <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.6rem', color: 'var(--text-primary)' }}>3</p>
              <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>Empresas / proyectos reales</p>
            </div>
          </div>
        </BorderGlow>

        <div className="about__languages">
          <p className="about__languages-label">Idiomas</p>
          <div className="about__languages-grid">
            <BorderGlow
              backgroundColor="#120a26"
              colors={['#8b5cf6', '#e879f9', '#6366f1']}
              glowColor="270 90% 75%"
              borderRadius={16}
              glowRadius={28}
            >
              <div className="about__language-item">
                <span className="about__language-name">Español</span>
                <span className="about__language-level">Nativo</span>
              </div>
            </BorderGlow>
            <BorderGlow
              backgroundColor="#120a26"
              colors={['#8b5cf6', '#e879f9', '#6366f1']}
              glowColor="270 90% 75%"
              borderRadius={16}
              glowRadius={28}
            >
              <div className="about__language-item">
                <span className="about__language-name">Inglés</span>
                <span className="about__language-level">Avanzado C1</span>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}
