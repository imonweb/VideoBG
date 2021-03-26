class Menu {
  
  constructor() {
    this.menuIcon = document.querySelector(".showcase__toggle")
    this.showcase = document.querySelector(".showcase")
    this.events()
  }

  events(){
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu()) 
  }

  toggleTheMenu(){
    this.showcase.classList.toggle("showcase--active")
    this.menuIcon.classList.toggle("showcase__toggle--active")
  }
 
}
  
 
export default Menu