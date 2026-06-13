const CONTACT = {
  whatsappNumber: "5491151275465",
  whatsappMessage:
    "Hola, quiero consultar por F33 POS para mi negocio.",
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
  const tabs = Array.from(showcase.querySelectorAll("[data-showcase-tab]"));
  const panels = Array.from(showcase.querySelectorAll("[data-showcase-panel]"));
  const tabList = showcase.querySelector('[role="tablist"]');

  tabList?.setAttribute("aria-orientation", "horizontal");

  const activateTab = (tab, shouldFocus = false) => {
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

    if (shouldFocus) {
      tab.focus({ preventScroll: true });
      tab.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  };

  const initialTab = tabs.find((tab) => tab.classList.contains("is-active")) ?? tabs[0];

  if (initialTab) {
    activateTab(initialTab);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));

    tab.addEventListener("keydown", (event) => {
      const lastIndex = tabs.length - 1;
      let nextIndex = index;

      if (event.key === "ArrowRight") {
        nextIndex = index === lastIndex ? 0 : index + 1;
      } else if (event.key === "ArrowLeft") {
        nextIndex = index === 0 ? lastIndex : index - 1;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = lastIndex;
      } else {
        return;
      }

      event.preventDefault();
      activateTab(tabs[nextIndex], true);
    });
  });
});

document.querySelectorAll(".faq-list details").forEach((item, index) => {
  const question = item.querySelector("summary");
  const answer = item.querySelector("p");

  if (!question || !answer) {
    return;
  }

  if (!question.id) {
    question.id = `faq-question-${index + 1}`;
  }

  if (!answer.id) {
    answer.id = `faq-answer-${index + 1}`;
  }

  question.setAttribute("aria-controls", answer.id);
  answer.setAttribute("aria-labelledby", question.id);
  answer.setAttribute("role", "region");

  const syncFaqState = () => {
    question.setAttribute("aria-expanded", String(item.open));
  };

  syncFaqState();
  item.addEventListener("toggle", syncFaqState);
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
