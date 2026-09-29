// Contenuti della pagina About

export const stats = [
  { id: 'experience', label: 'Esperienza', value: '03+', text: 'Anni di progettazione e sviluppo web', icon: 'ruler' },
  { id: 'target', label: 'Obiettivo', value: '< 50ms', text: 'Latenza media globale sull’edge', icon: 'gauge', accent: true },
  { id: 'hygiene', label: 'Qualità', value: '100%', text: 'Codice TypeScript rigoroso e affidabile', icon: 'badge' },
  { id: 'scale', label: 'Portata', value: '25+', text: 'Progetti enterprise in produzione', icon: 'rocket' },
]

export const philosophyTags = [
  'Base in Italia, collaborazioni in tutto il mondo',
  'In esplorazione: Next.js 15 • Rust/Wasm',
  'Discipline: WebGL • Tipografia svizzera',
]

export const education = [
  { id: 'degree', title: 'Laurea triennale', school: 'Università Telematica Pegaso', status: 'In corso' },
  { id: 'master', title: 'Master in Sviluppo Web', school: 'start2impact University', status: 'In corso' },
]

export const pillars = [
  {
    id: 'frontend',
    title: 'Architettura frontend',
    text: 'Layout reattivi guidati dallo stato, micro-sistemi di componenti e alberi di stato deterministici, senza alcun re-render superfluo.',
    tags: ['React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'XState'],
    icon: 'layers',
  },
  {
    id: 'creative',
    title: 'UI/UX creativa',
    text: 'Interfacce intuitive e flussi utente costruiti attorno a bisogni reali: gerarchia visiva chiara, design system coerenti e micro-interazioni che guidano ogni azione.',
    tags: ['Three.js', 'WebGL', 'GLSL Shaders', 'Framer Motion', 'Canvas API'],
    icon: 'cube',
  },
]

export const timeline = [
  {
    id: 'independent',
    period: '2023 — Oggi',
    place: 'Asia / Remote',
    role: 'Web Developer indipendente',
    company: 'Attività in proprio',
    text: 'Progetto e realizzo siti web su misura per piccole imprese e professionisti: dai wireframe al visual design, fino a uno sviluppo responsive e ottimizzato per la SEO.',
    current: true,
  },
  {
    id: 'senior',
    period: '2021 — 2023',
    place: 'Asia / Remote',
    role: 'Junior Frontend Engineer',
    company: 'Agenzia enterprise / Tech Lab',
    text: 'Ho trasformato mockup di web design in interfacce responsive e accessibili, lavorando su layout, componenti riutilizzabili e stili visivi coerenti tra le pagine.',
  },
  {
    id: 'creative',
    period: '2018 — 2021',
    place: 'Italia',
    role: 'Creative Developer & UI Specialist',
    company: 'Interaction Lab, Practice Creative Studio',
    text: 'Ho approfondito i fondamenti del web design attraverso progetti personali: tipografia, colore, griglie di impaginazione e interfacce centrate sull’utente per landing page e portfolio.',
  },
]
