const CONTACT = {
  whatsappNumber: "5491151275465",
  whatsappMessage:
    "Hola, quiero consultar por Forever33 Systems y el POS para ferreterias y distribuidoras.",
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

document.querySelectorAll("[data-showcase]").forEach((showcase) => {
  const tabs = showcase.querySelectorAll("[data-showcase-tab]");
  const panels = showcase.querySelectorAll("[data-showcase-panel]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-showcase-tab");

      tabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
        item.setAttribute("tabindex", isActive ? "0" : "-1");
      });

      panels.forEach((panel) => {
        const isActive = panel.getAttribute("data-showcase-panel") === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
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
