export default function Services() {
  const services = [
    {
      number: '1',
      title: 'Gestión tributaria, contable y legal',
      subtitle: 'El cimiento',
      description: 'Cumplimiento inteligente, control y sostenibilidad',
      icon: 'ri-line-chart-line',
      image: 'https://readdy.ai/api/search-image?query=professional%20accounting%20ledger%20books%20on%20elegant%20wooden%20desk%20traditional%20bound%20accounting%20journals%20financial%20record%20books%20with%20leather%20covers%20organized%20bookkeeping%20registers%20vintage%20style%20accounting%20books%20stacked%20neatly%20warm%20beige%20tones%20sophisticated%20professional%20office%20environment%20classic%20business%20accounting%20traditional%20bookkeeping%20methods&width=600&height=400&seq=service-accounting-ledger-books-v1&orientation=landscape'
    },
    {
      number: '2',
      title: 'Gobernanza, riesgos y cumplimiento',
      subtitle: 'La estructura',
      description: 'Protección del patrimonio y profesionalización',
      icon: 'ri-shield-check-line',
      image: 'https://readdy.ai/api/search-image?query=corporate%20governance%20concept%20with%20elegant%20wooden%20gavel%20on%20polished%20desk%20legal%20compliance%20documents%20official%20seals%20professional%20business%20meeting%20room%20background%20warm%20beige%20tones%20sophisticated%20executive%20office%20environment%20regulatory%20framework%20symbols&width=600&height=400&seq=service-governance-compliance-v2&orientation=landscape'
    },
    {
      number: '3',
      title: 'Estrategia y excelencia operacional',
      subtitle: 'El crecimiento',
      description: 'Claridad, foco y eficiencia',
      icon: 'ri-rocket-line',
      image: 'https://readdy.ai/api/search-image?query=business%20person%20analyzing%20financial%20market%20data%20on%20tablet%20device%20stock%20charts%20trading%20graphs%20investment%20analysis%20modern%20technology%20professional%20workspace%20strategic%20planning%20digital%20tools&width=600&height=400&seq=service-strategy-img&orientation=landscape'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-[#D4C5B0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header con línea decorativa */}
        <div className="mb-16">
          <div className="flex items-center justify-end mb-8">
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-normal text-gray-900 text-right italic">
            Nuestros servicios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Imagen */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-8">
                <div className="flex items-start mb-4">
                  <span className="text-6xl font-['Playfair_Display'] font-bold text-gray-300 mr-4">
                    {service.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-['Playfair_Display'] text-xl font-normal text-gray-900 mb-2 leading-tight italic">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-4 mt-4">
                  <p className="font-semibold text-gray-900 text-sm mb-2">
                    {service.subtitle}:
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-800 text-lg mb-6 font-['Inter']">
            Cada servicio está diseñado para fortalecer tu empresa en diferentes etapas de crecimiento
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Descubre Cómo Podemos Ayudarte
          </button>
        </div>
      </div>
    </section>
  );
}
