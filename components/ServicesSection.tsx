import { services, WHATSAPP_LINK } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import TreatmentCard from "./TreatmentCard";
import MotionReveal from "./MotionReveal";

export default function ServicesSection() {
  return (
    <section
      id="tratamentos"
      className="section-padding bg-white"
      aria-labelledby="tratamentos-titulo"
    >
      <div className="container-default">
        <div className="flex flex-col gap-14">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionTitle
              eyebrow="Tratamentos"
              title="Odontologia pensada para você"
              subtitle="Cada tratamento começa com uma avaliação individual para entender suas necessidades, histórico e objetivos."
              align="left"
            />
            <MotionReveal delay={0.2} className="shrink-0">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary whitespace-nowrap"
                aria-label="Tirar dúvidas sobre tratamentos pelo WhatsApp"
              >
                Tirar dúvidas pelo WhatsApp
              </a>
            </MotionReveal>
          </div>

          {/* Grid de cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <TreatmentCard
                key={service.id}
                name={service.name}
                description={service.description}
                tag={service.tag}
                index={i}
              />
            ))}
          </div>

          {/* CTA pós-serviços */}
          <MotionReveal>
            <div className="bg-brand-blue-clinical/40 border border-brand-blue-mid/30 rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-serif text-xl md:text-2xl font-light text-brand-black leading-tight">
                  Não encontrou o que procura?
                </p>
                <p className="font-sans text-sm text-brand-gray-text leading-relaxed max-w-lg">
                  Entre em contato pelo WhatsApp para verificar se o procedimento é
                  realizado no consultório e entender como funciona a avaliação inicial.
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
                aria-label="Chamar no WhatsApp para tirar dúvidas sobre tratamentos"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar pelo WhatsApp
              </a>
            </div>
          </MotionReveal>

        </div>
      </div>
    </section>
  );
}
