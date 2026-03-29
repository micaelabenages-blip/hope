const header = document.getElementById('mainHeader');
    const headerText = document.getElementById('headerText');
    const details = document.getElementById('headerDetails');
    const contentMap = {
      quienes: `H.O.P.E (Huellas, Oportunidades, Protección y Esperanza) es una iniciativa creada por estudiantes con el propósito de apoyar a animales en situación de abandono y colaborar con refugios locales.\n\nNuestro proyecto busca generar conciencia sobre la importancia del respeto, la protección y el cuidado de los animales, fomentando valores como la empatía, la responsabilidad social y el compromiso comunitario.\n\nH.O.P.E nace con la visión de convertirse en un proyecto sostenible que continúe creciendo cada año, permitiendo que más estudiantes participen y que más animales reciban la ayuda que necesitan.`,
      mision: `Promover el bienestar animal mediante actividades solidarias, voluntariado y campañas de concientización que generen un impacto positivo en la comunidad.`,
      vision: `Convertirnos en un proyecto sostenible que continúe creciendo año tras año, apoyando a múltiples refugios y creando una comunidad comprometida con la protección y el respeto hacia los animales.\n\nBuscamos dejar un legado que inspire a futuras generaciones a continuar ayudando.`,
    };

    document.querySelector('.header-bar').addEventListener('click', (event) => {
      const button = event.target.closest('.header-item');
      if (!button) return;
      event.preventDefault();
      const section = button.dataset.section;
      const isSame = button.classList.contains('active');
      document.querySelectorAll('.header-item').forEach(item => item.classList.remove('active'));
      if (isSame) {
        header.classList.remove('open');
        if (window.scrollY <= 20) {
          header.classList.remove('scrolled');
        }
        headerText.textContent = 'Haz click en cualquiera de los botones para ver información sobre el proyecto.';
      } else {
        button.classList.add('active');
        headerText.textContent = contentMap[section] || 'Contenido no disponible.';
        header.classList.add('open');
        header.classList.add('scrolled');
      }
    });

    details.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      const scrollBtn = document.getElementById('scrollTopBtn');
      if (!scrollBtn) return;
      if (window.scrollY > 120) {
        scrollBtn.style.display = 'flex';
      } else {
        scrollBtn.style.display = 'none';
      }
    });

    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
      scrollBtn.style.display = 'none';
      scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }