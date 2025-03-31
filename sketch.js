//Função para alterar o tema
const Theme = () =>{
const body = document.body
body.classList.toggle("dark-theme")

  if(body.classList.contains("dark-theme")){
    localStorage.setItem("theme", "dark")
  }
  else{
    localStorage.setItem("theme","light")
  }
  
}

const applySavedTheme = () =>{
  const savedTheme=localStorage.getItem("theme")
  if(savedTheme === "dark"){
    document.body.classList.add("dark-theme")
  }
}

const addThemeButton= () =>{
  const themeButton = document.createElement("button")
  themeButton.textContent= "Alterar Tema"
  themeButton.addEventListener("click",Theme)
  document.body.prepend(themeButton)
}
applySavedTheme()
addThemeButton()