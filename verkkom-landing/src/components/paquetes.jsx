import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom'; // 1. Importar el Hook
import { Check, ArrowRight, LayoutGrid, Sparkle } from 'lucide-react';
import '../styles/Paquetes.css';

export function Paquetes() {
  const navigate = useNavigate(); // 2. Inicializar la navegación
  return (
    <section className="vk-pricing-section">
      <div className="pricing-header">
        {/* EFECTO NEÓN CON ESTRELLA */}
        <div className="pricing-tag">
          <Sparkle size={18} fill="currentColor" className="sparkle-icon" />
          <span>PLANES VERKKOM</span>
        </div>
        <h2>Elige el poder de tu <span>Conexión</span></h2>
        <p className="pricing-subtitle">
          Internet diseñado para la zona industrial y residencial de Apodaca y Pesquería. 
        </p>
      </div>

      <div className="pricing-grid">
        {/* ... (Tus 3 Cards de Antena, Fibra y Fibra+Cámara se quedan igual) ... */}
        
        {/* REPETIR TUS CARDS AQUÍ */}
        <Card badge="1er Mes Gratis">
          <h3>Antena</h3>
          <div className="price"><span>$</span>499<span>/mes</span></div>
          <p className="speed">40 Mbps</p>
          <ul className="features">
            <li><Check size={16}/> $1,000 Instalación</li>
            <li><Check size={16}/> Tecnología Inalámbrica</li>
          </ul>
          <Button variant="outline" className="mt-auto">Contratar</Button>
        </Card>

        <Card variant="featured" badge="Más Popular">
          <h3>Fibra</h3>
          <div className="price"><span>$</span>600<span>/mes</span></div>
          <p className="speed">150 Mbps</p>
          <ul className="features">
            <li><Check size={16}/> <strong>Costo $0 Instalación</strong></li>
            <li><Check size={16}/> Home to Home (FTTH)</li>
          </ul>
          <Button variant="primary" className="mt-auto">Contratar Ahora</Button>
        </Card>

        <Card badge="Seguridad">
          <h3>Fibra + Cámara</h3>
          <div className="price"><span>$</span>799<span>/mes</span></div>
          <p className="speed">100 Mbps</p>
          <ul className="features">
            <li><Check size={16}/> 1 Cámara Incluida</li>
            <li><Check size={16}/> $700 Activación</li>
          </ul>
          <Button variant="outline" className="mt-auto">Contratar</Button>
        </Card>
      </div>

      <div className="pricing-footer-connected">
        <p>¿Buscas una solución a tu medida?</p>
        
        {/* 3. Agregar el onClick con la ruta que definimos en App.jsx */}
        <button 
          className="minimal-catalog-btn" 
          onClick={() => navigate('/catalogo')}
        >
          <LayoutGrid size={18} /> 
          Ver catálogo completo 
          <ArrowRight size={18} className="arrow-move" />
        </button>
      </div>
    </section>
  );
}