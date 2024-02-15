function initTabNav() {
    // navegação por tab
    // sempre isole os seus códigos Javascript em funções
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");
  
    if (tabMenu.length && tabContent.length) {
      tabContent[0].classList.add("ativo");
  
      function activeTab(index) {
        tabContent.forEach((section) => {
          section.classList.remove("ativo");
        });
        tabContent[index].classList.add("ativo");
      }
  
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => {
          activeTab(index);
        });
      });
    }
  }
  initTabNav();
  
  function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
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
  initAccordion();
  
  function initScrollSuave() {
    const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');
  
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
  initScrollSuave();
  
  /*
  //Forma alternativa scroll suave
  const topSection = section.offsetTop;
  window.scrollTo(
    {
      top: topSection,
        behavior: "smooth"
      }
      );
      */
  function initAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");
    const windowMetade = window.innerHeight * 0.6;
  
    if (sections.length) {
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - windowMetade < 0;
          if (isSectionVisible) section.classList.add("ativo");
          else section.classList.remove("ativo");
        });
      }
      animaScroll();
  
      window.addEventListener("scroll", animaScroll);
    }
  }
  initAnimacaoScroll();