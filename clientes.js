// Array de clientes y fundador
const clientes = [
  {
    nombre: 'Santander',
    logo: 'https://e7.pngegg.com/pngimages/512/702/png-clipart-santander-bank-santander-group-santander-securities-llc-bank-text-logo-thumbnail.png',
    descripcion: 'Para Santander hemos desarrollado, entre otros ejemplos: un chat corporativo para la documentación interna de ejecutivos, un lector OCR que optimiza la detección de errores en documentos PDF escaneados, y una solución integral para la gestión de la junta anual de inversores y accionistas, alineada con los estándares de eficiencia y seguridad del sector financiero.',
  },
  {
    nombre: 'Repsol',
    logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKEUDXKYCwaOYk9ZoOmB2k9sD0cmRSvTP5DLHoUpxwD2TRbcqoCEOPfoDEgz-2EKNYwA_6bw2o7ly_m3b186rJDCHpqhQeJDruV37gdYNqsoyNluWcKhV1VuXdICXFNxJWfm9E7rGVdi0/s640/logo+repsol+nuevo.jpg',
    descripcion: 'Se desarrolló, entre otros ejemplos, un software que ayuda a organizar y controlar todo el trabajo que se hace cuando una refinería de Repsol se detiene para mantenimiento.'
  },
  {
    nombre: 'Orange',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtezznU_jVR9aLxxoGiGKPIuHKZhfGGuuqhg&s',
    descripcion: 'Participamos, entre otros ejemplos, en la evolución y mejora de la aplicación móvil de Jazztel (marca propiedad de Orange), una app con millones de descargas y premiada como mejor app de telefonía a nivel nacional, optimizando funcionalidades y experiencia de usuario para Orange.'
  },
  {
    nombre: 'IBM',
    logo: 'https://pbs.twimg.com/profile_images/1493920231005302784/dd4UB7E1_400x400.jpg',
    descripcion: 'Hemos colaborado con IBM en diversos proyectos para el sector energético y bancario, aportando soluciones tecnológicas adaptadas a las necesidades de grandes corporaciones.',
  },
  {
    nombre: 'Colvema',
    logo: 'https://www.colvema.org/img/logo_vertical.png',
    descripcion: 'Desarrollamos, entre otros ejemplos, de forma íntegra la app móvil para iOS y Android del Colegio de Veterinarios de Madrid, cubriendo todo el ciclo de desarrollo, desde el diseño hasta la publicación en tiendas. Lo hicimos a través de WebsDirect.',
  },
  {
    nombre: 'Heineken',
    logo: 'https://images.seeklogo.com/logo-png/29/1/heineken-logo-png_seeklogo-298555.png',
    descripcion: 'Desarrollamos, entre otros ejemplos, un software para la gestión integral de suministros a establecimientos en todo el territorio nacional.'
  },
  {
    nombre: 'Fuerteguagua',
    logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/23/b9/53/23b95366-d374-ff6d-38a9-461d8b9db429/AppIcon-0-0-1x_U007epad-0-1-85-220.png/200x200ia-75.webp',
    descripcion: 'App de guaguas de Fuerteventura. Permite consultar horarios, rutas y paradas en tiempo real, facilitando la movilidad en la isla.',
  }
];

function renderClientesCards() {
  const container = document.getElementById('clientes-cards');
  if (!container) return;
  container.innerHTML = '';
  clientes.forEach(cliente => {
    let card = document.createElement('div');
    card.className = 'client-card';
    card.innerHTML = `
    <img src="${cliente.logo}" alt="${cliente.nombre} logo">
    <h3>${cliente.nombre}</h3>
    <p>${cliente.descripcion}</p>
`;

container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderClientesCards);