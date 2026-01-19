const advantages = [
  {
    icon: 'ri-award-line',
    title: 'Seniority comprobable y accesible',
    description: 'Las socias nos involucramos directamente en cada proyecto. Nuestra trayectoria en banca, finanzas, consultoría, legal corporativo y tributación, nos permite entregar estándares propios de grandes empresas, pero adaptados a la realidad y recursos de una empresa mediana o familiar.'
  },
  {
    icon: 'ri-focus-3-line',
    title: 'Integración real entre lo legal, tributario, operativo y estratégico: (visión 360°)',
    description: 'Articulamos una visión única donde el diseño legal conversa con la estrategia tributaria, la contabilidad alimenta decisiones del directorio, los riesgos se integran a la operación, la sucesión se conecta con la gobernanza. Esto evita duplicidades, errores y diagnósticos inconexos.'
  },
  {
    icon: 'ri-time-line',
    title: 'Enfoque práctico y sin burocracia',
    description: 'En empresas medianas el tiempo es limitado y la operación no se puede detener. Ofrecemos modelos simples, con controles claros, procesos entendibles y reportes accionables para mejorar la gestión sin agregar capas de documentos que nadie usa.'
  },
  {
    icon: 'ri-team-fill',
    title: 'Soluciones que protegen al dueño y preparan el futuro',
    description: 'Combinamos el orden de hoy con la estrategia de mañana. Aseguramos cumplimiento y control, pero también entregamos herramientas para delegar, instalar gobierno corporativo, anticipar riesgos, planificar sucesión y escalar el negocio con bases sólidas.'
  },
  {
    icon: 'ri-line-chart-fill',
    title: 'Acompañamiento cercano y diseño a medida',
    description: 'Cada empresa familiar y mediana tiene dinámicas propias. No aplicamos plantillas estandarizadas; adaptamos cada modelo a la cultura, tamaño, urgencias y madurez del negocio. Nuestro rol es acompañar, traducir lo complejo y habilitar decisiones.'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Convertimos la visión de los dueños en una estructura robusta y delegable',
    description: 'Asegurando que la empresa no dependa exclusivamente de sus fundadores. En empresas medianas el tiempo es limitado y la operación no se puede detener. Ofrecemos modelos simples, con controles claros, procesos entendibles y reportes accionables para mejorar la gestión sin agregar capas de documentos que nadie usa.'
  }
];

export default function Advantages() {
  return (
    <section id="ventajas" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aportamos un enfoque que no suele encontrarse en una sola consultora. Reunimos experiencia real en alta dirección, tributación, legal corporativo, riesgos, gobierno corporativo, procesos y estrategia, integrando estas miradas para ofrecer soluciones completas, simples y aplicables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${advantage.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
