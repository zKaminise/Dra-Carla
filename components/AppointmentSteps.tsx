import { appointmentSteps, WHATSAPP_LINK } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import MotionReveal from "./MotionReveal";

export default function AppointmentSteps() {
  return (
    <section
      className="section-padding bg-brand-black overflow-hidden relative"
      aria-labelledby="atendimento-titulo"
    >
      {/* Detalhe visual de fundo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue-deep/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-gold/5 blur-[80px]" />
      </div>

      <div className="container-default relative z-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTitle
              eyebrow="Como funciona"
              title="O atendimento do início ao fim"
              subtitle="Um processo pensado para que o paciente se sinta seguro, bem informado e acompanhado em cada etapa."
              light
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Linha vertical — desktop */}
            <div
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-8 lg:gap-0">
              {appointmentSteps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <MotionReveal
                    key={step.number}
                    delay={i * 0.1}
                    direction={isEven ? "left" : "right"}
                    className={`relative lg:grid lg:grid-cols-2 gap-8 lg:gap-16 ${
                      i !== appointmentSteps.length - 1 ? "lg:pb-16" : ""
                    }`}
                  >
                    {/* Ponto central */}
                    <div
                      className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-blue-deep border border-brand-gold/40 items-center justify-center z-10"
                      aria-hidden="true"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    </div>

                    {/* Conteúdo — alterna lados */}
                    <div
                      className={`flex items-start gap-5 ${
                        isEven ? "lg:col-start-1 lg:text-right lg:justify-end" : "lg:col-start-2"
                      }`}
                    >
                      <div
                        className={`flex flex-col gap-2 max-w-sm ${
                          isEven ? "items-start lg:items-end" : "items-start"
                        }`}
                      >
                        {/* Número */}
                        <span className="font-serif text-5xl font-light text-brand-gold/20 leading-none">
                          {step.number}
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl font-light text-white">
                          {step.title}
                        </h3>
                        <p className="font-sans text-sm text-white/55 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <MotionReveal className="flex justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Dar o primeiro passo e chamar no WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Dar o primeiro passo
            </a>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
