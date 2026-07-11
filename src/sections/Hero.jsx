import './Section.css';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__content">
        <p className="section__eyebrow">Fullstack developer</p>
        <h1 className="hero__title">Edgar Villagrana</h1>
        <p className="hero__lead">
          Construyo productos web de punta a punta: desde la interfaz hasta el servidor.
          Combino desarrollo, diseño UI/UX y una buena dosis de curiosidad por el espacio
          para crear experiencias digitales que se sienten cuidadas.
        </p>
        <div className="hero__meta">
          <span>San Luis Río Colorado, Son.</span>
          <span className="hero__meta-dot" />
          <span>Disponible para nuevos proyectos</span>
        </div>
      </div>

      <a className="hero__scroll" href="#sobre-mi" aria-label="Ir a la sección Sobre mí">
        <span />
      </a>
    </section>
  );
}
