// 0 for closed
// 1 for open
let MENU_STATE = 0

function toggleMenu() {
  let menuIcon = document.getElementById("menu-icon")
  let closeIcon = document.getElementById("close-icon")
  let page = document.getElementById("main-content")
  let sidebar = document.getElementById("sidebar")


  MENU_STATE = 1 - MENU_STATE
  if (MENU_STATE === 0) {
    menuIcon.classList.replace("block", "hidden")
    closeIcon.classList.replace("hidden", "block")    
    page.style.opacity = 1
    sidebar.classList.toggle("-translate-x-full")
    page.classList.add("delay-75")
  } else {
    menuIcon.classList.replace("hidden", "block")
    closeIcon.classList.replace("block", "hidden")
    page.style.opacity = 0
    sidebar.classList.toggle("-translate-x-full")
    page.classList.remove("delay-75")
  }
}