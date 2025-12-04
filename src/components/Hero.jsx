import Button from './ui/Button';
import { FaRocket, FaPlay, FaCheck } from 'react-icons/fa';

function Hero() {
  const features = [
    { icon: FaCheck, text: "Implementación rápida" },
    { icon: FaCheck, text: "Soporte experto" },
    { icon: FaCheck, text: "Resultados medibles" }
  ];

  return (
    <section className="bg-white min-h-[90vh] flex items-center py-4 md:py-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Contenido de Texto */}
          <div className="space-y-2 text-left">
            {/* Título principal - Reducido y más legible */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Transforma tu Negocio con{' '}
                <span className="bg-linear-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Tecnología
                </span>
              </h1>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                La solución integral que revolucionará tu forma de trabajar
              </p>
            </div>

            {/* Descripción - Tipografía más pequeña */}
            <p className="text-xs text-gray-500 leading-relaxed">
              Más de 10,000 empresas confían en nuestra plataforma para impulsar
              su crecimiento con tecnología de vanguardia.
            </p>

            {/* Lista de características - Más compacta */}
            <div className="flex flex-wrap gap-4 py-2">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm text-gray-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button
                variant="primary"
                size="sm"
                className="flex items-center gap-2"
              >
                <FaRocket className="w-4 h-4" />
                Comenzar Ahora
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <FaPlay className="w-4 h-4" />
                Ver Demo
              </Button>
            </div>

            {/* Nota de confianza */}
            <div className="pt-1">
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <span className="text-green-500">✓</span>
                Implementación garantizada en 30 días
              </p>
            </div>
          </div>

          {/* Imagen/Mockup*/}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                alt="Dashboard de analytics moderno"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Elementos flotantes */}
            <div className="absolute -top-3 -left-3 bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-semibold text-gray-700">+45% ROI</span>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-100">
              <div className="text-center">
                <div className="text-sm font-bold text-blue-600">10K+</div>
                <div className="text-xs text-gray-500">Empresas</div>
              </div>
            </div>

            {/* Elementos decorativos*/}
            <div className="absolute -z-10 top-8 -right-8 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
            <div className="absolute -z-10 bottom-8 -left-8 w-20 h-20 bg-purple-100 rounded-full opacity-30"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;