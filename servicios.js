// Array de servicios
const servicios = [

    {
        titulo: 'Aplicaciones iOS y Android',
        img: 'https://www.zitelia.es/wp-content/uploads/2017/08/app-movil.jpg',
        descripcion: 'Desarrollo de aplicaciones móviles nativas y multiplataforma para empresas y equipos profesionales.',
        items: [
            "notificaciones a usuarios",
            "áreas privadas",
            "integración con mapas y geolocalización",
            "pasarelas de pago"
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
        ]
    },
    {
        titulo: 'Infraestructura Tecnológica',
        img: 'https://revistabyte.es/wp-content/uploads/2023/11/modelo-ovhcloud-servidores-1024x683.jpg',
        descripcion: 'Te ayudamos a que tu infraestructura tecnológica acompañe el crecimiento de tu empresa sin problemas.',
        items: [
            "te atyudamos a elegir proveedores cloud/hosting",
            "¿picos de tráfico? escalabilidad automática",
        ]
    },
    {
        titulo: 'Optimización y Mentoring de Equipos',
        img: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
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

];

function renderServiciosCards() {
    const container = document.getElementById('servicios-cards');
    if (!container) return;
    container.innerHTML = '';
    servicios.forEach(servicio => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.padding = '2rem 1.5rem';
                card.innerHTML = `
            <img src="${servicio.img}" alt="${servicio.titulo}">
            <h2>${servicio.titulo}</h2>
            <p>${servicio.descripcion}</p>
            <ul style="list-style:none;padding:0;margin:0 0 1.2rem 0;">
                ${servicio.items.map(item => `
                    <li style='margin-bottom:1.1rem;font-size:1.04rem;color:#225;padding:0.4rem 0.7rem;background:#f7fafc;border-left:2px solid #b3e0ff;border-radius:6px;'>
                        ${item}
                    </li>`).join("")}
            </ul>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderServiciosCards);