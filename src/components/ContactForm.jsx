// src/components/ContactForm.jsx
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mzzngzrr"); // 👈 tu ID de Formspree

  if (state.succeeded) {
    return (
      <section id="contacto">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            ¡Gracias por contactarnos!
          </h2>
          <p className="mt-2 text-gray-600">
            Recibimos tu mensaje y te vamos a responder a la brevedad.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-left mb-10">
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
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#163cac] focus:ring-[#163cac]"
            />
          </div>

          {/* Empresa */}
          <div>
            <label
              htmlFor="empresa"
              className="block text-sm font-medium text-gray-700"
            >
              Empresa
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
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
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#163cac] focus:ring-[#163cac]"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
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
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#163cac] focus:ring-[#163cac]"
            ></textarea>
            <ValidationError
              prefix="Mensaje"
              field="mensaje"
              errors={state.errors}
            />
          </div>

          {/* Botón */}
          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-lg px-6 py-3 font-medium text-white shadow-md transition disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#163cac" }}
            >
              {state.submitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
