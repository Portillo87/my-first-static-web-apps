function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      role: "CEO de StartupXYZ",
      text: "Esta herramienta transformó nuestra forma de trabajar. Ahorramos 20 horas semanales y la productividad aumentó un 45%.",
      avatar: "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      role: "Director de Marketing",
      text: "La mejor inversión que hemos hecho. El ROI fue visible desde el primer mes y nuestro equipo duplicó su eficiencia.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Gerente de Operaciones",
      text: "Soporte excepcional y plataforma intuitiva. Nuestro equipo lo adoptó inmediatamente sin entrenamiento extensivo.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face&auto=format",
      rating: 4
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i}
            className={`text-base ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 bg-linear-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header - Más compacto */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Empresas que han transformado sus operaciones
          </p>
        </div>
        
        {/* Grid de Testimonios - Más compacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Principal - Más compacta */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 h-full flex flex-col">
                
                {/* Comillas */}
                <div className="text-5xl text-blue-100 leading-none mb-3">
                  "
                </div>
                
                {/* Rating */}
                <div className="mb-3">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                {/* Texto - Más compacto */}
                <p className="text-gray-700 mb-5 leading-relaxed text-sm grow">
                  {testimonial.text}
                </p>
                
                {/* Información del Autor */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Métricas - Más compactas */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="text-gray-600 text-xs">Rating Promedio</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">10K+</div>
              <div className="text-gray-600 text-xs">Clientes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-gray-600 text-xs">Retención</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-gray-600 text-xs">Soporte</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Testimonials;