import MotionReveal from "./MotionReveal";

const items = [
  {
    value: "Hora marcada",
    label: "Atendimento pontual e sem fila de espera",
  },
  {
    value: "Individualizado",
    label: "Planejamento exclusivo para cada caso",
  },
  {
    value: "Particular",
    label: "e convênios selecionados",
  },
  {
    value: "Acesso fácil",
    label: "Localização central e estacionamento",
  },
];

export default function TrustBar() {
  return (
    <section
      className="bg-brand-blue-deep py-10 md:py-12"
      aria-label="Diferenciais principais"
    >
      <div className="container-default">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, i) => (
            <MotionReveal key={item.value} delay={i * 0.08} direction="up">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-brand-gold/60" aria-hidden="true" />
                  <span className="font-serif text-lg md:text-xl font-light text-white leading-tight">
                    {item.value}
                  </span>
                </div>
                <p className="font-sans text-xs text-white/50 leading-relaxed pl-6">
                  {item.label}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
