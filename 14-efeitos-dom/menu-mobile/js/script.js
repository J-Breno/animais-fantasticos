// você pode exportar mais de uma função no mesmo arquivo, porém você tem que passar entre chaves, e lá o nome na função importa, tem que ser identica, porem você pode modifica-lo utilizando o as, você também pode importar sem especifiar utilizando o * as, eu posso exportar tudo, não necessariamente tem que ser só função, quando eu fiz um curso antigo de javascript eu tinha que usar use strict, porém agora que usa-se modules, ele automáticamente já fica como use strict

import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from "./modules/tab-nav.js";
import initModal from './modules/modal.js';
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from "./modules/menu-mobile.js";

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();