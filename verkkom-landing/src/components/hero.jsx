import React from 'react';
import { Button } from '../ui/Button'; // Importamos tu componente de UI
import { ArrowRight } from 'lucide-react';
import '../styles/Hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Internet de alta velocidad en <br />
            <span className="text-highlight">Nuevo León.</span>
          </h1>
          <p>
            Conectamos tu mundo, sin límites. <strong>Verkkom:</strong> rapidez para 
            hogares y empresas industriales donde otros no llegan.
          </p>
          <div className="hero-btns">
            <Button variant="primary">
              Contratar Ahora <ArrowRight size={18} />
            </Button>
            <Button variant="outline">
              Ver Cobertura
            </Button>
          </div>
        </div>
        {/* Espacio para la imagen del render (antena/montañas) */}
        <div className="hero-visual">
          <img src="/src/assets/img/hero-visual.png" alt="Verkkom Conectividad" />
        </div>
      </div>
    </section>
  );
}