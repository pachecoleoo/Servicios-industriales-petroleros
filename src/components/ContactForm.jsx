// src/components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", form);
    alert("Formulario enviado ✅ (acá iría tu lógica de backend o email)");
  };

  return (
    <section id="contacto" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Contáctanos</h2>
          <p className="mt-2 text-gray-600">
            Dejanos tu consulta y nos pondremos en contacto lo antes posible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#163cac] focus:ring-[#163cac]"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#163cac] focus:ring-[#163cac]"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={form.mensaje}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#163cac] focus:ring-[#163cac]"
            ></textarea>
          </div>

          {/* Botón */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full rounded-lg px-6 py-3 font-medium text-white shadow-md transition"
              style={{ backgroundColor: "#163cac" }}
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
