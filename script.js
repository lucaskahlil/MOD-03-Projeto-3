let imagemcard1 = document.querySelector(".imgcard1");
let imagemcard2 = document.querySelector(".imgcard2");
let imagemcard3 = document.querySelector(".imgcard3");

let titulo1card1 = document.querySelector(".titulo1card1");
let titulo1card2 = document.querySelector(".titulo1card2");
let titulo1card3 = document.querySelector(".titulo1card3");

let titulo2card1 = document.querySelector(".titulo2card1");
let titulo2card2 = document.querySelector(".titulo2card2");
let titulo2card3 = document.querySelector(".titulo2card3");

let linkprojeto1 = document.querySelector(".linkprojeto1");
let linkprojeto2 = document.querySelector(".linkprojeto2");
let linkprojeto3 = document.querySelector(".linkprojeto3");

let botao = 0

function verMais () {
    botao++
    if (botao == 1) {
        // CARD1
        titulo1card1.innerHTML = "Projeto 1 MOD 02";
        titulo2card1.innerHTML = "Jogo do Humor";
        imagemcard1.setAttribute("src", "./assets/images/js.png.png");
        linkprojeto1.setAttribute("href", "https://github.com/lucaskahlil/MOD_02-Projeto-1-BlueEdTech");
        // CARD2
        titulo1card2.innerHTML = "Projeto 2 MOD 02"
        titulo2card2.innerHTML = "Pokedex 1"
        imagemcard2.setAttribute("src", "./assets/images/ejs.png.png");
        linkprojeto2.setAttribute("href", "https://github.com/lucaskahlil/MOD_02-Projeto-2-Blue-EdTech-POKEDEX-");
        //CARD3
        titulo1card3.innerHTML = "Projeto 3 MOD 03"
        titulo2card3.innerHTML = "Catalogo Filmes"
        imagemcard3.setAttribute("src", "./assets/images/ejs.png.png");
        linkprojeto3.setAttribute("href", "https://github.com/lucaskahlil/MOD_02-PROJETO-3");
    } if (botao == 2) {
        // CARD1
        titulo1card1.innerHTML = "Projeto 1 MOD 03"
        titulo2card1.innerHTML = "ElGeladon JS"
        imagemcard1.setAttribute("src", "./assets/images/js.png.png");
        linkprojeto1.setAttribute("href", "https://github.com/lucaskahlil/MOD_03-Projeto-1");
        // CARD2
        titulo1card2.innerHTML = "Projeto 2 MOD 03"
        titulo2card2.innerHTML = "ElGeladon React"
        imagemcard2.setAttribute("src", "./assets/images/react.png.png");
        linkprojeto2.setAttribute("href", "https://github.com/lucaskahlil/MOD_03-Projeto-2-El-Geladon");
        //CARD3
        titulo1card3.innerHTML = "Projeto 3 MOD 03"
        titulo2card3.innerHTML = "Portifolio"
        imagemcard3.setAttribute("src", "./assets/images/js.png.png");
        linkprojeto3.setAttribute("href", "");
    } if (botao > 2) {
        botao = 0
        // CARD1
        titulo1card1.innerHTML = "Projeto 1 MOD 01"
        titulo2card1.innerHTML = "Jornada do Heroi"
        imagemcard1.setAttribute("src", "./assets/images/js.png.png");
        linkprojeto1.setAttribute("href", "https://github.com/lucaskahlil/Projeto-1-MOD-01");
        // CARD2
        titulo1card2.innerHTML = "Projeto 2 MOD 01"
        titulo2card2.innerHTML = "Jokenpo"
        imagemcard2.setAttribute("src", "./assets/images/js.png.png");
        linkprojeto2.setAttribute("href", "https://github.com/lucaskahlil/MOD_01-Projeto-2-Blue-EdTech");
        //CARD3
        titulo1card3.innerHTML = "Projeto 3 MOD 01"
        titulo2card3.innerHTML = "Ficção Interativa"
        imagemcard3.setAttribute("src", "./assets/images/js.png.png");
        linkprojeto3.setAttribute("href", "https://github.com/lucaskahlil/MOD_01-Projeto-3-BlueEdTech");
    }
}
