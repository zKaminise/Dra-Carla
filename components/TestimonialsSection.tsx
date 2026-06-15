import { testimonials, dentistInfo } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import MotionReveal from "./MotionReveal";

// Ícone de aspas customizado
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M0 24V14.4C0 10.56 0.96 7.36 2.88 4.8C4.96 2.24 7.84 0.64 11.52 0L13.44 3.36C11.04 3.84 9.12 4.96 7.68 6.72C6.24 8.48 5.6 10.4 5.76 12.48H11.52V24H0ZM18.56 24V14.4C18.56 10.56 19.52 7.36 21.44 4.8C23.52 2.24 26.4 0.64 30.08 0L32 3.36C29.6 3.84 27.68 4.96 26.24 6.72C24.8 8.48 24.16 10.4 24.32 12.48H30.08V24H18.56Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Estrelas para avaliação visual
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-brand-gold" aria-hidden="true">
          <path d="M8 1.5l1.49 4.59H15l-3.9 2.83 1.49 4.59L8 10.68l-4.59 3.83 1.49-4.59L1 6.09h5.51L8 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding bg-brand-offwhite"
      aria-labelledby="depoimentos-titulo"
    >
      <div className="container-default">
        <div className="flex flex-col gap-14">
          <SectionTitle
            eyebrow="Depoimentos"
            title="O que os pacientes dizem"
            subtitle="Avaliações reais de quem já passou pelo consultório."
          />

          {/* Aviso de placeholder — remover quando tiver depoimentos reais 
          <MotionReveal>
            <div className="bg-brand-gold/8 border border-brand-gold/20 rounded-xl px-5 py-4 flex gap-3 items-start">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-sans text-xs text-brand-gray-text leading-relaxed">
                <strong className="font-semibold text-brand-black">Placeholder:</strong>{" "}
                Substitua os depoimentos abaixo por avaliações reais dos seus pacientes.
                Nunca publique depoimentos fictícios. Você pode coletar avaliações pelo
                Google, Instagram ou diretamente pelo WhatsApp.
              </p>
            </div>
          </MotionReveal>*/}

          {/* Cards de depoimentos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((item, i) => (
              <MotionReveal key={item.id} delay={i * 0.08}>
                <div className="bg-white border border-brand-cream rounded-2xl p-6 md:p-7 shadow-card flex flex-col gap-5 h-full">
                  {/* Aspas + estrelas */}
                  <div className="flex items-start justify-between">
                    <QuoteIcon className="w-6 h-5 text-brand-gold/30" />
                    <Stars />
                  </div>

                  {/* Depoimento */}
                  <p className="font-sans text-sm text-brand-gray-text leading-relaxed flex-1 italic">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-3 pt-1 border-t border-brand-cream">
                    <div className="w-8 h-8 rounded-full bg-brand-blue-clinical flex items-center justify-center shrink-0">
                      <span className="font-sans text-xs font-semibold text-brand-blue-deep">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-brand-black">{item.name}</p>
                      <p className="font-sans text-xs text-brand-gray-light">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Link Google Reviews */}
          <MotionReveal className="flex justify-center">
            <a
              href={dentistInfo.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-sans text-sm font-medium text-brand-gray-text hover:text-brand-black border border-brand-cream hover:border-brand-gold/30 bg-white px-5 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-card hover:shadow-card-hover"
              aria-label="Ver avaliações no Google"
            >
              {/* Google icon simplificado */}
              <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Ver avaliações no Google
            </a>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
