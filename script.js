let conta = 0
let pessoas = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input",)

function recebervalorconta(evento) {
    conta = Number(envento.target.value)
}

const pessoasinput = document.querySelector("#pessoas")
pessoasinput.addEventListener("input",receberquantidadepessoas)


function receberquantidadepessoas(evento) {
    const paragrafoerro = document.querySelector(".pessoas #erro")
    const diverro = document.querySelector(".pessoas .input-box")

    if(evento.tager.value === "0"){
        paragrafoerro.styles.display = "block"
        diverro.setAttribute("id", "erro-div")
        
    }else{
        paragrafoerro.styles.display = "none"
        diverro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
}