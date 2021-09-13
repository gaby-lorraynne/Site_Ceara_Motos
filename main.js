/*Abre e fecha Menu quando clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Quando clicar em um item do menu, esconder  */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*Mudar o header da pagina quando der o scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/*--ScrollReveal: Mostrar elementos quando der scroll na pag--*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  '#home .image, #home .text, #about .image, #about .text, #Services header, #Services .card, #contact .text, #contact .links, footer .brand',
  { interval: 100 }
)

/**Botão volta para o topo */
const backTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backTopButton.classList.add('show')
  } else {
    backTopButton.classList.remove('show')
  }
})

/*--MENU ativo conforme seção visível na pag--*/
function activateMenuAtCurrenetSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
const sections = document.querySelectorAll('main section[id]')

window.addEventListener('scroll', function () {
  activateMenuAtCurrenetSection()
})
