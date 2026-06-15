"use client";

import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/data";

interface TreatmentCardProps {
  name: string;
  description: string;
  tag: string;
  index: number;
}

export default function TreatmentCard({ name, description, tag, index }: TreatmentCardProps) {
  const message = encodeURIComponent(
    `Olá, tenho interesse no tratamento de ${name}. Gostaria de mais informações e de agendar uma avaliação.`
  );
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <motion.div
      className="group relative bg-white border border-brand-cream rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-default flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      {/* Tag */}
      <div className="flex items-center justify-between">
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-gold bg-brand-gold/8 px-2.5 py-1 rounded-full">
          {tag}
        </span>
        <span className="font-sans text-xs text-brand-gray-light/50 font-light">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Nome */}
      <h3 className="font-serif text-xl font-light text-brand-black leading-tight group-hover:text-brand-blue-deep transition-colors duration-200">
        {name}
      </h3>

      {/* Linha separadora */}
      <div className="w-8 h-px bg-brand-gold/40 transition-all duration-300 group-hover:w-14 group-hover:bg-brand-gold" aria-hidden="true" />

      {/* Descrição */}
      <p className="font-sans text-sm text-brand-gray-text leading-relaxed flex-1">
        {description}
      </p>

      {/* CTA */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-gold hover:text-brand-gold-dark transition-colors duration-200 cursor-pointer mt-auto pt-1 focus:outline-none focus-visible:underline"
        aria-label={`Tenho interesse no tratamento de ${name} — abrir WhatsApp`}
      >
        Tenho interesse
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </motion.div>
  );
}
