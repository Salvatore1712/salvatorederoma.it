// Per aggiungere una card basta aggiungere un oggetto a questo array.
// image: importa l'immagine da src/assets (o lascia '' per il placeholder)
// to: route interna (es. '/project/valtieri') — href: link esterno
import owly from '../assets/projects/owly_image_project.png'
import numa from '../assets/projects/numa_meditation_image.png'
import chemstock_image from '../assets/projects/chemstock_image.png'

export const projects = [
  {
    id: 'numa',
    category: 'Meditation',
    title: 'Numa Meditation — Case Study',
    text: 'Mindfulness web app with guided breathing, animated 4-4-6 cycles, timed meditation sessions from 5 to 30 minutes, and wellness recipes.',
    stack: ['Javascript', 'React', "Sass"],
    image: numa,
    href: "https://progetto-react.onrender.com"
  },
  {
    id: 'owly',
    category: 'Kids Library',
    title: 'Owly Kids Library — Case Study',
    text: 'Online library for young readers, built with former teachers: genre-based book search, reader profiles, and playful learning activities.',
    stack: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: owly,
    href: 'https://owly-libreria.onrender.com',
  },
  {
    id: "Chemstock",
    category: "ERP Chemical",
    title: "ChemStock",
    text: "Chemical inventory management dashboard with expiry tracking, reorder planning, purchase orders, cost-center budgets, and JSON database import/export.",
    stack: ["Javascript", "HTML", "CSS", "JSON"],
    image: chemstock_image,
    href: "https://chemstock-cqa7.onrender.com"
  }
]
