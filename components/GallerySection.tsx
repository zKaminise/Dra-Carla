import SectionTitle from "./SectionTitle";
import MotionReveal from "./MotionReveal";

/*
  SEÇÃO DE GALERIA — AMBIENTE DO CONSULTÓRIO

  Para ativar a galeria real:
  1. Coloque as fotos em /public/galeria/foto-1.jpg, foto-2.jpg etc.
  2. Substitua os placeholders abaixo pelos componentes <Image /> do Next.js
  3. Remova a div de placeholder e use imagens reais

  Evite usar fotos stock genéricas. Fotos reais do consultório
  transmitem muito mais confiança e autenticidade.
*/

const galleryPlaceholders = [
  { id: 1, label: "Recepção / Sala de espera", aspect: "aspect-square" },
  { id: 2, label: "Cadeira odontológica e equipamentos", aspect: "aspect-[4/5] row-span-2" },
  { id: 3, label: "Detalhe do consultório", aspect: "aspect-video" },
  { id: 4, label: "Equipamentos modernos", aspect: "aspect-square" },
];

export default function GallerySection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="galeria-titulo"
    >
      <div className="container-default">
        <div className="flex flex-col gap-8">
          <SectionTitle
            eyebrow="Estrutura"
            title="Um ambiente preparado para cuidar de você"
            subtitle="Consultório moderno e organizado, com equipamentos adequados para um atendimento seguro e confortável."
          />

          {/* Aviso placeholder 
          <MotionReveal>
            <div className="bg-brand-gold/8 border border-brand-gold/20 rounded-xl px-5 py-4 flex gap-3 items-start">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-sans text-xs text-brand-gray-text leading-relaxed">
                <strong className="font-semibold text-brand-black">Placeholder de galeria:</strong>{" "}
                Substitua os blocos abaixo por fotos reais do consultório. Coloque as
                imagens em{" "}
                <code className="font-mono text-brand-gold bg-brand-cream px-1 rounded">
                  /public/galeria/
                </code>{" "}
                e use{" "}
                <code className="font-mono text-brand-gold bg-brand-cream px-1 rounded">
                  next/image
                </code>{" "}
                para carregamento otimizado.
              </p>
            </div>
          </MotionReveal>*/}

          {/* Grid assimétrico */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {galleryPlaceholders.map((item, i) => (
              <MotionReveal
                key={item.id}
                delay={i * 0.08}
                className={i === 1 ? "md:row-span-2" : ""}
              >
                <div
                  className={`relative bg-brand-cream border border-brand-gold/10 rounded-2xl overflow-hidden flex items-center justify-center ${
                    i === 1 ? "h-full min-h-[300px]" : "aspect-square"
                  }`}
                  role="img"
                  aria-label={`Placeholder: ${item.label}`}
                >
                  {/* Placeholder visual */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-gold/50" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <p className="font-sans text-xs text-brand-gray-light text-center leading-snug">
                      {item.label}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
