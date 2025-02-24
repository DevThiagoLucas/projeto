function toggleMode() {
  const html = document.documentElement
  //Realiza a troca de temas
  html.classList.toggle("light")
  // Pega a tag img
  const img = document.querySelector("#profile img")
  //Realiza a troca da imagem quando troca o tema
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar_2.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }

  if (html.classList.contains('light')) {
    img.setAttribute('alt', 'Imagem Não Encontrada')
  }

  else {
    img.setAttribute("alt", "Imagem Não Encontrada")
  }

  
}
