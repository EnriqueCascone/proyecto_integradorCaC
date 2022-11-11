const valorTicket=200;

let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("selectorCategoria");


function calcularTotal(){
    let total = (cantidadTickets.value) * valorTicket;
    if(categoria.value == 0){
        total = total * 0.2;
    }
    if(categoria.value == 1){
        total = total * 0.5;
    }
    if(categoria.value == 2){
        total = total * 0.85;
    }
    totalParaPagar.innerHTML = total;
}
btnResumen.addEventListener("click",calcularTotal);

function resetValues(){
    totalParaPagar.innerHTML = "";
}
btnBorrar.addEventListener("click", resetValues);