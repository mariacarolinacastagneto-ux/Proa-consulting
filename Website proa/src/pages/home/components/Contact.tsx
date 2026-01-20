import { useState, FormEvent, ChangeEvent } from 'react';
export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });
      const response = await fetch('https://readdy.ai/api/form/d5bslandcu97hjrn3s4g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-normal text-gray-900 mb-4 italic">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos listos para ayudarte a transformar tu empresa. Completa el formulario y nos pondremos en contacto contigo
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="+56 9 8765 4321"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">Máximo 500 caracteres</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </div>
              )}
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#D4C5B0] to-[#C9B89A] rounded-2xl p-8">
              <h3 className="font-['Playfair_Display'] text-2xl font-normal text-gray-900 mb-6 italic">
                Información de Contacto
              </h3>
            <br>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div className="ml-3 md:ml-4 min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Email</h4>
                    <p className="text-gray-700 text-[10px] md:text-sm break-words">carolina.castagneto@proaconsulting.cl</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-whatsapp-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">WhatsApp</h4>
                    <p className="text-gray-700 text-xs md:text-sm">+56 9 9231 8415</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Oficina</h4>
                    <p className="text-gray-700 text-xs md:text-sm">Santiago, Chile</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-lg md:text-xl text-white"></i>
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Horario</h4>
                    <p className="text-gray-700 text-xs md:text-sm">Lunes a Viernes: 9:00
- 18:00</p>
                  </div>
                </div>
