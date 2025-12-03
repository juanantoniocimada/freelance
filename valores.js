// Array de valores para la sección
const valores = [
  {
    tipo: "valores",
    titulo: "Decisiones humanas",
    items: [
      "En fuertesoftware, la IA es una ayuda, pero las decisiones siempre las toman humanos expertos.",
    ]
  },
  {
    tipo: "valores",
    titulo: "Impacto social",
    items: [
      "Priorizamos proyectos con impacto positivo en la gente. No colaboramos con iniciativas de ludopatía, juego online ni con proyectos que contribuyan a la destrucción de las islas.",
    ]
  },
  {
    tipo: "valores",
    titulo: "Cercanía",
    items: [
      "Estamos en <strong>Puerto del Rosario</strong>, Fuerteventura. Apostamos por el trato directo y cercano con empresas y clientes locales."
    ]
  },
  {
    tipo: "valores",
    titulo: "MVP primero, resultados reales",
    items: [
      "Siempre empezamos por un MVP funcional y lo ponemos en producción rápido. Así puedes probar, ajustar y decidir sobre lo que realmente importa para tu negocio."
    ]
  },
];

function renderValores() {
  const container = document.getElementById("valores-cards");
  if (!container) return;
  container.innerHTML = valores.map(valor => `
    <div class="valor-card">
      <h2>${valor.titulo}</h2>
      <ul>
        ${valor.items.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderValores);
