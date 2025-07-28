function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;

      if (id === "navbar") {
        const toggle = document.getElementById("menu-toggle");
        const navLinks = document.getElementById("nav-links");

        if (toggle && navLinks) {
          toggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
          });
        }
      }
    });
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");
