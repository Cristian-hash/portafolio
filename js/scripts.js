const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");

flagsElement.addEventListener("click", (e) => {
  console.log(e.target.parentElement.dataset.language);
});

// Verificar si los elementos existen antes de acceder a sus propiedades
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    // Cambiar el icono y el texto según el tema actual
    toggleIcon.src = "assets/icons/sun.svg";
    toggleText.textContent = "Light Mode";
  } else {
    toggleIcon.src = "assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
  }
});

// Agregar un evento de clic para cambiar el color principal según el elemento clicado
toggleColors.addEventListener("click", (e) => {
  // Validar si el elemento clicado tiene el atributo 'data-color'
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});
