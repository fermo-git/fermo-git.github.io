import InfiniteMenu from '../components/InfiniteMenu/InfiniteMenu.jsx';
import './Section.css';
import './Skills.css';

const BASE = import.meta.env.BASE_URL;

const icon = (slug, color) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`;

const SKILLS = [
  { image: icon('html5', 'E34F26'), title: 'HTML5', description: 'Maquetado semántico' },
  { image: `${BASE}icons/css3.webp`, title: 'CSS3', description: 'Estilos y diseño responsivo' },
  { image: icon('javascript', 'F7DF1E'), title: 'JavaScript', description: 'Interactividad en el navegador' },
  { image: icon('react', '61DAFB'), title: 'React', description: 'Interfaces por componentes' },
  { image: icon('nodedotjs', '339933'), title: 'Node.js', description: 'JavaScript en el servidor' },
  { image: icon('express', 'FFFFFF'), title: 'Express', description: 'APIs y rutas backend' },
  { image: icon('mysql', '4479A1'), title: 'MySQL', description: 'Bases de datos relacionales' },
  { image: icon('mongodb', '47A248'), title: 'MongoDB', description: 'Bases de datos NoSQL (básico)' },
  { image: icon('git', 'F05032'), title: 'Git', description: 'Control de versiones' },
  { image: icon('github', 'FFFFFF'), title: 'GitHub', description: 'Repositorios y colaboración' },
  { image: icon('linux', 'FCC624'), title: 'Linux', description: 'Administración básica' },
  { image: icon('nginx', '009639'), title: 'Nginx', description: 'Servidor y proxy inverso' },
  { image: icon('digitalocean', '0080FF'), title: 'VPS', description: 'Despliegue en servidores' },
  { image: icon('hostinger', '673DE6'), title: 'Hostinger', description: 'Hosting y dominios' },
  { image: icon('figma'), title: 'Figma', description: 'Prototipado UI/UX' },
  { image: `${BASE}icons/canva.webp`, title: 'Canva', description: 'Diseño gráfico rápido' },
  { image: `${BASE}icons/vegaspro.webp`, title: 'Vegas Pro', description: 'Edición de video básica' },
];

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">Habilidades</p>
        <h2 className="section__title">Mi caja de herramientas</h2>
        <p className="section__lead">
          Arrastra la esfera para explorar. Cada nodo es una tecnología con la que trabajo día a día.
        </p>

        <div className="skills-sphere">
          <InfiniteMenu items={SKILLS} />
        </div>
      </div>
    </section>
  );
}
