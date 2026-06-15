import Image from "next/image";
import { dentistInfo, WHATSAPP_LINK } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import MotionReveal from "./MotionReveal";

const highlights = [
  { label: "Formação", value: "[Universidade — Ano de conclusão]" },
  { label: "Especialização", value: "[Área de especialização — Instituição]" },
  { label: "Registro profissional", value: dentistInfo.cro },
  { label: "Localidade", value: dentistInfo.cityFull },
];

export default function AboutDentist() {
  return (
    <section
      id="sobre"
      className="section-padding bg-brand-offwhite"
      aria-labelledby="sobre-titulo"
    >
      <div className="container-default">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Foto secundária */}
          <MotionReveal direction="left" className="relative">
            <div className="relative">
              {/* Detalhe dourado */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-brand-blue-clinical rounded-2xl" aria-hidden="true" />

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-deep">
                {/*
                  FOTO SECUNDÁRIA (opcional):
                  Coloque em /public/foto-dentista-2.jpg
                  Se não tiver segunda foto, pode remover este bloco ou usar a mesma.
                */}
                <Image
                  src="/foto-dentista.png"
                  alt={`${dentistInfo.name} no consultório odontológico em ${dentistInfo.city}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent" />
              </div>

              {/* Card assinatura */}
              <div className="absolute -bottom-3 right-8 bg-white rounded-xl shadow-card px-5 py-4 border border-brand-cream">
                <p className="font-serif text-base font-light text-brand-black">{dentistInfo.name}</p>
                <p className="font-sans text-xs text-brand-gray-text mt-0.5">{dentistInfo.specialty}</p>
                <p className="font-sans text-[10px] text-brand-gold uppercase tracking-wider mt-1">{dentistInfo.cro}</p>
              </div>
            </div>
          </MotionReveal>

          {/* Texto */}
          <div className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="Sobre a profissional"
              title={`Sobre a ${dentistInfo.firstName}`}
              align="left"
            />

            <MotionReveal delay={0.2}>
              <div className="flex flex-col gap-4">
                <p className="font-sans text-base md:text-lg text-brand-gray-text leading-relaxed">
                  Cirurgiã-dentista dedicada a oferecer um atendimento claro, cuidadoso e
                  personalizado, unindo conhecimento técnico, sensibilidade estética e
                  atenção à experiência do paciente em cada consulta.
                </p>
                <p className="font-sans text-base text-brand-gray-text leading-relaxed">
                  {/* Edite este parágrafo com a história real da dentista */}
                  [Adicione aqui um parágrafo sobre a trajetória, motivações e filosofia
                  de atendimento da Dra. Carla Lemes. Conte o que a levou a escolher a
                  odontologia, o que a diferencia e como ela conduz seu trabalho.]
                </p>
                <p className="font-sans text-base text-brand-gray-text leading-relaxed">
                  Da primeira avaliação ao acompanhamento, cada detalhe é conduzido com
                  clareza e responsabilidade, para que o paciente se sinta seguro e bem
                  informado em todas as etapas do tratamento.
                </p>
              </div>
            </MotionReveal>

            {/* Grid de destaques */}
            <MotionReveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-brand-cream rounded-xl px-4 py-4 shadow-card"
                  >
                    <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-1">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm font-medium text-brand-black leading-snug">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </MotionReveal>

            {/* CTA */}
            <MotionReveal delay={0.4}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit"
                aria-label="Agendar avaliação com a dentista pelo WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar avaliação
              </a>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
