import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Spinner SVG igual al de Spinner.astro
function Spinner() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
      <rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1">
        <animate id="svgSpinnersBlocksShuffle20" fill="freeze" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s" values="1;13" />
        <animate id="svgSpinnersBlocksShuffle21" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s" values="1;13" />
        <animate id="svgSpinnersBlocksShuffle22" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s" values="13;1" />
        <animate id="svgSpinnersBlocksShuffle23" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s" values="13;1" />
      </rect>
      <rect width="10" height="10" x="1" y="13" fill="currentColor" rx="1">
        <animate id="svgSpinnersBlocksShuffle24" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s" values="13;1" />
        <animate id="svgSpinnersBlocksShuffle25" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s" values="1;13" />
        <animate id="svgSpinnersBlocksShuffle26" fill="freeze" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s" values="1;13" />
        <animate id="svgSpinnersBlocksShuffle27" fill="freeze" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s" values="13;1" />
      </rect>
    </svg>
  );
}

interface ContactFormProps {
  lang?: "es" | "en";
}


export default function ContactForm({ lang }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

 
  // Enviar email
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        "contact_service", 
        "contact_template", 
        formRef.current!,
        { publicKey: "hdrmesVs7buYxAVih" } 
      );
      if (lang === "es") {
        window.location.href = "/EmailSentEs";
      } else {
        window.location.href = "/EmailSent";
      }
    } catch (error) {
      if (lang === "es") {
        alert("Error al enviar el email, por favor intente nuevamente");
      } else {
        alert("Error sending email, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-full">
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 w-full p-4 justify-center items-center">
          <input
            type="text"
            id="name"
            name="name"
            required
            className="bg-section-secondary w-full p-4 border-gray-300 rounded-full"
            placeholder={lang === "es" ? "Nombre completo" : "Full Name"}
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            className="bg-section-secondary w-full p-4 border-gray-300 rounded-full"
            placeholder={lang === "es" ? "Correo electrónico" : "Email"}
          />
          <input
            type="text"
            id="title"
            name="title"
            required
            className="bg-section-secondary w-full p-4 border-gray-300 rounded-full"
            placeholder={lang === "es" ? "Asunto" : "Subject"}
          />
          <textarea
            id="message"
            name="message"
            required
            className="bg-section-secondary w-full p-4 border-gray-300 rounded-2xl resize-none field-sizing-content max-h-40 h-28"
            placeholder={lang === "es" ? "Mensaje" : "Message"}
          ></textarea>
          <button
            className="w-[100px] lg:w-[250px] p-2 m-8 rounded-3xl bg-tertiary-400 text-white font-semibold text-center text-lg hover:bg-tertiary-200 transition duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2"
            type="submit"
            disabled={loading}
          >
            {loading && <Spinner />}
            <span className={loading ? "hidden" : "block"}>
              {lang === "es" ? "Enviar" : "Send"}
            </span>
          </button>
        </form>
      </section>
    </>
  );
} 