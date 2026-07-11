import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
import Portfolio from './sections/Portfolio.jsx';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      {loaded && <Portfolio />}
    </>
  );
}
