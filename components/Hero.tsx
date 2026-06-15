"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { dentistInfo, WHATSAPP_LINK } from "@/lib/data";

const badges = [
  ...dentistInfo.specialties,
  dentistInfo.cityFull,
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black"
      aria-label="Apresentação"
    >
      {/* Background gradiente e blur circles decorativos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-blue-deep/30 blur-[120px]" />
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-gold/8 blur-[100px]" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-blue-clinical/5 blur-[80px]" />
        {/* Grade sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,164,93,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,93,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-default relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-28 md:py-36 lg:py-0 lg:min-h-screen">

          {/* Coluna esquerda — Texto */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">

            {/* Credencial discreta */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-8 h-px bg-brand-gold" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                {dentistInfo.cro}
              </span>
            </motion.div>

            {/* Headline principal */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="font-serif font-light text-white leading-[1.1] tracking-tight text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-balance">
                Cuidado odontológico com{" "}
                <em className="not-italic gradient-text-gold">precisão,</em>{" "}
                estética e acolhimento.
              </h1>
            </motion.div>

            {/* Subtítulo */}
            <motion.p
              className="font-sans text-base md:text-lg text-white/65 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Atendimento conduzido por{" "}
              <span className="text-white/85 font-medium">{dentistInfo.name}</span>,
              cirurgiã-dentista em {dentistInfo.city}, com foco em saúde bucal,
              planejamento individualizado e uma experiência tranquila do início ao fim.
            </motion.p>

            {/* Badges de confiança */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="font-sans text-xs font-medium text-white/70 bg-white/8 border border-white/12 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-sans font-semibold text-sm tracking-wide px-7 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-gold hover:shadow-lg hover:-translate-y-0.5"
                aria-label="Agendar avaliação odontológica pelo WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar avaliação
              </a>

              <a
                href="#tratamentos"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 hover:border-white/50 hover:text-white font-sans font-medium text-sm px-7 py-4 rounded-full transition-all duration-300 cursor-pointer"
                aria-label="Conhecer os tratamentos disponíveis"
              >
                Conhecer tratamentos
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>

            {/* Prova de confiança — linha discreta */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center gap-2 text-white/50">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-sans text-xs">{dentistInfo.city}</span>
              </div>
              <div className="w-px h-3 bg-white/20" />
              <div className="flex items-center gap-2 text-white/50">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-sans text-xs">Particular e convênios</span>
              </div>
              <div className="w-px h-3 bg-white/20" />
              <div className="flex items-center gap-2 text-white/50">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-sans text-xs">Com hora marcada</span>
              </div>
            </motion.div>
          </div>

          {/* Coluna direita — Foto da dentista */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Moldura decorativa dourada */}
            <div className="relative">
              {/* Linha dourada decorativa superior */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-brand-gold/40 rounded-tr-2xl z-10" aria-hidden="true" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-brand-gold/40 rounded-bl-2xl z-10" aria-hidden="true" />

              {/* Container da foto */}
              <div className="relative w-[320px] sm:w-[380px] lg:w-[420px] xl:w-[480px] h-[440px] sm:h-[520px] lg:h-[580px] xl:h-[640px] rounded-2xl overflow-hidden">
                {/*
                  FOTO DA DENTISTA:
                  Coloque o arquivo da foto em /public/foto-dentista.png
                  (ou .png, .webp etc.) e ajuste o nome abaixo.
                */}
                <Image
                  src="/foto-dentista.png"
                  alt={`${dentistInfo.name}, Cirurgiã-Dentista em ${dentistInfo.city}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 480px"
                  className="object-cover object-top"
                  style={{ objectPosition: "center top" }}
                />
                {/* Overlay gradient sutil na parte inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />

                {/* Card flutuante — credencial */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-xl px-4 py-3.5 border border-white/20 bg-white/10 backdrop-blur-md">
                    <p className="font-serif text-base text-white font-light">{dentistInfo.name}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="font-sans text-xs text-white/70">{dentistInfo.specialty}</p>
                      <span className="font-sans text-[10px] text-brand-gold-light uppercase tracking-wider">{dentistInfo.cro}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge flutuante 
              <motion.div
                className="absolute -right-5 top-1/3 bg-brand-blue-clinical/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-deep hidden lg:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                aria-hidden="true"
              >
                <p className="font-sans text-xs text-brand-blue-deep font-semibold">Atendimento</p>
                <p className="font-sans text-xs text-brand-blue-deep/70">com hora marcada</p>
              </motion.div>*/}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Seta scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/30">Rolar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
