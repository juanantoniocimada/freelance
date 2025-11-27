// Array de servicios
const servicios = [
    {
        titulo: 'Apps iOS y Android',
        img: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
        descripcion: 'Desarrollo de aplicaciones móviles para iOS y Android.'
    },
    {
        titulo: 'Desarrollo de Software',
        img: 'https://cdn-icons-png.flaticon.com/512/2721/2721304.png',
        descripcion: 'Soluciones de software personalizadas para tu negocio.'
    },
    {
        titulo: 'Desarrollo Web',
        img: 'https://cdn-icons-png.flaticon.com/512/2721/2721296.png',
        descripcion: 'Webs modernas, rápidas y seguras.'
    },
    {
        titulo: 'Desarrollo de Tiendas Online',
        img: 'https://cdn-icons-png.flaticon.com/512/891/891419.png',
        descripcion: 'Creación de tiendas online seguras y escalables para tu negocio.'
    },
];

function renderServiciosCards() {
  const container = document.getElementById('servicios-cards');
  if (!container) return;
  container.innerHTML = '';
  servicios.forEach(servicio => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${servicio.img}" alt="${servicio.titulo}">
      <h2>${servicio.titulo}</h2>
      <p>${servicio.descripcion}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderServiciosCards);