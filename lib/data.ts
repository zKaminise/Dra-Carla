// ============================================================
// ARQUIVO DE DADOS — EDITE AQUI PARA PERSONALIZAR O SITE
// ============================================================

// NÚMERO DO WHATSAPP (com código do país e DDD, sem espaços ou símbolos)
export const WHATSAPP_NUMBER = "5534993253545"

// Mensagem padrão enviada ao abrir o WhatsApp
export const WHATSAPP_MESSAGE =
  "Olá, Dra. Carla. Encontrei seu site e gostaria de agendar uma avaliação."

// Link montado automaticamente — não precisa editar
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// ============================================================
// INFORMAÇÕES DA DENTISTA
// ============================================================
export const dentistInfo = {
  name: "Dra. Carla Lemes",
  firstName: "Carla",
  specialty: "Cirurgiã-Dentista",
  specialties: ["Cirurgiã-Dentista", "Atendimento Infantil", "Botox", "Preenchimento"],
  cro: "CRO MG 78256",
  city: "Monte Carmelo",
  state: "MG",
  address: "Praça Getúlio Vargas, 272",
  neighborhood: "Centro",
  cityFull: "Monte Carmelo — MG",
  hours: "Segunda a Sexta: 08h00 às 18h00",
  phone: "(34) 99325-3545",
  instagram: "https://instagram.com/[USUARIO]",
  googleMapsUrl: "https://www.google.com/maps/search/Praça+Getúlio+Vargas,+272,+Centro,+Monte+Carmelo,+MG",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Praça+Getúlio+Vargas,+272,+Centro,+Monte+Carmelo,+MG,+Brasil&output=embed&hl=pt-BR&z=17",
  // Avaliação no Google — substitua pelo link real ou remova
  googleReviewsUrl: "https://g.page/r/[ID]/review",
  googleRating: "5.0",
  googleReviewsCount: "00",
}

// ============================================================
// SERVIÇOS / TRATAMENTOS
// Edite, adicione ou remova conforme os serviços reais oferecidos
// ============================================================
export const services = [
  {
    id: 1,
    name: "Avaliação Odontológica",
    description:
      "Consulta inicial completa para entender seu histórico, identificar necessidades e planejar o tratamento mais adequado para o seu caso.",
    tag: "Primeiro passo",
  },
  {
    id: 2,
    name: "Clínica Geral",
    description:
      "Atendimento clínico abrangente com foco em diagnóstico preciso, prevenção e resolução das necessidades do dia a dia.",
    tag: "Essencial",
  },
  {
    id: 3,
    name: "Atendimento Infantil",
    description:
      "Cuidado odontológico especializado para crianças, com abordagem acolhedora, lúdica e adaptada a cada faixa etária.",
    tag: "Infantil",
  },
  {
    id: 4,
    name: "Limpeza e Prevenção",
    description:
      "Profilaxia profissional e orientações individualizadas para manter a saúde gengival e a higiene bucal em dia.",
    tag: "Preventivo",
  },
  {
    id: 5,
    name: "Clareamento Dental",
    description:
      "Procedimento estético indicado após avaliação, com acompanhamento profissional e orientação adequada para cada situação.",
    tag: "Estética",
  },
  {
    id: 6,
    name: "Restaurações Estéticas",
    description:
      "Restaurações em resina composta com atenção à estética, forma e função, integradas ao sorriso de maneira natural.",
    tag: "Estética",
  },
  {
    id: 7,
    name: "Tratamento de Canal",
    description:
      "Procedimento endodôntico realizado com cuidado técnico para preservar o dente e eliminar a dor com segurança.",
    tag: "Clínico",
  },
  {
    id: 8,
    name: "Extrações",
    description:
      "Exodontias simples e complexas realizadas com técnica adequada, priorizando o conforto e a recuperação do paciente.",
    tag: "Cirúrgico",
  },
  {
    id: 9,
    name: "Botox",
    description:
      "Aplicação de toxina botulínica com finalidade terapêutica e estética facial, realizada com técnica precisa e avaliação individualizada.",
    tag: "Harmonização",
  },
  {
    id: 10,
    name: "Preenchimento Facial",
    description:
      "Procedimento com ácido hialurônico para restaurar volume e contorno facial, com planejamento personalizado e resultado natural.",
    tag: "Harmonização",
  },
]

// ============================================================
// CONVÊNIOS
// Substitua pelos convênios reais aceitos ou deixe vazio para
// exibir somente o texto de consulta pelo WhatsApp
// ============================================================
export const insurancePlans = [
  "[CONVÊNIO 1]",
  "[CONVÊNIO 2]",
  "[CONVÊNIO 3]",
  "[CONVÊNIO 4]",
  "[CONVÊNIO 5]",
]

// ============================================================
// DEPOIMENTOS
// ATENÇÃO: Substitua pelos depoimentos reais dos pacientes.
// Nunca publique depoimentos fictícios.
// ============================================================
export const testimonials = [
  {
    id: 1,
    text: "[Depoimento real do paciente — substitua por avaliação autêntica]",
    name: "[Nome ou iniciais do paciente]",
    detail: "Paciente desde [ANO]",
  },
  {
    id: 2,
    text: "[Depoimento real do paciente — substitua por avaliação autêntica]",
    name: "[Nome ou iniciais do paciente]",
    detail: "Paciente desde [ANO]",
  },
  {
    id: 3,
    text: "[Depoimento real do paciente — substitua por avaliação autêntica]",
    name: "[Nome ou iniciais do paciente]",
    detail: "Paciente desde [ANO]",
  },
]

// ============================================================
// PERGUNTAS FREQUENTES
// ============================================================
export const faqs = [
  {
    id: 1,
    question: "Como agendar uma avaliação?",
    answer:
      "O agendamento pode ser feito diretamente pelo WhatsApp. Ao entrar em contato, nossa equipe verifica a disponibilidade e confirma a melhor data para você.",
  },
  {
    id: 2,
    question: "A Dra. atende convênios?",
    answer:
      "Sim, realizamos atendimento particular e aceitamos convênios selecionados. A disponibilidade pode variar conforme o procedimento e a cobertura do plano. Consulte pelo WhatsApp antes de agendar.",
  },
  {
    id: 3,
    question: "Quais tratamentos são realizados no consultório?",
    answer:
      "Realizamos avaliação odontológica, clínica geral, limpeza e prevenção, clareamento dental, restaurações estéticas, tratamento de canal, extrações e próteses dentárias, entre outros. Para saber se um procedimento específico é realizado, entre em contato.",
  },
  {
    id: 4,
    question: "O atendimento é com hora marcada?",
    answer:
      "Sim, todos os atendimentos são agendados com hora marcada, garantindo pontualidade e tempo adequado para cada paciente.",
  },
  {
    id: 5,
    question: "Como saber qual tratamento é indicado para meu caso?",
    answer:
      "O tratamento adequado é definido apenas após uma avaliação clínica individualizada. Durante a consulta, a Dra. [NOME] analisa seu histórico, realiza o exame e explica as opções disponíveis com clareza.",
  },
  {
    id: 6,
    question: "Posso tirar dúvidas pelo WhatsApp antes de agendar?",
    answer:
      "Sim. Você pode entrar em contato pelo WhatsApp para tirar dúvidas iniciais, verificar a disponibilidade de convênio ou entender como funciona o primeiro atendimento.",
  },
  {
    id: 7,
    question: "Onde fica o consultório?",
    answer: `O consultório está localizado na Praça Getúlio Vargas, 272 — Centro, Monte Carmelo — MG. O atendimento é realizado de segunda a sexta, das 08h00 às 18h00.`,
  },
  {
    id: 8,
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos as principais formas de pagamento, incluindo cartões de crédito e débito, PIX e, em alguns casos, parcelamento. Consulte a disponibilidade pelo WhatsApp.",
  },
]

// ============================================================
// DIFERENCIAIS
// ============================================================
export const differentials = [
  {
    id: 1,
    number: "01",
    title: "Comunicação clara",
    description:
      "Cada etapa do tratamento é explicada com linguagem acessível, para que o paciente entenda e participe das decisões.",
  },
  {
    id: 2,
    number: "02",
    title: "Planejamento individualizado",
    description:
      "Não existe protocolo único. O plano de tratamento é construído a partir da avaliação, histórico e objetivo de cada paciente.",
  },
  {
    id: 3,
    number: "03",
    title: "Ambiente preparado",
    description:
      "Consultório moderno, organizado e com equipamentos adequados para oferecer um atendimento seguro e confortável.",
  },
  {
    id: 4,
    number: "04",
    title: "Biossegurança",
    description:
      "Protocolos rigorosos de esterilização e controle de infecção, garantindo segurança em todos os procedimentos.",
  },
  {
    id: 5,
    number: "05",
    title: "Estética e função",
    description:
      "Atenção simultânea à estética do sorriso e à função mastigatória, para resultados que vão além da aparência.",
  },
  {
    id: 6,
    number: "06",
    title: "Acompanhamento pós-atendimento",
    description:
      "Orientações durante e após o tratamento para garantir a recuperação adequada e a durabilidade dos resultados.",
  },
]

// ============================================================
// ETAPAS DO ATENDIMENTO
// ============================================================
export const appointmentSteps = [
  {
    number: "01",
    title: "Primeiro contato",
    description:
      "O paciente chama pelo WhatsApp para tirar dúvidas iniciais e verificar disponibilidade de horário ou cobertura de convênio.",
  },
  {
    number: "02",
    title: "Avaliação",
    description:
      "A consulta inicial permite entender o histórico, necessidades e objetivos do paciente com atenção e sem pressa.",
  },
  {
    number: "03",
    title: "Planejamento",
    description:
      "O tratamento é explicado com clareza, incluindo etapas, cuidados necessários e todas as possibilidades disponíveis.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description:
      "O paciente recebe orientação durante e após o tratamento, com suporte para qualquer dúvida que surgir.",
  },
]
