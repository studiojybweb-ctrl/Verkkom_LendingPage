import React from 'react';
import { Facebook, Linkedin, Instagram, MapPin, Mail } from 'lucide-react';
import '../styles/footer.css';

export function Footer() {
  return (
    <footer className="vk-footer-final">
      <div className="footer-top-gradient"></div>
      
      <div className="footer-content">
        {/* COLUMNA 1: IDENTIDAD */}
        <div className="footer-brand">
          <div className="logo-main">
            <span className="v-bold">V</span>
            <span className="v-name">VERKKOM</span>
          </div>
          <p className="brand-tagline">
            Conectividad industrial de alta capacidad en el corazón de Nuevo León.
          </p>
          <div className="social-pills">
            <a href="#" className="social-pill"><Facebook size={18} /></a>
            <a href="#" className="social-pill"><Instagram size={18} /></a>
            <a href="#" className="social-pill"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* COLUMNA 2: COBERTURA LOCAL */}
        <div className="footer-links-group">
          <h4>Cobertura</h4>
          <ul>
            <li><MapPin size={14} /> Apodaca, N.L.</li>
            <li><MapPin size={14} /> Pesquería, N.L.</li>
            <li><MapPin size={14} /> Zonas Industriales</li>
          </ul>
        </div>

        {/* COLUMNA 3: SOPORTE */}
        <div className="footer-links-group">
          <h4>Soporte</h4>
          <ul>
            <li><a href="#">Centro de Ayuda</a></li>
            <li><a href="#">Ticket de Soporte</a></li>
            <li><Mail size={14} /> contacto@verkkom.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-signature">
        <div className="signature-line"></div>
        <p>© 2026 Visual Render by <strong>Studio JYB</strong></p>
      </div>
    </footer>
  );
}