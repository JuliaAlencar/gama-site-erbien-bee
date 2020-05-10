console.log('conectou');
const baseAPI = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsContainer = document.querySelector("#propriedades");
let dados = [];

async function fetchCards() {
    return await fetch(baseAPI)
      .then(async(r) => await r.json())
 }

function renderCards(cards){
    cardsContainer.innerHTML = "";
    cards.map(renderCard);
}

function renderCard(card){
    const div = document.createElement("div");
    div.style.width = "20rem";
    div.style.margin = "2rem";
    div.className = "card";
    div.innerHTML = `
        <img src="${card.photo}" class="card-img-top" alt=""/>
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">
                Tipo: ${card.property_type}
            </p>
            <p class="card-text">
                Tipo: R$ ${card.price},00
            </p>
        </div>
        `;
    cardsContainer.appendChild(div);
}

async function main(){
    dados = await fetchCards();
    if(dados[0]){
        renderCards(dados);
    }
}

function botaoClick(){
    var hospedes = document.getElementById('num_hospedes').value;
    var data_inicial = new Date(document.getElementById('dia_inicial').value);
    console.log('data inicial é ' + data_inicial);
    var data_final = new Date(document.getElementById('dia_final').value);
    console.log('data final é ' + data_final);
    var tempo = (data_final.getTime() - data_inicial.getTime()) / (1000 * 3600 * 24);
    console.log('tempo total da estadia: ' + tempo);
}
var valor;
//let propriedades = document.getElementById('propriedades');

function valorTotal(tempo, valor){
    if (tempo == ""){
        document.getElementById('total').style.display = 'none';
    }
    var total = tempo * valor;
    return total;
}