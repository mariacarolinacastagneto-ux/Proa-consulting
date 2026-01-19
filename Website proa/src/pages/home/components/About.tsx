const founders = [
  {
    name: 'Claudia Cisternas',
    role: 'Contadora Auditora con Magíster en Tributación',
    image: 'https://static.readdy.ai/image/686f0f43be94224693ff27abb2a7a5ca/ca87f52f91658d49ca1fd7742339dff7.png',
    description: 'Con más de 15 años de trayectoria en la industria financiera y de seguros, Claudia es especialista en fiscalidad internacional, inversión extranjera y estrategias tributarias aplicadas a entornos, custodios y fondos globales. Ha liderado equipos en Banco Santander, Banco de Chile, EY y KPMG, asesorando estructuras de inversión eficientes y gestionando riesgos fiscales complejos.',
    linkedin: 'https://www.linkedin.com/in/claudiacisternas',
    areas: [
      'Auditoría de estados financieros',
      'Sistemas indirectos',
      'Contabilidad internacional y tributación',
      'Asesoría tributaria sobre operación',
      'Gestión tributaria de inversiones internacionales'
    ],
    experience: [
      'Liderazgo de equipos estratégicos para recepción de expedientes en la gestión de inversiones extranjeras',
      'Diseño de metodologías fiscales eficientes para gestionar riesgos de entornos globales'
    ]
  },
  {
    name: 'Carina Oneto',
    role: 'Licenciada en Matemáticas',
    image: 'https://static.readdy.ai/image/686f0f43be94224693ff27abb2a7a5ca/f0a309a658b8fd4c555c9db3f6ec9ab8.png',
    description: 'Con casi 30 años en el sector financiero, Carina es especialista en regulación, tributación y normativas del mercado de capitales, con énfasis en inversión extranjera y procesos operativos. Ha liderado equipos en Citibank, N.A. y Banco de Chile, impulsando estrategias de financiamiento e inversión con enfoque regulatorio y regulatorio.',
    linkedin: 'https://www.linkedin.com/in/carina-oneto-izzo/',
    areas: [
      'Problemas operativos e mercados de capitales',
      'Tributación y regulación',
      'Asesoría en inversión extranjera',
      'Gestión de procesos operativos y cumplimiento financiero'
    ],
    experience: [
      'Gestión y capitalización de procesos operativos en mercados de capitales',
      'Liderazgo en estrategias de financiamiento con visión regulatoria y tributaria'
    ]
  },
  {
    name: 'Carolina Castagneto',
    role: 'Abogada, MBA',
    image: 'https://static.readdy.ai/image/686f0f43be94224693ff27abb2a7a5ca/73eb03fae07fdb6551dc9a8de84425a7.png',
    description: 'Con más de 20 años de trayectoria en áreas comerciales y de producto del mercado de capitales, Carolina cuenta con gran experiencia en capacitación en legislación y normativas del mercado de capitales y estrategias legales para empresas multifamiliares.',
    linkedin: 'https://www.linkedin.com/in/carolina-castagneto/',
    areas: [
      'Sociedades y gobernanza corporativa',
      'Legislación de mercado de capitales',
      'Asesoría en inversiones extranjeras',
      'Legislación y desarrollo de productos de inversión',
      'Regulación'
    ],
    experience: [
      'Participación como socia y consejera legal de empresas multifamiliares',
      'Capacitación y desarrollo de modelos de cumplimiento para el legal normativo'
    ]
  }
];

export default function About() {
  return (
    <section id="sobre-nosotras" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Equipo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce a las profesionales que lideran nuestra empresa consultora con pasión y experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-stone-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-full aspect-square overflow-hidden bg-stone-100">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-4 text-sm">
                  {founder.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {founder.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Áreas de Experiencia</h4>
                  <ul className="space-y-2">
                    {founder.areas.map((area, idx) => (
                      <li key={idx} className="text-gray-600 text-xs flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Experiencia Destacada</h4>
                  <ul className="space-y-2">
                    {founder.experience.map((exp, idx) => (
                      <li key={idx} className="text-gray-600 text-xs flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-box-fill mr-2 text-lg"></i>
                  Ver perfil en LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-10 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-gray-700 leading-relaxed text-base">
              Convertimos la visión de los dueños en una estructura robusta y delegable, asegurando que la empresa no dependa exclusivamente de sus fundadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}