// Enregistrement des plugins GSAP nécessaires
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const projects = [
    {
        title: "Sparkle",
        type: "Application Web",
        image: "./assets/img/appareil-photo-avec-des-pelicules.webp",
        alt: "Mon projet d'application web qui permet d'être mon blog et portfolio de Photographie",
        link: "./views/sparkle.html",
        tags: ["PHP", "CSS", "JavaScript"]
    },
    {
        title: "Mov",
        type: "Application Web",
        image: "./assets/img/chaises-de-cinema.webp",
        alt: "Mon projet d'application web qui permet à l'utilisateur de consulter des films",
        link: "./views/mov.html",
        tags: ["Express", "Docker"]
    },
    {
        title: "Résarvo",
        type: "Application Web",
        image: "./assets/img/personne-qui-reserve.webp",
        alt: "Mon projet d'application web qui permet à l'utilisateur de réserver des activités dans un parc de loisirs",
        link: "./views/resarvo.html",
        tags: ["PHP", "CSS", "JavaScript"]
    }
];

const experiences = [
    {
        period: "2024 — Présent",
        title: "Apprenti Développeur Full Stack @ Rise Up",
        company: "Rise Up",
        logo: "./assets/img/logo/rise-up-logo.webp",
        alt: "Logo de Rise Up",
        description: "J'ai contribué au développement et à l'optimisation d'outils internes en utilisant Vue.js et Symfony, en améliorant les fonctionnalités existantes et en intégrant de nouvelles features adaptées aux besoins des CSM. J'ai également travaillé sur l'écriture de tests automatisés avec Cypress et PhpUnit, ainsi que sur l'intégration et le refactoring de code pour assurer une meilleure maintenabilité et fiabilité des applications. Côté infrastructure, j'ai utilisé MySQL, AWS et Docker pour optimiser le déploiement et la gestion des environnements.",
        technologies: ["Vue.js", "Symfony", "TypeScript", "Docker", "PostgreSQL"],
        links: [] 
    },
    {
        period: "2024 — Présent",
        title: "Ecole de Développeur Web @ Sup de Web",
        company: "Sup de Web",
        logo: "./assets/img/logo/sup-de-web-logo.webp",
        alt: "Logo de Sup de Web",
        description: "En tant qu'étudiant en Bachelor 2 en développement web full-stack, j'ai mené divers projets pratiques et collaboré sur des études de cas approfondies. J'ai exploré différents frameworks comme React, Vue.js et Symfony, tout en renforçant mes compétences en DevOps avec Docker, Ansible et Azure. Une attention particulière a été portée à la sécurité informatique, notamment à travers l'intégration de bonnes pratiques et la mise en place d'environnements optimisés.",
        technologies: ["Symfony", "SQL", "React", "Vue.js", "Node.js"],
        links: []
    }
];

function createProject(project) {
    // Création de la structure HTML pour un projet
    return `
        <div class="project" style="visibility: hidden">
            <figure>
                <img src="${project.image}" 
                     alt="${project.alt}"
                     width="800"
                     height="600"
                     loading="lazy">
            </figure>
            <div class="project-info">
                <a href="${project.link}" class="custom-cursor">
                    <div class="project-title">
                        <strong>${project.title}</strong>
                        <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>${project.type}</span>
                </a>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function createExperienceTimeline() {
    return `
        <section class="experience">
            <h2 class="title-experience">Parcours</h2>
            <div class="timeline">
                ${experiences.map(exp => `
                    <div class="timeline-item">
                        <div class="timeline-period">${exp.period}</div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                                <h3 class="timeline-title">${exp.title}</h3>
                                ${exp.logo ? `<img src="${exp.logo}" alt="${exp.alt}" class="company-logo" loading="lazy">` : ''}
                            </div>
                            <p class="timeline-description">${exp.description}</p>
                            <div class="timeline-tech">
                                ${exp.technologies.map(tech => 
                                    `<span class="tech-tag">${tech}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des sections et animations à la fin du chargement du document
    const projectsSection = document.querySelector('.projects');
    projectsSection.innerHTML += projects.map(project => createProject(project)).join('');
    
    // Configuration initiale des animations GSAP pour les sections about et contact
    gsap.set('.about, .contact', { 
        opacity: 0,
        y: 100 
    });

    // Configuration initiale des animations GSAP pour les projets
    gsap.set('.project', {
        opacity: 0,
        y: 50,
        visibility: 'visible'
    });

    ScrollTrigger.create({
        trigger: '.hero',
        start: 'bottom 50%',
        onEnter: () => {
            gsap.to('.about', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out'
            });
        }
    });

    ScrollTrigger.create({
        trigger: '.about',
        start: 'bottom 60%',
        onEnter: () => {
            gsap.to('.project', {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                duration: 1.5,
                ease: 'power3.out',
                visibility: 'visible'
            });
        }
    });

    ScrollTrigger.create({
        trigger: '.projects',
        start: 'bottom 60%',
        onEnter: () => {
            gsap.to('.contact', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out'
            });
        }
    });

    const aboutSection = document.querySelector('.about');
    aboutSection.insertAdjacentHTML('afterend', createExperienceTimeline());

    ScrollTrigger.create({
        trigger: '.experience',
        start: 'top 80%',
        onEnter: () => {
            gsap.to('.timeline-item', {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.out'
            });
        }
    });

    ScrollTrigger.refresh();
});

document.querySelector('.cta-hero').addEventListener('click', function(e) {
    // Gestion de l'interaction avec le bouton CTA Hero
    e.preventDefault();
    
    // Animation de réduction lors du clic
    gsap.to(this, {
        scale: 0.95,
        duration: 0.1,
        onComplete: () => {
            // Retour à l'échelle normale après le clic
            gsap.to(this, {
                scale: 1,
                duration: 0.1
            });
        }
    });

    // Animation de défilement vers la section about
    gsap.to(window, {
        duration: 1.2,
        scrollTo: {
            y: '.about',
            offsetY: 50
        },
        ease: 'power4.inOut',
        onStart: () => {
            // Animation d'apparition de la section about lors du défilement
            gsap.to('.about', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.3
            });
        }
    });
});

window.addEventListener('resize', () => {
    // Rafraîchissement des triggers ScrollTrigger lors du redimensionnement de la fenêtre
    ScrollTrigger.refresh();
});