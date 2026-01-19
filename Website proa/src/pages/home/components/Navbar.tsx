interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={
                isScrolled
                  ? 'https://static.readdy.ai/image/686f0f43be94224693ff27abb2a7a5ca/c6a907d560a1ea43682014c3524ca9be.png'
                  : 'https://static.readdy.ai/image/686f0f43be94224693ff27abb2a7a5ca/1eb8ed99b755a2a1ba93a4ca7cb51564.png'
              }
              alt="ProA Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('sobre-nosotras')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Nosotras
            </button>
            <button
              onClick={() => scrollToSection('ventajas')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                isScrolled
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Ventajas
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                isScrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
