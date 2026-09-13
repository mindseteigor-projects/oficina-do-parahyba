// =========================================
// ANO AUTOMÁTICO
// =========================================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// =========================================
// ROLAGEM SUAVE
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const href = link.getAttribute("href");
    const target = document.querySelector(href);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// =========================================
// MENU MOBILE
// =========================================

const menuButton =
  document.getElementById("menuButton");

const menu =
  document.getElementById("menu");


if (menuButton && menu) {

  menuButton.addEventListener("click", () => {

    menu.classList.toggle("show");

  });


  document
    .querySelectorAll("#menu a")
    .forEach(link => {

      link.addEventListener("click", () => {

        menu.classList.remove("show");

      });

    });

}


// =========================================
// FORMULÁRIO → WHATSAPP IG SITES
// =========================================

const form =
  document.getElementById("siteForm");


if (form) {

  form.addEventListener("submit", event => {

    event.preventDefault();


    const nome =
      document
        .getElementById("nome")
        .value
        .trim();


    const negocio =
      document
        .getElementById("negocio")
        .value
        .trim();


    const mensagem =
`Olá! Vi este site demonstrativo e quero um site como este.

Meu nome: ${nome}
Meu negócio: ${negocio}`;


    const numero =
      "5541995229213";


    const whatsapp =
      "https://wa.me/" +
      numero +
      "?text=" +
      encodeURIComponent(mensagem);


    window.open(
      whatsapp,
      "_blank"
    );

  });

}
