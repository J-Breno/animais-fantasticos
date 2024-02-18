export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map((item) => +item);
  const horarioSemana = funcionamento.dataset.horario.split(',').map((item) => +item);
  
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora< horarioSemana[1]) 
  if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
  
}
