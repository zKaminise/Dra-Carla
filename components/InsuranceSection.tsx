import { insurancePlans, WHATSAPP_LINK } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import MotionReveal from "./MotionReveal";

export default function InsuranceSection() {
  return (
    <section
      id="convenios"
      className="section-padding bg-brand-offwhite"
      aria-labelledby="convenios-titulo"
    >
      <div className="container-default">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Texto */}
          <div className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="Convênios e particular"
              title="Formas de atendimento"
              align="left"
            />

            <MotionReveal delay={0.15}>
              <div className="flex flex-col gap-4">
                <p className="font-sans text-base md:text-lg text-brand-gray-text leading-relaxed">
                  Realizamos atendimento particular e aceitamos convênios selecionados.
                  A disponibilidade pode variar conforme o procedimento e a cobertura
                  do plano.
                </p>
                <p className="font-sans text-sm text-brand-gray-text leading-relaxed">
                  Para confirmar a cobertura antes do agendamento, entre em contato pelo
                  WhatsApp informando o nome do convênio e o procedimento de interesse.
                </p>
              </div>
            </MotionReveal>

            {/* Chips de convênios */}
            {insurancePlans.length > 0 && (
              <MotionReveal delay={0.25}>
                <div className="flex flex-col gap-3">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-brand-gray-light">
                    Convênios aceitos
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {insurancePlans.map((plan) => (
                      <span
                        key={plan}
                        className="font-sans text-sm font-medium text-brand-blue-deep bg-brand-blue-clinical px-4 py-2 rounded-full border border-brand-blue-mid/30"
                      >
                        {plan}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            )}

            {/* CTAs */}
            <MotionReveal delay={0.35}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  aria-label="Consultar cobertura de convênio pelo WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar cobertura
                </a>
              </div>
            </MotionReveal>

            {/* Aviso ético */}
            <MotionReveal delay={0.4}>
              <p className="font-sans text-xs text-brand-gray-light leading-relaxed bg-brand-cream border border-brand-gold/20 rounded-xl px-4 py-3">
                A confirmação de cobertura deve ser realizada antes do agendamento.
                A disponibilidade de atendimento por convênio pode variar conforme
                o procedimento.
              </p>
            </MotionReveal>
          </div>

          {/* Card visual */}
          <MotionReveal direction="right">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-brand-gold/8 rounded-full blur-2xl" aria-hidden="true" />
              <div className="bg-white rounded-2xl shadow-deep border border-brand-cream overflow-hidden">
                {/* Topo com gradiente */}
                <div className="bg-brand-blue-deep px-8 py-10 flex flex-col gap-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                    Formas de atendimento
                  </span>
                  <p className="font-serif text-2xl font-light text-white leading-snug">
                    Atendimento particular e convênios selecionados
                  </p>
                </div>

                {/* Itens */}
                <div className="px-8 py-8 flex flex-col gap-5">
                  {[
                    { label: "Particular", desc: "Pagamento direto com parcelamento disponível" },
                    { label: "Convênios", desc: "Consulte disponibilidade antes de agendar" },
                    { label: "PIX e cartão", desc: "Principais bandeiras de débito e crédito" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-sans text-sm font-semibold text-brand-black">{item.label}</p>
                        <p className="font-sans text-xs text-brand-gray-text mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-brand-cream px-8 py-5">
                  <p className="font-sans text-xs text-brand-gray-light">
                    Dúvidas sobre formas de pagamento? Consulte pelo WhatsApp antes de agendar.
                  </p>
                </div>
              </div>
            </div>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
}
