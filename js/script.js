document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle logic (global)
    const sidebar = document.querySelector('.sidebar');
    const closeSidebarBtn = document.querySelector('.fa-xmark');
    
    if (closeSidebarBtn && sidebar) {
        closeSidebarBtn.addEventListener('click', () => {
            sidebar.style.display = 'none';
            document.querySelector('.content-area').style.marginLeft = '0';
        });
    }

    // Module Accordion Logic
    const moduleItems = document.querySelectorAll('.module-item');
    
    moduleItems.forEach(item => {
        const header = item.querySelector('.module-header');
        header.addEventListener('click', () => {
            const subList = item.querySelector('.sub-module-list');
            const isActive = item.classList.contains('active');

            // Close other modules
            moduleItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherSubList = otherItem.querySelector('.sub-module-list');
                    if (otherSubList) otherSubList.style.display = 'none';
                }
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                if (subList) subList.style.display = 'block';
                
                // Mock update main content based on module
                updateContent(item.dataset.module);
            }
        });
    });

    // Handle URL parameters for loading specific module
    const urlParams = new URLSearchParams(window.location.search);
    const moduleParam = urlParams.get('module');
    if (moduleParam) {
        const targetItem = document.querySelector(`.module-item[data-module="${moduleParam}"]`);
        if (targetItem) {
            // Deactivate all others
            moduleItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const subList = otherItem.querySelector('.sub-module-list');
                if (subList) subList.style.display = 'none';
            });
            // Activate target
            targetItem.classList.add('active');
            const subList = targetItem.querySelector('.sub-module-list');
            if (subList) subList.style.display = 'block';
            updateContent(moduleParam);
        }
    }

    function updateContent(moduleId) {
        const title = document.querySelector('h1');
        const contentTitle = document.querySelector('h2');
        const breadcrumb = document.querySelector('nav[style*="font-size: 0.8rem"]');
        const videoTitle = document.querySelector('.main-wrapper main .content-area div p[style*="font-weight: bold"]');
        const videoModule = document.querySelector('.main-wrapper main .content-area div p[style*="color: var(--text-secondary)"]');
        const detailsContainer = document.querySelector('.content-area div[style*="display: flex; flex-direction: column; gap: 1rem;"]');
        
        const moduleData = {
            "1": {
                name: "Módulo 1: Fundamentos y Marco",
                lesson: "1.1. Introducción al Gobierno de Datos",
                videoLabel: "EL DATO COMO ACTIVO",
                desc: "Este módulo sienta las bases teóricas y normativas, enfocándose en el cambio de paradigma necesario en las instituciones.",
                details: [
                    { title: "Dato como Activo", icon: "fa-gem", color: "var(--accent-blue)", text: "Los datos generan valor público e impulsan la transformación digital." },
                    { title: "Marco Normativo", icon: "fa-gavel", color: "var(--accent-green)", text: "Revisión de la Ley de Gobierno Digital y la Estrategia Nacional 2026-2030." },
                    { title: "Fuente Única (SSOT)", icon: "fa-database", color: "#a855f7", text: "Eliminación de silos para decisiones basadas en datos confiables." }
                ]
            },
            "2": {
                name: "Módulo 2: Roles y Responsabilidades",
                lesson: "2.1. El Comité y el OGD",
                videoLabel: "EL ECOSISTEMA HUMANO",
                desc: "El gobierno de datos no es un proyecto exclusivo de TI, sino un esfuerzo transversal. En este módulo definiremos los roles clave.",
                details: [
                    { title: "El Comité y el OGD", icon: "fa-user-tie", color: "var(--accent-blue)", text: "El Oficial de Gobierno de Datos actúa como director de orquesta, supervisado por la alta dirección." },
                    { title: "Dueño del Dato", icon: "fa-user-shield", color: "var(--accent-green)", text: "Responsable de definir el propósito, aprobar reglas y velar por la calidad de sus datos." },
                    { title: "Custodio del Dato", icon: "fa-user-gear", color: "#a855f7", text: "Asegura la integridad técnica del dato y traduce las reglas de negocio a validaciones." }
                ]
            },
            "3": {
                name: "Módulo 3: Arquitectura e Interoperabilidad",
                lesson: "3.1. Datos Maestros",
                videoLabel: "CONECTIVIDAD Y FLUJO",
                desc: "Exploraremos cómo fluyen los datos y cómo las instituciones pueden conectarse entre sí utilizando estándares abiertos.",
                details: [
                    { title: "Datos Maestros", icon: "fa-sitemap", color: "var(--accent-blue)", text: "Identificación de datos críticos como DNI o RUC para la operatividad estatal." },
                    { title: "PIDE", icon: "fa-network-wired", color: "var(--accent-green)", text: "Uso de la Plataforma de Interoperabilidad para evitar redundancia de trámites." },
                    { title: "GeoPerú y PNDA", icon: "fa-map-location-dot", color: "#a855f7", text: "Aprovechamiento de plataformas nacionales de datos abiertos y geoespaciales." }
                ]
            },
            "4": {
                name: "Módulo 4: Gestión de la Calidad",
                lesson: "4.1. Dimensiones de Calidad",
                videoLabel: "VALOR Y CONFIANZA",
                desc: "En este módulo aprenderás que la calidad del dato es lo que determina su verdadero valor estratégico.",
                details: [
                    { title: "6 Dimensiones", icon: "fa-vial-circle-check", color: "var(--accent-blue)", text: "Exactitud, completitud, consistencia, validez, oportunidad y unicidad." },
                    { title: "Limpieza (Cleansing)", icon: "fa-broom", color: "var(--accent-green)", text: "Técnicas para mitigar valores nulos y registros duplicados." },
                    { title: "Mejora Continua", icon: "fa-arrows-rotate", color: "#a855f7", text: "Pasar de correcciones reactivas a un control proactivo automatizado." }
                ]
            },
            "5": {
                name: "Módulo 5: Metadatos y Trazabilidad",
                lesson: "5.1. ADN del Dato",
                videoLabel: "CONTEXTO Y ORIGEN",
                desc: "Enfocado en dar contexto a la información para que pueda ser comprendida y reutilizada a lo largo del tiempo.",
                details: [
                    { title: "ADN del Dato", icon: "fa-dna", color: "var(--accent-blue)", text: "Clasificación descriptiva, estructural y administrativa para dar significado." },
                    { title: "Catálogos de Datos", icon: "fa-book-atlas", color: "var(--accent-green)", text: "Herramientas para definir formatos y facilitar la localización de datos." },
                    { title: "Trazabilidad", icon: "fa-route", color: "#a855f7", text: "Documentar el historial completo del dato desde su origen hasta su fin." }
                ]
            },
            "6": {
                name: "Módulo 6: Seguridad y Ética",
                lesson: "6.1. Anonimización",
                videoLabel: "PROTECCIÓN Y ÉTICA",
                desc: "Garantizamos que la apertura y explotación de datos se realice respetando los derechos ciudadanos y la privacidad.",
                details: [
                    { title: "Ley 29733", icon: "fa-shield-halved", color: "var(--accent-blue)", text: "Equilibrio entre acceso a información pública y derecho a la privacidad." },
                    { title: "Desidentificación", icon: "fa-user-secret", color: "var(--accent-green)", text: "Técnicas de enmascaramiento dinámico y generalización por rangos." },
                    { title: "Ética y Sesgos", icon: "fa-scale-balanced", color: "#a855f7", text: "Asegurar que la IA se alimente con datos justos y libres de discriminación." }
                ]
            }
        };

        const data = moduleData[moduleId];
        if (data) {
            title.textContent = data.lesson;
            contentTitle.textContent = data.name;
            breadcrumb.textContent = `Mis cursos / Gobierno de Datos / ${data.name} / ${data.lesson}`;
            if (videoTitle) videoTitle.textContent = data.videoLabel;
            if (videoModule) videoModule.textContent = data.name;

            // Update main description
            const descParagraph = document.querySelector('.content-area div[style*="background-color: var(--bg-header)"] p');
            if (descParagraph) descParagraph.textContent = data.desc;

            // Update details cards dynamically
            if (detailsContainer && data.details) {
                detailsContainer.innerHTML = ''; // Clear current
                data.details.forEach(detail => {
                    const card = document.createElement('div');
                    card.style.cssText = 'background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.2s; cursor: pointer;';
                    card.innerHTML = `
                        <h4 style="color: ${detail.color}; margin-bottom: 0.5rem;"><i class="fa-solid ${detail.icon}" style="margin-right: 0.5rem;"></i> ${detail.title}</h4>
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">${detail.text}</p>
                    `;
                    detailsContainer.appendChild(card);
                });
            }
        }
    }

    // Active link highlighting for header
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentPath.includes(href) && href !== '#') {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        }
    });

    // Mock progress bar animation
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.transition = 'width 1s ease-in-out';
            fill.style.width = width;
        }, 100);
    });
});
