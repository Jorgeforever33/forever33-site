const CONTACT = {
  whatsappNumber: "5491151275465",
  whatsappMessage:
    "Hola, quiero consultar por Forever33 Systems y el POS para ferreterías.",
};

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("is-open") ?? false;
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
const cleanNumber = CONTACT.whatsappNumber.replace(/\D/g, "");

if (cleanNumber) {
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
  whatsappLinks.forEach((link) => {
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}
