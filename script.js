function toggleMode() {
    const html = document.documentElement;

    // if (html.classList.contains("light")) {
    //     html.classList.remove("light");
    // } else {
    //     html.classList.add("light");
    // }

    /*O código a cima faz o mesmo desse abaixo */
    html.classList.toggle("light");

    /*Pegando a imagem*/
    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-darkmode.png");
        img.setAttribute("alt", "oto de Lyzzandro, usando camiseta preta, com uma parede branca ao fundo");
    } else {
        img.setAttribute("src", "./assets/avatar.png");
    }
}
