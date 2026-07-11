import { useEffect, useState, useRef } from 'react';
import MagicRings from './MagicRings.jsx';
import './LoadingScreen.css';

/**
 * Fases de la secuencia:
 * 1. hola-in   -> "Hola!" aparece
 * 2. hola-out  -> "Hola!" desaparece
 * 3. name-in   -> "Mi nombre es Edgar Villagrana" + "Fullstack Developer" aparecen
 * 4. hold      -> pausa para que se lea
 * 5. portal    -> zoom al centro sobre MagicRings, disuelve hacia el portafolio
 */
const TIMINGS = {
  holaIn: 350,
  holaHold: 900,
  holaOut: 800,
  nameIn: 250,
  nameHold: 1700,
  portal: 1100,
};

export default function LoadingScreen({ onFinish }) {
  const [phase, setPhase] = useState('hola-in');
  const timers = useRef([]);

  useEffect(() => {
    const schedule = (fn, delay) => {
      const id = setTimeout(fn, delay);
      timers.current.push(id);
    };

    let t = TIMINGS.holaIn;
    schedule(() => setPhase('hola-visible'), t);

    t += TIMINGS.holaHold;
    schedule(() => setPhase('hola-out'), t);

    t += TIMINGS.holaOut;
    schedule(() => setPhase('name-in'), t);

    t += TIMINGS.nameIn;
    schedule(() => setPhase('name-visible'), t);

    t += TIMINGS.nameHold;
    schedule(() => setPhase('portal'), t);

    t += TIMINGS.portal;
    schedule(() => {
      onFinish?.();
    }, t);

    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showHola = phase === 'hola-in' || phase === 'hola-visible' || phase === 'hola-out';
  const holaVisible = phase === 'hola-visible';
  const showName = phase === 'name-in' || phase === 'name-visible' || phase === 'portal';
  const nameVisible = phase === 'name-visible' || phase === 'portal';
  const isPortal = phase === 'portal';

  return (
    <div className={`loading-screen ${isPortal ? 'is-portal' : ''}`}>
      <div className="loading-screen__rings">
        <MagicRings
          color="#818cf8"
          colorTwo="#e879f9"
          ringCount={6}
          speed={0.6}
          attenuation={9}
          lineThickness={2}
          baseRadius={0.32}
          radiusStep={0.11}
          scaleRate={0.22}
          opacity={1}
          blur={0}
          noiseAmount={0.08}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.55}
        />
      </div>

      <div className="loading-screen__content">
        {showHola && (
          <p className={`loading-screen__hola ${holaVisible ? 'is-visible' : ''}`}>
            Hola!
          </p>
        )}

        {showName && (
          <div className={`loading-screen__name-block ${nameVisible ? 'is-visible' : ''}`}>
            <h1 className="loading-screen__name">Mi nombre es Edgar Villagrana</h1>
            <p className="loading-screen__role">Fullstack Developer</p>
          </div>
        )}
      </div>
    </div>
  );
}
