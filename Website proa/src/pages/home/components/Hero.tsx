export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#D4C5B0]">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://readdy.ai/api/search-image?query=elegant%20minimalist%20abstract%20wavy%20lines%20pattern%20in%20warm%20beige%20tones%20sophisticated%20geometric%20design%20subtle%20texture%20professional%20business%20consulting%20aesthetic%20clean%20modern%20background%20with%20flowing%20curves&width=1920&height=1080&seq=hero-pattern-bg-v2&orientation=landscape"
          alt="Patrón decorativo"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full h-[500px]">
              <img
                src="https://static.readdy.ai/image/686f0f43be94224693ff27abb2a7a5ca/78fa14bae08bb98a05fd371b16a3b828.png"
                alt="Libros contables profesionales"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Logo overlay */}
            <div className="absolute top-8 left-8 bg-white rounded-lg shadow-lg p-4 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/686f0f43be94224693ff27abb2a7a5ca/c6a907d560a1ea43682014c3524ca9be.png" 
                alt="ProA Logo" 
                className="h-20 w-auto"
              />
            </div>
          </div>

          {/* Contenido derecho */}
          <div className="text-left">
            {/* Línea decorativa superior */}
            <div className="w-full h-px bg-gray-800 mb-8"></div>
            
            {/* Patrón de líneas onduladas */}
            <div className="mb-6">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {[...Array(8)].map((_, i) => (
                  <path
                    key={i}
                    d={`M 0 ${i * 8 + 5} Q 30 ${i * 8}, 60 ${i * 8 + 5} T 120 ${i * 8 + 5}`}
                    stroke="#2D2D2D"
                    strokeWidth="0.5"
                    fill="none"
                  />
                ))}
              </svg>
            </div>

            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-8 leading-tight">
              Crecimiento <span className="italic">ágil</span>
              <br />
              <span className="italic">y ordenado</span> para
              <br />
              empresas
              <br />
              <span className="italic">medianas y</span>
              <br />
              <span className="italic">familiares</span>
            </h1>

            {/* Línea decorativa media */}
            <div className="w-2/3 h-px bg-gray-800 mb-8"></div>

            <p className="text-base md:text-lg text-gray-800 mb-10 leading-relaxed max-w-xl font-['Inter']">
              Acompañamos a dueños, ejecutivos y familias empresarias en la preparación de organizaciones para un crecimiento ordenado y una sucesión sostenible, sin sacrificar la gestión cotidiana
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Solicita una Consulta
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('servicios');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="bg-transparent text-gray-900 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-900/10 transition-all duration-300 border-2 border-gray-900 whitespace-nowrap cursor-pointer"
              >
                Conoce Nuestros Servicios
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-gray-900 text-3xl"></i>
      </div>
    </section>
  );
}