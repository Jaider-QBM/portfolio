export function setupFiltering() {
    // Inicializa la categoría seleccionada
    let selectedCategory = "todos"; // Puedes iniciar con "todos" si quieres mostrar todo al principio
  
    // Maneja el cambio en las opciones de filtrado
    function handleFilterChange(event) {
      selectedCategory = event.target.value;
      filterProjects();
    }
  
    // Filtra los proyectos según la categoría seleccionada
    function filterProjects() {
      const projectItems = document.querySelectorAll(".project-item");
      const noProjectsMessage = document.getElementById("noProjectsMessage");
      let hasProjects = false; // Variable para comprobar si hay proyectos
  
      projectItems.forEach((item) => {
        const category = item.getAttribute("data-category");
  
        if (selectedCategory === "todos" || category === selectedCategory) {
          item.classList.remove("hidden");
          hasProjects = true; // Hay al menos un proyecto
        } else {
          item.classList.add("hidden");
        }
      });
  
      // Muestra u oculta el mensaje según si hay proyectos
      if (!hasProjects) {
        noProjectsMessage.classList.remove("hidden");
      } else {
        noProjectsMessage.classList.add("hidden");
      }
    }
  
    // Asocia el evento 'change' a cada radio button
    const radioButtons = document.querySelectorAll("input[name='radio']");
    radioButtons.forEach((radio) => {
      radio.addEventListener("change", handleFilterChange);
    });
  }
  
  // Asegúrate de que setupFiltering se ejecute al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    setupFiltering();
  });
  