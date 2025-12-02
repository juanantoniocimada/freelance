// Miembros del equipo
const equipo = [
  {
    nombre: "Juan Antonio Durán",
    rol: "Software Architect and Lead App",
    img: "img/juan.jpeg",
    linkedin: "https://www.linkedin.com/in/juanantoniomkt/",
  },
  {
    nombre: "Javi",
    rol: "Fullstack Developer",
    img: "img/javi.jpeg",
    linkedin: "https://www.linkedin.com/in/jjavier-illesca/",
  },
];

function renderEquipo() {
  const container = document.getElementById("equipo-cards");
  if (!container) return;
  container.innerHTML = equipo.map(m => `
    <div class="client-card">
      <img src="${m.img}" alt="${m.nombre}">
      <h3 class="fundador-nombre">${m.nombre}</h3>
      <p class="fundador-desc">${m.rol}</p>
      ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" class="linkedin-btn">LinkedIn</a>` : ""}
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderEquipo);
