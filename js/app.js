const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

//traducir pagina

function translateToEN() {
  document.querySelector(".profile-title").textContent = "Hello! I'm Adrian Mayora";
  document.querySelector(".profile-details").textContent = "I am passionate about technology, trained by Simón Bolívar University as an electronics technician.";
  document.querySelector('.menu a[href="#profile"]').textContent = "Profile";
  document.querySelector('.menu a[href="#estudio"]').textContent = "Studies";
  document.querySelector('.menu a[href="#skills"]').textContent = "Certificates";
  document.querySelector('.menu a[href="#contact"]').textContent = "Contact";
  document.querySelector(".profile-btn").textContent = "Download CV";
  document.querySelector(".estudios-title").textContent = "Education and Experiences";
  document.querySelector(".estudio-school-date").textContent = "2004-2016";
  document.querySelector(".estudio-school").textContent = ' "Santo Domingo de Guzmán" School';
  document.querySelector(".estudio-school-position").textContent = "Bachelor of Science";
  document.querySelector(".estudio-school-description").textContent =
    "My primary and secondary education at 'Santo Domingo de Guzmán' School focused on a solid foundation in the sciences. During these years, I acquired fundamental knowledge and academic skills that prepared me to embrace my passion for the sciences and continue my educational and professional development in this field.";
  document.querySelector(".estudio-university-date").textContent = "2018-2023";
  document.querySelector(".estudio-university").textContent = "Simón Bolívar University";
  document.querySelector(".estudio-university-position").textContent = "Higher Technician in Electronics";
  document.querySelector(".estudio-university-description").textContent =
    "At Simón Bolívar University, my training as a Higher Technician in Electronics allowed me to acquire solid technical skills and foster my passion for electronics and technology. These years were essential for my professional development and commitment to excellence in the field.";

  document.querySelector(".estudio-intership-date").textContent = "Apr-Jul 2023";
  document.querySelector(".estudio-intership").textContent = "Electronic Service AS1";
  document.querySelector(".estudio-intership-position").textContent = "Television Repair Technician";
  document.querySelector(".estudio-intership-description").textContent =
    "At Electronic Service AS1, I had the privilege of working as a Television Repair Technician. During my time there, I acquired in-depth knowledge in identifying and troubleshooting television issues, working with a wide variety of models and technologies. My experience included diagnosis, fault finding, and customer service. This experience strengthened my technical skills and my ability to provide effective hardware solutions.";
  document.querySelector(".skills-title a").textContent = "Download Certificates";
  document.querySelectorAll(".skills-skill")[0].textContent = "IBM Z Xplore Concepts";
  document.querySelectorAll(".skills-skill")[1].textContent = "IBM Z Xplore Advance";
  document.querySelectorAll(".skills-skill")[2].textContent = "Level B1 in English on Busuu";
  document.querySelectorAll(".skills-skill")[3].textContent = "Computer Architecture";
  document.querySelectorAll(".skills-skill")[4].textContent = "Electronic Service AS1";
  document.querySelectorAll(".skills-skill")[5].textContent = "Residential Electrical Installations";
  document.querySelectorAll(".skills-skill")[6].textContent = "Python 101 for Data Science";
  document.querySelectorAll(".skills-skill")[7].textContent = "High School Diploma";

  // ...
  document.querySelector(".contact-title").textContent = "Contact";
  document.querySelectorAll(".contact-label")[0].textContent = "Address:";
  document.querySelectorAll(".contact-text")[0].textContent = "House No. 51, Vargas and Los Indios Street, Palmar Este, La Guaira, Venezuela";
  document.querySelectorAll(".contact-label")[1].textContent = "Email:";
  document.querySelectorAll(".contact-text")[1].textContent = "adrianmayora5@gmail.com";
  document.querySelectorAll(".contact-text")[2].textContent = "Leave your message, and I will gladly respond.";
  document.querySelector('label[for="name"]').textContent = "Name";
  document.querySelector('label[for="email"]').textContent = "Email";
  document.querySelector('label[for="message"]').textContent = "Message";
  document.querySelector(".contact-form-submit").textContent = "Send";
  document.querySelector(".profile-btn").setAttribute("href", "/pdf/Adrian Mayora CV - English.pdf");
}

function translateToES() {
  document.querySelector(".profile-title").textContent = "¡Hola! Soy Adrian Mayora";
  document.querySelector(".profile-details").textContent = "Soy un apasionado de la tecnología, capacitado por la Universidad Simón Bolívar como técnico en electrónica.";
  document.querySelector('.menu a[href="#profile"]').textContent = "Perfil";
  document.querySelector('.menu a[href="#estudio"]').textContent = "Estudios";
  document.querySelector('.menu a[href="#skills"]').textContent = "Certificados";
  document.querySelector('.menu a[href="#contact"]').textContent = "Contacto";
  document.querySelector(".profile-btn").textContent = "Descargar CV";
  document.querySelector(".estudios-title").textContent = "Educación y Experiencias";
  document.querySelector(".estudio-school-date").textContent = "2004-2016";
  document.querySelector(".estudio-school").textContent = 'Colegio "Santo Domingo de Guzmán"';
  document.querySelector(".estudio-school-position").textContent = "Bachiller en Ciencias";
  document.querySelector(".estudio-school-description").textContent =
    "Mi educación primaria y secundaria en el Colegio 'Santo Domingo de Guzmán' se centró en una sólida formación en ciencias. Durante estos años, adquirí conocimientos fundamentales y habilidades académicas que me prepararon para abrazar mi pasión por las ciencias y continuar mi desarrollo educativo y profesional en este campo.";
  document.querySelector(".estudio-university-date").textContent = "2018-2023";
  document.querySelector(".estudio-university").textContent = "Universidad Simón Bolívar";
  document.querySelector(".estudio-university-position").textContent = "Técnico Superior en Electrónica";
  document.querySelector(".estudio-university-description").textContent =
    "En la Universidad Simón Bolívar, mi formación como Técnico Superior en Electrónica me permitió adquirir sólidas habilidades técnicas y fomentar mi pasión por la electrónica y la tecnología. Estos años fueron fundamentales para mi desarrollo profesional y compromiso con la excelencia en el campo.";
  document.querySelector(".estudio-intership-date").textContent = "Abr-Jul 2023";
  document.querySelector(".estudio-intership").textContent = "Electronic Service AS1";
  document.querySelector(".estudio-intership-position").textContent = "Técnico en reparación de televisores";
  document.querySelector(".estudio-intership-description").textContent =
    "En Electronic Service AS1, tuve el privilegio de desempeñar el rol de Técnico en Reparación de Televisores. Durante mi tiempo allí, adquirí un profundo conocimiento en la identificación y solución de problemas en televisores, trabajando con una amplia variedad de modelos y tecnologías. Mi experiencia incluyó el diagnóstico, búsqueda de fallas y atención al cliente. Esta experiencia fortaleció mi destreza técnica y mi capacidad para brindar soluciones efectivas en lo que al hardware se refiere.";
  document.querySelector(".skills-title a").textContent = "Descargar Certificados";
  document.querySelectorAll(".skills-skill")[0].textContent = "IBM Z Xplore Concepts";
  document.querySelectorAll(".skills-skill")[1].textContent = "IBM Z Xplore Advance";
  document.querySelectorAll(".skills-skill")[2].textContent = "Nivel B1 en Inglés Busuu";
  document.querySelectorAll(".skills-skill")[3].textContent = "Arquitectura de Computadoras";
  document.querySelectorAll(".skills-skill")[4].textContent = "Electronic Service AS1";
  document.querySelectorAll(".skills-skill")[5].textContent = "Instalaciones Eléctricas Domiciliarias";
  document.querySelectorAll(".skills-skill")[6].textContent = "Python 101 para Ciencia de Datos";
  document.querySelectorAll(".skills-skill")[7].textContent = "Título de Bachiller";
  document.querySelector(".contact-title").textContent = "Contacto";
  document.querySelectorAll(".contact-label")[0].textContent = "Dirección:";
  document.querySelectorAll(".contact-text")[0].textContent = "Casa n° 51, Calle Vargas y Los Indios, Palmar Este, La Guaira, Venezuela";
  document.querySelectorAll(".contact-label")[1].textContent = "Email:";
  document.querySelectorAll(".contact-text")[1].textContent = "adrianmayora5@gmail.com";
  document.querySelectorAll(".contact-text")[2].textContent = "Deje su mensaje y con gusto le responderé";
  document.querySelector('label[for="name"]').textContent = "Nombre";
  document.querySelector('label[for="email"]').textContent = "Email";
  document.querySelector('label[for="message"]').textContent = "Mensaje";
  document.querySelector(".contact-form-submit").textContent = "Enviar";
  document.querySelector(".profile-btn").setAttribute("href", "/pdf/Adrian Mayora CV - Spanish.pdf");
}

const langSwitcher = document.querySelector(".lang-switcher");

// Configurar el evento de cambio de idioma
langSwitcher.addEventListener("click", () => {
  if (langSwitcher.textContent === "ESPAÑOL") {
    langSwitcher.textContent = "ENGLISH";
  } else {
    langSwitcher.textContent = "ESPAÑOL";
  }

  // Resto del código de cambio de idioma
  if (langSwitcher.textContent === "ENGLISH") {
    translateToEN();
  } else {
    translateToES();
  }
});
