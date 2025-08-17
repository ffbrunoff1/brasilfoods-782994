import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

// Placeholder Pages - You would create these files
const HomePage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary-600">
      Bem-vindo à BRASIL FOODS!
    </h1>
    <p>Página Inicial (Home)</p>
  </div>
);
const AboutPage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary-600">Sobre Nós</h1>
  </div>
);
const ServicesPage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary-600">Nossos Serviços</h1>
  </div>
);
const ContactPage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary-600">Fale Conosco</h1>
  </div>
);
const ProductsPage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary-600">Nossos Produtos</h1>
  </div>
);
const ProductDetailPage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-primary-600">Detalhes do Produto</h1>
  </div>
);

function App() {
  return (
    <Router>
      {/* Header, Hero, etc. would go here */}
      {/* For this basic structure, only Footer is imported as requested */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/produtos/:id" element={<ProductDetailPage />} />{' '}
          {/* Exemplo de rota dinâmica */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
