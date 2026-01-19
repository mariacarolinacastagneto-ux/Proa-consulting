export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-amber-50 to-orange-50 text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="https://static.readdy.ai/image/686f0f43be94224693ff27abb2a7a5ca/c6a907d560a1ea43682014c3524ca9be.png" 
                alt="ProA Logo" 
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed text-[20px]">
              Convertimos la visión de los dueños en una estructura robusta y delegable, asegurando que la empresa no dependa exclusivamente de sus fundadores.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-['Playfair_Display'] text-lg font-bold text-gray-900 mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-700 hover:text-gray-900 transition-colors text-sm cursor-pointer">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-700 hover:text-gray-900 transition-colors text-sm cursor-pointer">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotras" className="text-gray-700 hover:text-gray-900 transition-colors text-sm cursor-pointer">
                  Nosotras
                </a>
              </li>
              <li>
                <a href="#ventajas" className="text-gray-700 hover:text-gray-900 transition-colors text-sm cursor-pointer">
                  Ventajas
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-700 hover:text-gray-900 transition-colors text-sm cursor-pointer">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-['Playfair_Display'] text-lg font-bold text-gray-900 mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-mail-line text-gray-900 mr-2 mt-1"></i>
                <span className="text-gray-700 text-sm">carolina.castagneto@proaconsulting.cl</span>
              </li>
              <li className="flex items-start">
                <i className="ri-whatsapp-line text-gray-900 mr-2 mt-1"></i>
                <span className="text-gray-700 text-sm">+56 9 9231 8415</span>
              </li>
              <li className="flex items-start">
                <i className="ri-map-pin-line text-gray-900 mr-2 mt-1"></i>
                <span className="text-gray-700 text-sm">Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} ProA Consultoría. Todos los derechos reservados.
            </p>
            <a 
              href="https://readdy.ai/?ref=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}