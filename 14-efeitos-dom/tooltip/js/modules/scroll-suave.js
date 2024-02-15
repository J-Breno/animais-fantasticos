export default function initScrollSuave() {
  const linkInterno = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  if (linkInterno.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linkInterno.forEach((item) => {
      item.addEventListener("click", scrollToSection);
    });
  }
}
