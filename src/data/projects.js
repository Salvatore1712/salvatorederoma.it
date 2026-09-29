// Per aggiungere una card basta aggiungere un oggetto a questo array.
// image: importa l'immagine da src/assets (o lascia '' per il placeholder)
// to: route interna (es. '/project/valtieri') — href: link esterno
import owly from '../assets/projects/owly_image_project.png'
import numa from '../assets/projects/numa_meditation_image.png'
import chemstock_image from '../assets/projects/chemstock_image.png'

export const projects = [
  {
    id: 'numa',
    category: 'Meditazione',
    title: 'Numa Meditation — Caso studio',
    text: 'Web app di mindfulness con respirazione guidata, cicli 4-4-6 animati, sessioni di meditazione a tempo da 5 a 30 minuti e ricette per il benessere.',
    stack: ['Javascript', 'React', "Sass"],
    image: numa,
    href: "https://progetto-react.onrender.com"
  },
  {
    id: 'owly',
    category: 'Libreria per bambini',
    title: 'Owly Kids Library — Caso studio',
    text: 'Libreria online per giovani lettori, realizzata insieme a ex insegnanti: ricerca dei libri per genere, profili lettore e attività didattiche in forma di gioco.',
    stack: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: owly,
    href: 'https://owly-libreria.onrender.com',
  },
  {
    id: "Chemstock",
    category: "ERP chimico",
    title: "ChemStock",
    text: "Dashboard per la gestione del magazzino di prodotti chimici, con controllo delle scadenze, pianificazione dei riordini, ordini di acquisto, budget per centro di costo e import/export del database in JSON.",
    stack: ["Javascript", "HTML", "CSS", "JSON"],
    image: chemstock_image,
    href: "https://chemstock-cqa7.onrender.com"
  }
]
