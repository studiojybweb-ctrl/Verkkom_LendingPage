// src/ui/Card.jsx
import React from 'react';
import './Card.css';

export function Card({ children, variant = 'default', badge = null, className = "" }) {
  return (
    <div className={`vk-card ${variant} ${className}`}>
      {/* El badge debe estar FUERA del flujo normal para no aplastar nada */}
      {badge && <div className="vk-card-badge-floating">{badge}</div>}
      <div className="vk-card-content">
        {children}
      </div>
    </div>
  );
}