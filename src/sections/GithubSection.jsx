import { Github, GitFork, ExternalLink } from 'lucide-react';
import BorderGlow from '../components/BorderGlow/BorderGlow.jsx';
import './Section.css';
import './GithubSection.css';

const GITHUB_USER = 'fermo-git';
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

// Repos reales de mi perfil (github.com/fermo-git) — prácticas, ejercicios de
// control de versiones y prototipos, tal cual están publicados ahí.
const repos = [
  {
    name: 'Proyecto1',
    description: 'Práctica de control de versiones: creación y manejo de ramas en Git.',
    tag: 'Git',
  },
  {
    name: 'LoginPrototipo1',
    description: 'Prototipo de pantalla de inicio de sesión.',
    tag: 'JavaScript',
  },
  {
    name: 'deliveryprueba',
    description: 'Ejercicio de práctica sobre una interfaz tipo delivery.',
    tag: 'JavaScript',
  },
  {
    name: 'DeliveryPrueba2',
    description: 'Segunda iteración del ejercicio, enfocada en maquetado.',
    tag: 'CSS',
  },
  {
    name: 'libro-git2',
    description: 'Fork de un libro-guía de Git, usado como material de estudio.',
    tag: 'Fork',
  },
];

export default function GithubSection() {
  return (
    <section id="github" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">Código</p>
        <h2 className="section__title">También vivo en GitHub</h2>
        <p className="section__lead">
          Ahí llevo el registro de mis prácticas de control de versiones y prototipos rápidos —
          el paso previo a los proyectos que ya están en producción en la sección de arriba.
        </p>

        <div className="github__grid">
          {repos.map(repo => (
            <a
              key={repo.name}
              href={`${GITHUB_URL}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="github__card-link"
            >
              <BorderGlow
                backgroundColor="#120a26"
                colors={['#8b5cf6', '#e879f9', '#6366f1']}
                glowColor="270 90% 75%"
                borderRadius={16}
                glowRadius={26}
              >
                <div className="github__card">
                  <div className="github__card-head">
                    {repo.tag === 'Fork' ? <GitFork size={15} /> : <Github size={15} />}
                    <span className="github__card-name">{repo.name}</span>
                  </div>
                  <p className="github__card-desc">{repo.description}</p>
                  <div className="github__card-foot">
                    <span className="github__card-tag">{repo.tag}</span>
                    <ExternalLink size={14} className="github__card-external" />
                  </div>
                </div>
              </BorderGlow>
            </a>
          ))}
        </div>

        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="github__profile-link">
          <Github size={18} />
          Ver perfil completo en GitHub
        </a>
      </div>
    </section>
  );
}
