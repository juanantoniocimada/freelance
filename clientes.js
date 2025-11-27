// Array de clientes y fundador
const clientes = [
    {
        nombre: 'Santander',
        logo: 'https://e7.pngegg.com/pngimages/512/702/png-clipart-santander-bank-santander-group-santander-securities-llc-bank-text-logo-thumbnail.png',
        descripcion: 'Nuestros profesionales han trabajado para Santander.'
    },
    {
        nombre: 'Heineken',
        logo: 'https://images.seeklogo.com/logo-png/29/1/heineken-logo-png_seeklogo-298555.png',
        descripcion: 'Nuestros profesionales han trabajado para Heineken.'
    },
    {
        nombre: 'Repsol',
        logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKEUDXKYCwaOYk9ZoOmB2k9sD0cmRSvTP5DLHoUpxwD2TRbcqoCEOPfoDEgz-2EKNYwA_6bw2o7ly_m3b186rJDCHpqhQeJDruV37gdYNqsoyNluWcKhV1VuXdICXFNxJWfm9E7rGVdi0/s640/logo+repsol+nuevo.jpg',
        descripcion: 'Nuestros profesionales han trabajado para Repsol.'
    },
    {
        nombre: 'Orange',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtezznU_jVR9aLxxoGiGKPIuHKZhfGGuuqhg&s',
        descripcion: 'Nuestros profesionales han trabajado para Orange.'
    }
];

function renderClientesCards() {
  const container = document.getElementById('clientes-cards');
  if (!container) return;
  container.innerHTML = '';
  clientes.forEach(cliente => {
    let card = document.createElement('div');
    card.className = 'client-card' + (cliente.destacado ? ' destacado' : '');
    if (cliente.destacado) {
      card.innerHTML = `
        <span class="badge-fundador">Fundador</span>
        <img src="${cliente.logo}" alt="${cliente.nombre}">
        <h3 class="fundador-nombre">${cliente.nombre}</h3>
        <p class="fundador-desc">${cliente.descripcion}</p>
        <a href="${cliente.linkedin}" target="_blank" class="linkedin-btn">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" class="linkedin-icon"> LinkedIn
        </a>
      `;
    } else {
      card.innerHTML = `
        <img src="${cliente.logo}" alt="${cliente.nombre} logo">
        <h3>${cliente.nombre}</h3>
        <p>${cliente.descripcion}</p>
      `;
    }
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderClientesCards);