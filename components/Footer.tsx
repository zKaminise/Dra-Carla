import Link from "next/link";
import { dentistInfo, WHATSAPP_LINK } from "@/lib/data";

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#convenios", label: "Convênios" },
  { href: "#localizacao", label: "Localização" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal border-t border-white/5" aria-label="Rodapé">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Corpo principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 md:py-16">

          {/* Coluna 1 — Identidade */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <p className="font-serif text-xl font-light text-white leading-tight">
                {dentistInfo.name}
              </p>
              <p className="font-sans text-xs text-brand-gold uppercase tracking-[0.18em] mt-1">
                {dentistInfo.specialty}
              </p>
            </div>
            <p className="font-sans text-sm text-white/40 leading-relaxed max-w-xs">
              Atendimento odontológico individualizado com foco em saúde bucal,
              estética e cuidado com cada etapa do tratamento.
            </p>
            {/* CRO */}
            <p className="font-sans text-xs text-white/30">{dentistInfo.cro}</p>

            {/* Instagram */}
            <a
              href={dentistInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-sans text-sm text-white/50 hover:text-white transition-colors duration-200 cursor-pointer w-fit"
              aria-label="Seguir no Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>

          {/* Coluna 2 — Links rápidos */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
              Links rápidos
            </p>
            <nav aria-label="Links rápidos do rodapé">
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
              Contato
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-xs text-white/30 mb-1">Endereço</p>
                <address className="not-italic font-sans text-sm text-white/50 leading-relaxed">
                  {dentistInfo.address}
                  <br />
                  {dentistInfo.neighborhood}
                  <br />
                  {dentistInfo.cityFull}
                </address>
              </div>
              <div>
                <p className="font-sans text-xs text-white/30 mb-1">Horários</p>
                <p className="font-sans text-sm text-white/50 leading-relaxed whitespace-pre-line">
                  {dentistInfo.hours}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs text-white/30 mb-1">WhatsApp</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-brand-gold hover:text-brand-gold-light transition-colors duration-200 cursor-pointer"
                  aria-label="Enviar mensagem pelo WhatsApp"
                >
                  {dentistInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/25 text-center sm:text-left leading-relaxed">
            As informações deste site têm caráter informativo e não substituem uma avaliação
            profissional individualizada. {dentistInfo.cro}.
          </p>
          <p className="font-sans text-xs text-white/20 whitespace-nowrap">
            © {currentYear} {dentistInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
