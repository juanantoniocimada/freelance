// Array de servicios
const servicios = [
    {
        titulo: 'Aplicaciones iOS y Android',
        img: 'https://www.wingsoft.com/_next/image?url=https%3A%2F%2Fapolo-api.lab.wingsoft.com%2Fapolo-prod%2Fcbeb5722-585f-4008-b09f-44b1b15648761723241028263-cuadradas%20wingsoft%20(1)-compressed%20(1).jpg&w=3840&q=75',
        descripcion: 'Desarrollo de aplicaciones móviles para empresas y organizaciones desde la idea hasta la publicación.',
        items: [
            "notificaciones a usuarios",
            "áreas privadas",
            "integración con mapas y geolocalización",
            "integracion con sistemas de pago / qr / nfc",
            "panel backoffice para gestión de contenidos",
        ]
    },
    {
        titulo: 'Desarrollo de Software',
        img: 'https://www.eetimes.eu/wp-content/uploads/2021/02/SurprisesCCode_shutterstock_234813430_EETimesEurope.jpg?w=640&resize=640%2C427',
        descripcion: 'Soluciones de software a medida para empresas y organizaciones.',
        items: [
            "solucionamos problemas con software",
            "sistemas de gestión interna",
            "automatización de procesos manuales",
            "integración con sistemas terceros",
            "aplicaciones web",
            "sistemas de reservas y comercio electrónico",
        ]
    },
    {
        titulo: 'Infraestructura Tecnológica',
        img: 'https://revistabyte.es/wp-content/uploads/2023/11/modelo-ovhcloud-servidores-1024x683.jpg',
        descripcion: 'Te ayudamos a que tu infraestructura tecnológica acompañe el crecimiento de tu empresa sin problemas.',
        items: [
            "te ayudamos a elegir proveedores cloud/hosting",
            "¿picos de tráfico? escalabilidad automática",
        ]
    },
    {
        titulo: 'Optimización y Mentoring de Equipos',
        img: 'https://media.istockphoto.com/id/1264379078/es/vector/lightbulb-idea-idea-concepto-ilustraci%C3%B3n-vectorial-dibujos-animados-planas-diminutos.jpg?s=612x612&w=0&k=20&c=3f-RgPD-iP8uVRa11JWzBYnDY64dtB4Ld6muMhNNukc=',
        descripcion: 'Analizamos y mejoramos la estructura y funcionamiento de tus equipos de desarrollo para que trabajen de forma más eficiente.',
        items: [
            "estándares de código, mejores prácticas, flujos de trabajo",
        ]
    },
    {
        titulo: 'Auditoría tecnológica',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZPLybZLQU-pzTuTPlV6LBeZiGCEJNWjKzA&s',
        descripcion: 'Analizamos internamente los procesos, sistemas y herramientas de tu empresa para detectar mejoras, riesgos y oportunidades.',
        items: [
            "identificamos problemas futuros y proponemos soluciones",
            "revisamos arquitectura de software e infraestructura"
        ]
    },
    {
        titulo: 'Talento',
        items: [
            "qué perfil necesitas",
            "búsqueda y selección",
            "retención de talento",
            "conocemos el mercado tecnológico y sus salarios"
        ],
        img: 'https://hospitalityinsights.ehl.edu/hubfs/Imported_Blog_Media/talent-management-strategy.jpg',
        descripcion: 'Te ayudamos a encontrar y retener el mejor talento tecnológico para tu empresa.'
    },
    {
        titulo: 'Asesoría tecnológica externa',
        img: 'https://www.linksoluciones.com/LN/wp-content/uploads/2021/01/2_Asesorias-vs-consultorias-1024x684.jpg',
        descripcion: 'Te ofrecemos asesoría tecnológica desde una perspectiva externa y profesional, para ayudarte a reflexionar y tomar decisiones informadas en tu empresa.',
        items: [

        ]
    },
    {
        titulo: '¿Tienes una idea?',
        img: 'https://cdn-icons-png.flaticon.com/512/1828/1828926.png',
        descripcion: 'Te podemos acompañamos en el proceso a nivel técnico',
        items: [
            "elección de tecnología",
            "viabilidad técnica",
            "prototipado rápido",
            "desarrollo ágil",  
        ]
    },

];

function renderServiciosCards() {
    const container = document.getElementById('servicios-cards');
    if (!container) return;
    container.innerHTML = '';
    servicios.forEach((servicio, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.padding = '2rem 1.5rem';
        card.style.background = '#fff';
        card.style.border = '1px solid #e0e0e0';
        card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
        const itemsId = `servicio-items-${idx}`;
        card.innerHTML = `
            <img src="${servicio.img}" alt="${servicio.titulo}">
            <h2>${servicio.titulo}</h2>
            <p>${servicio.descripcion}</p>
            <button class="ver-mas-btn" id="ver-mas-btn-${idx}">Ver más</button>
            <ul id="${itemsId}" style="list-style:none;padding:0;margin:0 0 0.2rem 0;display:none;">
                ${servicio.items.map(item => `
                    <li style='margin-bottom:0.12rem;font-size:0.98rem;color:#225;font-weight:500;padding:0.4rem 0.7rem;background:#f7fafc;border-left:2px solid #b3e0ff;border-radius:0px;'>${item}</li>`).join("")}
            </ul>
        `;
        container.appendChild(card);
        // Destello al pulsar el botón
        setTimeout(() => {
            const btn = document.getElementById(`ver-mas-btn-${idx}`);
            if (btn) {
                btn.onclick = function() {
                    const ul = document.getElementById(itemsId);
                    const isHidden = ul.style.display === 'none';
                    ul.style.display = isHidden ? 'block' : 'none';
                    if (isHidden) {
                        card.style.transition = 'background 0.4s';
                        card.style.background = '#e0f7fa';
                        setTimeout(() => {
                            card.style.background = '#fff';
                        }, 1000);
                    }
                };
            }
        }, 0);
    });
}

document.addEventListener('DOMContentLoaded', renderServiciosCards);