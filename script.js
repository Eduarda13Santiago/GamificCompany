let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    // Menu fechado - tem a classe menu-fechado
    // Menu aberto - não tem a classe menu-fechado

    // Alterna a classe "menu-fechado" no menu
    // menu.classList.toggle("menu-fechado")

    // Se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu - remover a classe menu-fechado
        menu.classList.remove("menu-fechado")

        // Esconder icone barras
        iconeBarras.style.display = "none"

        // Mostrar o icone do X
        iconeX.style.display = "inline"

    } else {
        // Fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        // Esconder icone do X
        iconeX.style.display = "none"

        // Mostrar o icone barras
        iconeBarras.style.display = "inline"

    }
}

onresize = () => {
    // Abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

    // Esconder icone barras
    iconeBarras.style.display = "none"

    // Mostrar o icone do X
    iconeX.style.display = "inline"
}

function solicitarOrcamento(event) {
    //Pegar os valores dos inputs 
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorTelefone = document.getElementById("campo-telefone").value
    let valorDescricao = document.getElementById("campo-rede").value

    //Organizar os valores em um objeto
    let dadosForm = {

        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone,
        descricao: valorDescricao
    }


fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
        //CASO SUCESSO 
        .then(resposta => {
            console.log(resposta);
            //Limpar os inputs 
            document.querySelector("#formulario form").reset()
            //Mostrar um alert de sucesso 
            alert("Solicitação enviada com sucesso!!! 😁")
        })
        //CASO ERRO     
        .catch(erro => {
            console.log(erro);
            //Mostrar alert com msg de erro  

            alert("Erro de requisição 😢")
        })

event.preventDefault()

}

function solicitarDuvidas(event) {
    //Pegar os valores dos inputs 
    let valorCampo = document.getElementById("campo-campo").value
    let valorDuvida = document.getElementById("campo-escrita").value
    

    //Organizar os valores em um objeto
    let dadosForm = {

        email: valorCampo,
        duvida: valorDuvida
        
    }

    fetch("http://localhost:3000/tireDuvida", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
        //CASO SUCESSO 
        .then(resposta => {
            console.log(resposta);
            //Limpar os inputs 
            document.querySelector("#duvidas form").reset()
            //Mostrar um alert de sucesso 
            alert("Solicitação enviada com sucesso!!! 😍")
        })
        //CASO ERRO     
        .catch(erro => {
            console.log(erro);
            //Mostrar alert com msg de erro  

            alert("Erro de requisição 😒")
        })

event.preventDefault()

}
