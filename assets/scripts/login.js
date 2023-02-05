var login = sessionStorage.getItem("login")

var bemVindo = document.getElementById('bem-vindo')
bemVindo.innerHTML=`Bem vindo(a) ${login}`


document.getElementById('deposito').addEventListener('click', depositar);
document.getElementById('boleto').addEventListener('click', pagarBoleto);

var saldoStr = document.getElementById('saldo').innerText
var saldo = parseFloat(saldoStr);

function depositar() {
    var depositoStr = prompt("Valor do Depósito");
    let deposito = parseFloat(depositoStr);    
    saldo += deposito

    document.getElementById('saldo').textContent = (saldo);
}
function pagarBoleto() {
    var boletoStr = prompt("Valor do Boleto à pagar");
    let valorBoleto = parseFloat(boletoStr);

    saldo -= valorBoleto
    document.getElementById('saldo').textContent = (saldo);
}