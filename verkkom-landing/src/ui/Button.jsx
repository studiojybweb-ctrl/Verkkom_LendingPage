import React from 'react';
import './Button.css'; // Crearemos este archivo en un momento

export function Button({ children, variant = 'primary', onClick, className = "", type = "button" }) {
  // variants: 
  // 'primary' -> El verde vibrante (CTA principal)
  // 'outline' -> El transparente con borde (Secundario)
  // 'deep'    -> El azul profundo
  
  return (
    <button 
      type={type}
      className={`vk-btn ${variant} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}