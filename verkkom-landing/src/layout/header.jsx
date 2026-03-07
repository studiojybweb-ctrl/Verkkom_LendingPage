import React from 'react';
import { Button } from '../ui/Button';
import '../styles/header.css';

export function Header() {
  return (
    <header className="vk-header">
      <div className="header-container">
        {/* LOGO VERKKOM */}
        <div className="logo-container">
          <span className="logo-icon"></span>
          <span className="logo-text">Verkkom</span>
        </div>

        {/* MENÚ DE NAVEGACIÓN */}
        <nav className="nav-menu">
          <a href="#inicio">Inicio</a>
          <a href="#caracteristicas">Características</a>
          <a href="#paquetes">Paquetes</a>
          <a href="#soporte">Soporte</a>
          <a href="#catalogo">Catálogo Completo</a>
        </nav>

        <div className="header-action">
          <Button variant="deep" onClick={() => console.log("Contratar")}>
            Contratar
          </Button>
        </div>
      </div>
    </header>
  );
}