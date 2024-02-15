export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = "ativo";
  
    if (accordionList.length) {
      accordionList[0].classList.add(activeClass);
      accordionList[0].nextElementSibling.classList.add(activeClass);
      function activeAccordion() {
        // console.log(event.currentTarget); // vai pegar exatamento o elemento que eu estou selecionando
        // console.log(this); // mesma coisa do anterior
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
      }
  
      accordionList.forEach((item) => {
        item.addEventListener("click", activeAccordion);
      });
    }
  }