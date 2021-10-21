const botaoMenu = document.getElementById("menuMobile");
const cabecalho = document.getElementById("cabecalho");

const linha1 = document.getElementById("line1");
const linha2 = document.getElementById("line2");
const linha3 = document.getElementById("line3");

function menu(){
    if(cabecalho.className == ""){
        cabecalho.classList.add("active")
        linha1.style.backgroundColor = "black"
        linha3.style.backgroundColor = "black"

        linha1.classList.add("ativar")
        linha2.classList.add("ativar2")
        linha3.classList.add("ativar3")
        
    } else {
        cabecalho.classList.remove("active")
        linha1.style.backgroundColor = "white"
        linha3.style.backgroundColor = "white"

        linha1.classList.remove("ativar")
        linha2.classList.remove("ativar2")
        linha3.classList.remove("ativar3")
       
    }

    console.log(cabecalho.className)
}

botaoMenu.addEventListener("click", menu)