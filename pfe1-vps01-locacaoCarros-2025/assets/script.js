const carros = [
    {
      "id": 1,
      "modelo": "Onix LT 1.0",
      "marca": "Chevrolet",
      "ano": 2022,
      "imagem": "docs/onix.png",
      "combustivel": "doc/Flex",
      "portas": 4,
      "transmissao": "Manual",
      "valor_diaria": 120.00
    },
    {
      "id": 2,
      "modelo": "HB20 Vision",
      "marca": "Hyundai",
      "ano": 2023,
      "imagem": "docs/hb20.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 150.00
    },
    {
      "id": 3,
      "modelo": "Renegade Longitude",
      "marca": "Jeep",
      "ano": 2023,
      "imagem": "docs/renegade.jpg",
      "combustivel": "Gasolina",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 210.00
    },
    {
      "id": 4,
      "modelo": "Corolla XEi",
      "marca": "Toyota",
      "ano": 2022,
      "imagem": "docs/corolla.jpeg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 250.00
    },
    {
      "id": 5,
      "modelo": "Civic Touring",
      "marca": "Honda",
      "ano": 2021,
      "imagem": "docs/civic.jpg",
      "combustivel": "Gasolina",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 230.00
    },
    {
      "id": 6,
      "modelo": "Fiat Mobi Like",
      "marca": "Fiat",
      "ano": 2022,
      "imagem": "docs/mobi.png",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Manual",
      "valor_diaria": 90.00
    },
    {
      "id": 7,
      "modelo": "Kwid Zen",
      "marca": "Renault",
      "ano": 2023,
      "imagem": "docs/kwid.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Manual",
      "valor_diaria": 95.00
    },
    {
      "id": 8,
      "modelo": "Gol Trendline",
      "marca": "Volkswagen",
      "ano": 2021,
      "imagem": "docs/gol.webp",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Manual",
      "valor_diaria": 100.00
    },
    {
      "id": 9,
      "modelo": "Compass Limited",
      "marca": "Jeep",
      "ano": 2022,
      "imagem": "docs/compass.jpg",
      "combustivel": "Diesel",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 270.00
    },
    {
      "id": 10,
      "modelo": "Tracker Premier",
      "marca": "Chevrolet",
      "ano": 2023,
      "imagem": "docs/tracker.jpg",
      "combustivel": "Flex",
      "portas": 4,
      "transmissao": "Automático",
      "valor_diaria": 220.00
    }
   ];
   
   const carroLista = document.querySelector(".carro-lista");
const carroModal = document.getElementById("carro-modal");
const btnFecharModal = document.getElementById("fechar-modal");
const btnLocar = document.getElementById("btn-locar");
const selectCarro = document.getElementById("carro");

function carregarCarros() {
    carros.forEach(carro => {
        const divCarro = document.createElement("div");
        divCarro.classList.add("carro");
        divCarro.innerHTML = `
            <img src="${carro.imagem}" alt="${carro.modelo}">
            <h3>${carro.modelo}</h3>
            <button class="btn-ver-detalhes" data-id="${carro.id}">Ver Detalhes</button>
        `;
        carroLista.appendChild(divCarro);
    });
}

document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-ver-detalhes")) {
        const carroId = e.target.getAttribute("data-id");
        const carro = carros.find(c => c.id == carroId);
        
        document.getElementById("modelo-modal").textContent = carro.modelo;
        document.getElementById("detalhes-modal").textContent = `Marca: ${carro.marca} | Ano: ${carro.ano} | Combustível: ${carro.combustivel} | Portas: ${carro.portas} | Transmissão: ${carro.transmissao}`;
        document.getElementById("valor-modal").textContent = `Diária: R$ ${carro.valor_diaria}`;
        
        carroModal.style.display = "flex";
    }
});

btnFecharModal.addEventListener("click", () => {
    carroModal.style.display = "none";
});

function preencherSelectCarro() {
    carros.forEach(carro => {
        const option = document.createElement("option");
        option.value = carro.id;
        option.textContent = carro.modelo;
        selectCarro.appendChild(option);
    });
}

document.getElementById("form-locacao").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataInicio = document.getElementById("data-inicio").value;
    const dataFim = document.getElementById("data-fim").value;
    const carroId = selectCarro.value;
    
    if (cpf.length !== 11) {
        alert("CPF deve ter 11 dígitos.");
        return;
    }

    const locacao = {
        nome,
        cpf,
        dataInicio,
        dataFim,
        carroId
    };

    const locacoes = JSON.parse(localStorage.getItem("locacoes")) || [];
    locacoes.push(locacao);
    localStorage.setItem("locacoes", JSON.stringify(locacoes));
    alert("Locação registrada");
});

carregarCarros();
preencherSelectCarro();