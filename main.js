//activer le toggle lors du click
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line" : "ri-menu-line")
})

//fermeture du toggle apres avoir cliquer sur un bouton
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});


//defilement des elements a l'acceuil
const scrollRevealOption = {
    distance : "50px",
    origin:"bottom",
    duration: 1000,
};

//defilement de la voiture a droite
ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin:"right"
});

//defilement du texte h2
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay:500
});

//defilement du texte h1
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay:1000
});

//defilement du texte de decription
ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay:1500
});

//defilement du formulaire de recherche
ScrollReveal().reveal(".header__form form", {
    ...scrollRevealOption,
    delay:2000
});

//defilement du formulaire de recherche
ScrollReveal().reveal(".about__card", {
    ...scrollRevealOption,
    interval:500
});

const tabs = document.querySelector(".deals__tabs");

tabs.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(
    ".deals__container .tab__content"
  );
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  tabContents.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

ScrollReveal().reveal(".choose__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".choose__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".choose__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".choose__card", {
    duration: 1000,
    delay: 1500,
    interval: 500,
  });