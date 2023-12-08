import ECard from '../../components/Card';
import ECardDetail from '../../components/CardDetail';
import './style.css';
import { useRef } from "react";

export const HomePage = () => {
  const resultRef = useRef(null);

  return (
    <div className="container">
      <header>
        
      </header>
      <main>
        <ECard resultRef={resultRef}/>
        <ECardDetail ref={resultRef}/>
      </main>
      <footer>
        <p>Andrea Strnadlová</p>
      </footer>
  
    </div>
  );
};
