import { useState } from 'react';
import Button from './ui/Button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold font-display">
            TechPro
          </div>
          
          {/* Desktop Menu - Oculto en móvil */}
          <ul className="hidden md:flex gap-8 items-center">
            <li className="hover:text-blue-200 transition-colors cursor-pointer font-medium">
              Inicio
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer font-medium">
              Características
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer font-medium">
              Precios
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer font-medium">
              Contacto
            </li>
          </ul>
          
          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button variant="accent" size="md">
              Probar Gratis
            </Button>
          </div>
          
          {/* Hamburger Menu */}
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu con animación */}
        <div 
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}
        >
          <ul className="flex flex-col gap-4 py-4 border-t border-blue-500/30">
            <li className="hover:text-blue-200 transition-colors cursor-pointer font-medium px-2">
              Inicio
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer font-medium px-2">
              Características
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer font-medium px-2">
              Precios
            </li>
            <li className="hover:text-blue-200 transition-colors cursor-pointer font-medium px-2">
              Contacto
            </li>
            <li className="pt-2">
              <Button variant="accent" size="md" fullWidth>
                Probar Gratis
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header