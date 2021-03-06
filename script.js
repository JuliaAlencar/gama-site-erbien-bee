var tempo;
var aux;
var hospedes;
var data_inicial;
var data_final;
console.log('conectou');
const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72/"
const card = document.getElementById('cards')

fetch(url)
    .then(response =>
        response.json()
    )
    .then(data => {
        cardData(data)
    })
    .catch(err => console.log(err))
function cardData(data) {
    card.innerHTML = "";
    data.map(renderCard)
}
function renderCard(data) {
    const div = document.createElement('div')
    div.className = 'col-md-4'
    div.innerHTML = `
    <div class="card">
        <img class="card-img-top" src="${data.photo}" alt="${data.name}" style="">
        <div clas="card-body"  style="padding: 1em; border-radius: 20px" >
          <p class="card-text">${data.property_type}</p>
          <h5 class="card-title" style="height: 3em">${data.name}</h5>
          <p class="card-text">R$: <strong>${data.price}</strong>/noite</p>
      </div>
    </div>
    `
    card.appendChild(div)
}
async function main(){
    dados = await fetchCards();
    if(dados[0]){
        renderCards(dados);
    }
}

function botaoClick(){
    hospedes = document.getElementById('num_hospedes').value;
    data_inicial = new Date(document.getElementById('dia_inicial').value);
    console.log('data inicial é ' + data_inicial);
    data_final = new Date(document.getElementById('dia_final').value);
    console.log('data final é ' + data_final);
    aux = ((data_final.getTime() - data_inicial.getTime()) / (1000 * 3600 * 24))
    tempo = aux > 0 ? aux : "";
    console.log('tempo total da estadia: ' + tempo);
}

function valorTotal(tempo, valor){
    if (tempo == ""){
        document.getElementById('total').style.display = 'none';
    }
    var total = tempo * valor;
    return total;
}