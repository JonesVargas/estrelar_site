document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#navMenu");

  if (!navbar || !toggle || !menu) return;

  const closeMenu = () => {
    navbar.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Fecha ao clicar em um link
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) closeMenu();
  });

  // Fecha ao apertar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
