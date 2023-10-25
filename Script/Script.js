document.addEventListener("DOMContentLoaded", function () {
  // menu lateral
  const links = document.querySelectorAll(".nav ul li");

  links.forEach((link) => {
    const descricao = link.getAttribute("data-descricao");
    const descricaoElement = document.createElement("span");
    descricaoElement.classList.add("descricao");
    descricaoElement.textContent = descricao;
    link.appendChild(descricaoElement);
  });

  // menu mobile
  const btnMobile = document.querySelector(".btn_mobile");
  const mobileList = document.querySelector(".mobile_list");

  btnMobile.addEventListener("click", () => {
    mobileList.classList.toggle("mobile_open");
  });

  // aparecer e desaparecer os container
  const menuNav = document.querySelectorAll(".menu_nav ul li a");
  const menuMobile = document.querySelectorAll(".menu_mobile ul li a");

  // Recuperar a última seção ativa do armazenamento local
  let currentSectionId = localStorage.getItem("activeSectionId") || "home";

  menuNav.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      toggleSections(targetId);
      currentSectionId = targetId;

      // Salvar a seção ativa no armazenamento local
      localStorage.setItem("activeSectionId", currentSectionId);
    });
  });

  menuMobile.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      toggleSections(targetId);
      currentSectionId = targetId;

      // Salvar a seção ativa no armazenamento local
      localStorage.setItem("activeSectionId", currentSectionId);
    });
  });

  function toggleSections(targetId) {
    const allSections = document.querySelectorAll(".container");
    allSections.forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(targetId).style.display = "block";
  }

  // Mostrar a seção ativa quando a página é carregada
  toggleSections(currentSectionId);

  // Lidar com alterações na orientação da tela
  window.addEventListener("orientationchange", () => {
    // Ao lidar com a mudança de orientação, mantenha a seção ativa
    toggleSections(currentSectionId);
  });

  //pagina de agradecimento form
 
});
