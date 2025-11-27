// Datos de los items del stack
const stackItems = [
  {
    name: 'Angular',
    logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
    description: 'Framework frontend para crear aplicaciones web modernas y escalables.',
    tag: 'Stack Frontend',
    color: '#dd0031'
  },
  {
    name: 'Flutter',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
    description: 'Framework para crear apps móviles nativas multiplataforma con Dart.',
    tag: 'Stack Mobile',
    color: '#02569b'
  },
  {
    name: 'PHP',
    logo: 'https://www.php.net/images/logos/php-logo.svg',
    description: 'Lenguaje backend ampliamente usado para desarrollo web y APIs.',
    tag: 'Stack Backend',
    color: '#777bb3'
  },
  {
    name: 'NestJS',
    logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
    description: 'Framework backend para construir APIs robustas y escalables con Node.js y TypeScript.',
    tag: 'Stack Backend',
    color: '#e0234e'
  }
];

// Renderizar los items en el contenedor de stack
function renderStackCards() {
  const container = document.getElementById('stack-cards');
  if (!container) return;
  container.innerHTML = '';
  stackItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'stack-card';
    card.innerHTML = `
      <span class="tag-stack">Stack</span>
      <img src="${item.logo}" alt="${item.name} logo">
      <h2 style="color:${item.color}">${item.name}</h2>
      <p>${item.description}</p>
      <span style="display:block;color:${item.color};font-size:0.98rem;font-weight:500;margin-top:0.7rem;">${item.tag}</span>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderStackCards);