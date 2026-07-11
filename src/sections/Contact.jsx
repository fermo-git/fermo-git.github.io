import BorderGlow from '../components/BorderGlow/BorderGlow.jsx';
import './Section.css';
import './Contact.css';

const EMAIL = 'edgar.villagrana1@outlook.com';
const SUBJECT = 'Hola Edgar, me interesa trabajar contigo';
const BODY = `Hola Edgar,

Vi tu portafolio y me gustaría platicar sobre una oportunidad para trabajar juntos.

Cuéntame más sobre tu disponibilidad cuando puedas.

Saludos,`;

const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

export default function Contact() {
  return (
    <section id="contacto" className="section contact-section">
      <div className="section__inner contact-inner">
        <p className="section__eyebrow">Contacto</p>
        <h2 className="section__title">Hablemos de tu próximo proyecto</h2>
        <p className="section__lead">
          Ya sea desarrollo, diseño o ambos, con gusto reviso ideas nuevas.
        </p>

        <a href={mailtoHref} className="contact-mail-link" aria-label={`Enviar correo a ${EMAIL}`}>
          <BorderGlow
            backgroundColor="#150c2e"
            colors={['#8b5cf6', '#e879f9', '#6366f1']}
            glowColor="280 95% 78%"
            borderRadius={999}
            glowRadius={30}
            glowIntensity={1.2}
          >
            <span className="contact-mail-btn">Escríbeme un correo ✦</span>
          </BorderGlow>
        </a>

        <p className="contact-email">{EMAIL}</p>
      </div>
    </section>
  );
}
