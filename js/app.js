const navDisplay=document.querySelector('.navLink')
const bodyNoScroll=document.querySelector('.body')

function onToggleMenu(e) {

  e.name= e.name==='menu'?'close': 'menu'
  console.log(e.name)

  navDisplay.classList.toggle('left-0')
  bodyNoScroll.classList.toggle('overflow-hidden')
  
}
