function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "$29",
      period: "/mes",
      features: [
        "5 Usuarios",
        "50 GB Almacenamiento",
        "Soporte por Email",
        "Actualizaciones Mensuales"
      ],
      popular: false
    },
    {
      name: "Profesional",
      price: "$79",
      period: "/mes",
      features: [
        "20 Usuarios",
        "500 GB Almacenamiento",
        "Soporte 24/7",
        "Actualizaciones Semanales",
        "Analytics Avanzado",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "$199",
      period: "/mes",
      features: [
        "Usuarios Ilimitados",
        "2 TB Almacenamiento",
        "Soporte Premium",
        "Actualizaciones Diarias",
        "Analytics + IA",
        "API Prioritario",
        "Manager Dedicado"
      ],
      popular: false
    },
    // ---- nuevo plan agregado ----
    {
      name: "Startup",
      price: "$15",
      period: "/mes",
      features: [
        "3 Usuarios",
        "20 GB Almacenamiento",
        "Soporte por Email"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 md:py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Planes para cada necesidad
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Elige el plan perfecto para tu equipo
          </p>
        </div>

        {/* Cards de Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? 'bg-linear-to-br from-primary-600 to-secondary-600 ring-2 ring-white/20 shadow-2xl'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {/* Badge Popular */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Nombre del Plan */}
              <h3 className="text-xl font-bold mb-2">
                {plan.name}
              </h3>

              {/* Precio */}
              <div className="mb-5">
                <span className="text-4xl font-bold">
                  {plan.price}
                </span>
                <span className="text-gray-400 text-sm">
                  {plan.period}
                </span>
              </div>

              {/* Características - flex-grow empuja el botón abajo */}
              <ul className="mb-5 grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-green-400 text-base shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón - siempre al final */}
              <button className={`
                w-full py-3 rounded-lg font-semibold text-sm transition-all
                ${plan.popular
                  ? 'bg-white text-purple-600 hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }
              `}>
                Elegir Plan
              </button>
            </div>
          ))}
        </div>

        {/* Nota de pie - CENTRADA */}
          <div className="py-4 md:py-4 text-center mt-10">
          <p className="text-xs text-gray-400 max-w-xl mx-auto">
            Todos los planes incluyen 14 días de prueba gratis. Sin tarjeta de crédito requerida.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
