import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  { q: "¿Cómo empiezo con TechPro?", a: "Instala dependencias con `npm install` y ejecuta `npm run dev`." },
  { q: "¿Puedo cambiar los colores del tema?", a: "Sí: modifica las variables en `index.css` o `tailwind.config.js` para mantener consistencia." },
  { q: "¿Cómo agrego un nuevo plan de precios?", a: "Edita `src/components/Pricing.jsx` y añade un objeto al arreglo `plans`." }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(prev => (prev === i ? null : i));
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Preguntas Frecuentes</h2>

      <div className="space-y-5">
        {faqs.map((item, i) => {
          const isOpen = i === activeIndex;
          return (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                className={`w-full flex items-center justify-between px-4 py-3 text-left bg-gray-800 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400`}
              >
                <span className="font-medium text-gray-100">{item.q}</span>
                <span className="ml-4 text-gray-200">
                  {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </span>
              </button>

              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className={`px-4 transition-[max-height,opacity] duration-300 overflow-hidden bg-white dark:bg-gray-800 ${isOpen ? "max-h-[500px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}
                aria-hidden={!isOpen}
              >
                <p className="text-gray-800 dark:text-gray-200">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
