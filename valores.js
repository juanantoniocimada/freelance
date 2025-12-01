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
    <div class="card" style="background:linear-gradient(135deg,#fffbe6 0%,#e0f7fa 100%);border:2.5px dashed #0078d4;box-shadow:0 8px 32px rgba(0,120,212,0.10);padding:2.2rem 1.7rem;position:relative;">
      <span style="position:absolute;top:16px;left:16px;background:#0078d4;color:#fff;font-size:0.85rem;font-weight:600;padding:0.22rem 1.1rem;border-radius:14px;box-shadow:0 1px 6px rgba(0,120,212,0.10);letter-spacing:0.7px;">${valor.tipo}</span>
      <h2 style="color:#0078d4;font-size:1.18rem;margin-bottom:1.1rem;">${valor.titulo}</h2>
      <ul style="list-style:none;padding:0;margin:0 0 1.2rem 0;">
        ${valor.items.map(item => `<li style='margin-bottom:0.7rem;font-size:1.08rem;color:#333;font-weight:500;'>${item}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderValores);
