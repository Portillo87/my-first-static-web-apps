import { MdOutlineElectricBolt } from "react-icons/md";
import { TiLockClosed } from "react-icons/ti";
import { RiCellphoneFill } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { AiFillSetting, AiFillFormatPainter } from "react-icons/ai";

function Features() {
  const features = [
    {
      icon: <MdOutlineElectricBolt/>,
      title: "Velocidad Increíble",
      description: "Optimizado para cargar en milisegundos"
    },
    {
      icon: <TiLockClosed/>,
      title: "Seguridad Total",
      description: "Protección de datos de nivel empresarial"
    },
    {
      icon: <RiCellphoneFill />,
      title: "100% Responsive",
      description: "Funciona perfectamente en todos los dispositivos"
    },
    {
      icon: <AiFillFormatPainter/>,
      title: "Diseño Moderno",
      description: "Interfaz intuitiva y atractiva"
    },
    {
      icon: <AiFillSetting />,
      title: "Fácil Integración",
      description: "Compatible con tus herramientas favoritas"
    },
    {
      icon: <IoStatsChart />,
      title: "Analytics Avanzado",
      description: "Métricas en tiempo real de tu negocio"
    }
  ];

  return (
    <section className="py-4 md:py-10 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Título de Sección - Más compacto */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Características Principales
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para llevar tu negocio al siguiente nivel
          </p>
        </div>
        
        {/* Grid de Cards - Más compacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group hover:-translate-y-1"
            >
              {/* Icono - Más pequeño */}
              <div className="text-4xl mb-3 text-primary-600 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              {/* Título - Tipografía reducida */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              {/* Descripción - Más compacta */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Indicador decorativo - Más sutil */}
              <div className="mt-4 h-0.5 w-8 bg-linear-to-r from-primary-500 to-secondary-500 rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Features;