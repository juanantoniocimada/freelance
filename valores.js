// Array de valores para la sección
const valores = [
  {
    tipo: "valores",
    titulo: "Decisiones humanas",
    items: [
      "En fuertesoftware, la IA es una ayuda, pero las decisiones siempre las toman humanos expertos.",
      ""
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
    <div class="card" style="background:linear-gradient(135deg,#fffbe6 0%,#e0f7fa 100%);border:2.5px dashed #0078d4;box-shadow:0 8px 32px rgba(0,120,212,0.10);padding:0.7rem 0.5rem;position:relative;">
      <h2 style="color:#0078d4;font-size:1.08rem;margin-bottom:0.08rem;margin-top:0.04rem;">${valor.titulo}</h2>
      <ul style="list-style:none;padding:0;margin:0 0 0.2rem 0;">
        ${valor.items.map(item => `<li style='margin-bottom:0.12rem;font-size:0.98rem;color:#333;font-weight:500;padding:0;'>${item}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderValores);
