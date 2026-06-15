import { dentistInfo, WHATSAPP_LINK } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import MotionReveal from "./MotionReveal";

export default function LocationSection() {
  return (
    <section
      id="localizacao"
      className="section-padding bg-brand-offwhite"
      aria-labelledby="localizacao-titulo"
    >
      <div className="container-default">
        <div className="flex flex-col gap-14">
          <SectionTitle
            eyebrow="Localização"
            title="Localização e horários de atendimento"
          />

          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Mapa — col 3 */}
            <MotionReveal direction="left" className="lg:col-span-3">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[420px] rounded-2xl overflow-hidden shadow-deep bg-brand-blue-clinical border border-brand-blue-mid/20">
                {/*
                  MAPA DO GOOGLE MAPS:
                  1. Acesse: https://maps.google.com
                  2. Busque o endereço do consultório
                  3. Clique em "Compartilhar" > "Incorporar um mapa"
                  4. Copie o link do atributo "src" do iframe
                  5. Cole abaixo no lugar da URL placeholder

                  Lembre-se: se o site estiver publicado com HTTPS, o mapa
                  também precisa ser carregado via HTTPS.
                */}
                <iframe
                  src={dentistInfo.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localização do consultório da ${dentistInfo.name} em ${dentistInfo.city}`}
                  className="absolute inset-0 w-full h-full"
                />

                {/* Overlay placeholder caso o mapa não carregue */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-brand-blue-clinical pointer-events-none opacity-0 peer-error:opacity-100">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-brand-blue-deep/40" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="font-sans text-sm text-brand-blue-deep/60">
                    Configure o link do Google Maps em lib/data.ts
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* Informações — col 2 */}
            <MotionReveal direction="right" delay={0.15} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-card border border-brand-cream overflow-hidden">
                {/* Header */}
                <div className="bg-brand-blue-deep px-6 py-7">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold mb-2">
                    Consultório
                  </p>
                  <p className="font-serif text-xl font-light text-white leading-snug">
                    {dentistInfo.name}
                  </p>
                  <p className="font-sans text-xs text-white/55 mt-1">{dentistInfo.specialty}</p>
                </div>

                {/* Dados */}
                <div className="px-6 py-6 flex flex-col gap-5">
                  {/* Endereço */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-blue-clinical flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-blue-deep" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-gray-light mb-1">Endereço</p>
                      <address className="not-italic font-sans text-sm text-brand-black leading-relaxed">
                        {dentistInfo.address}
                        <br />
                        {dentistInfo.neighborhood}
                        <br />
                        {dentistInfo.cityFull}
                      </address>
                    </div>
                  </div>

                  <div className="w-full h-px bg-brand-cream" aria-hidden="true" />

                  {/* Horários */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-blue-clinical flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-blue-deep" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-gray-light mb-1">Horários</p>
                      <p className="font-sans text-sm text-brand-black leading-relaxed whitespace-pre-line">
                        {dentistInfo.hours}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-brand-cream" aria-hidden="true" />

                  {/* Telefone */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-blue-clinical flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-blue-deep" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-gray-light mb-1">Contato</p>
                      <a
                        href={`tel:${dentistInfo.phone}`}
                        className="font-sans text-sm text-brand-black hover:text-brand-gold transition-colors cursor-pointer"
                      >
                        {dentistInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="px-6 pb-6 flex flex-col gap-3">
                  <a
                    href={dentistInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full border border-brand-blue-deep text-brand-blue-deep hover:bg-brand-blue-deep hover:text-white font-sans font-semibold text-sm py-3 rounded-full transition-all duration-300 cursor-pointer"
                    aria-label="Abrir localização no Google Maps"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Abrir no Google Maps
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center"
                    aria-label="Agendar avaliação pelo WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Agendar pelo WhatsApp
                  </a>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
