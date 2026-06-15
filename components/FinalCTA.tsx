import { dentistInfo, WHATSAPP_LINK } from "@/lib/data";
import MotionReveal from "./MotionReveal";

export default function FinalCTA() {
  return (
    <section
      className="relative section-padding bg-brand-black overflow-hidden"
      aria-labelledby="cta-final-titulo"
    >
      {/* Decoração de fundo — gradiente CSS, sem blur pesado */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 90% 0%, rgba(200,164,93,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(30,52,70,0.35) 0%, transparent 70%)",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      </div>

      <div className="container-default relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">

          {/* Eyebrow */}
          <MotionReveal>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-brand-gold/50" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Próximo passo
              </span>
              <div className="w-10 h-px bg-brand-gold/50" aria-hidden="true" />
            </div>
          </MotionReveal>

          {/* Título principal */}
          <MotionReveal delay={0.1}>
            <h2
              id="cta-final-titulo"
              className="font-serif font-light text-white leading-tight tracking-tight text-4xl sm:text-5xl lg:text-[3.25rem] text-balance"
            >
              Agende sua avaliação e receba uma{" "}
              <em className="not-italic gradient-text-gold">orientação personalizada.</em>
            </h2>
          </MotionReveal>

          {/* Texto */}
          <MotionReveal delay={0.2}>
            <p className="font-sans text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
              O primeiro passo é entender seu caso com calma, esclarecer dúvidas e indicar
              o caminho mais adequado para a sua saúde bucal.{" "}
              <span className="text-white/80">Sem pressa. Sem compromisso imediato.</span>
            </p>
          </MotionReveal>

          {/* Informações rápidas */}
          <MotionReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {[
                { label: "Atendimento com hora marcada" },
                { label: dentistInfo.cityFull },
                { label: "Particular e convênios" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" aria-hidden="true" />
                  <span className="font-sans text-sm text-white/50">{item.label}</span>
                </div>
              ))}
            </div>
          </MotionReveal>

          {/* CTA principal */}
          <MotionReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-sans font-semibold text-base tracking-wide px-8 py-5 rounded-full transition-all duration-300 cursor-pointer shadow-gold hover:shadow-lg hover:-translate-y-0.5"
                aria-label="Chamar a dentista no WhatsApp para agendar avaliação"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp
              </a>

              <a
                href="#sobre"
                className="font-sans text-sm text-white/40 hover:text-white/70 transition-colors duration-200 cursor-pointer"
              >
                Conhecer mais sobre a Dra.
              </a>
            </div>
          </MotionReveal>

          {/* Aviso ético sutil */}
          <MotionReveal delay={0.5}>
            <p className="font-sans text-xs text-white/25 max-w-md leading-relaxed">
              As informações deste site têm caráter informativo e não substituem
              uma avaliação profissional individualizada.
            </p>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
