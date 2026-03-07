// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. IMPORTA LOS ESTILOS (El orden importa)
import './styles/variables.css';
import './App.css'; 

// 2. IMPORTA TUS PÁGINAS
import { Home } from './pages/Home';
import { Catalogo } from './pages/Catalogo';

// 3. IMPORTA EL LAYOUT (Lo que siempre se ve)
import { Header } from './layout/header';
import { Footer } from './layout/footer';

function App() {
  return (
    <Router>
      <div className="vk-app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            {/* Aquí puedes agregar /catalogo después */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;