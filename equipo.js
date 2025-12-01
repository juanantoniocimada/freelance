// Miembros del equipo
const equipo = [
  {
    nombre: "Isabel López",
    rol: "Licenciada en informática y technical lead",
    img: "https://softibus.com/hola/isa.jpeg",
  },
  {
    nombre: "Juan Antonio Durán",
    rol: "Arquitecto de software y lead app",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQHVYj5SHG9d-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1616097123400?e=1766016000&v=beta&t=_nUbcRHlH_FGMCg6olZ1sXHk7VKfecUX58PNDEsbIOM",
    linkedin: "https://www.linkedin.com/in/juanantoniomkt/",
    destacado: true
  },
];

function renderEquipo() {
  const container = document.getElementById("equipo-cards");
  if (!container) return;
  container.innerHTML = equipo.map(m => `
    <div class="client-card${m.destacado ? ' destacado' : ''}">
      <span class="badge-fundador">${m.destacado ? 'Fundador' : 'Miembro'}</span>
      <img src="${m.img}" alt="${m.nombre}">
      <h3 class="fundador-nombre">${m.nombre}</h3>
      <p class="fundador-desc">${m.rol}</p>
      ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" class="linkedin-btn">LinkedIn</a>` : ""}
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderEquipo);
