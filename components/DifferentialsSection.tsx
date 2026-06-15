import { differentials } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import MotionReveal from "./MotionReveal";

export default function DifferentialsSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="diferenciais-titulo"
    >
      <div className="container-default">
        <div className="flex flex-col gap-14">
          <SectionTitle
            eyebrow="Diferenciais"
            title="Um atendimento pensado para sua segurança e conforto"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {differentials.map((item, i) => (
              <MotionReveal key={item.id} delay={i * 0.07}>
                <div className="group flex flex-col gap-4 bg-brand-offwhite hover:bg-white border border-transparent hover:border-brand-cream rounded-2xl p-6 md:p-7 shadow-none hover:shadow-card transition-all duration-300 cursor-default">
                  {/* Número elegante */}
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-light text-brand-gold/40 leading-none">
                      {item.number}
                    </span>
                    <div className="w-6 h-px bg-brand-gold/30 group-hover:w-10 group-hover:bg-brand-gold transition-all duration-300" aria-hidden="true" />
                  </div>

                  {/* Título */}
                  <h3 className="font-serif text-lg md:text-xl font-light text-brand-black leading-snug">
                    {item.title}
                  </h3>

                  {/* Descrição */}
                  <p className="font-sans text-sm text-brand-gray-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
