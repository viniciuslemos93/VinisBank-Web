var login = sessionStorage.getItem("login")

var bemVindo = document.getElementById('bem-vindo')
bemVindo.innerHTML=`Bem vindo(a) ${login}`


document.getElementById('deposito').addEventListener('click', depositar);

var saldoStr = document.getElementById('saldo').innerText
var saldo = parseFloat(saldoStr);

function depositar() {
    var depositoStr = prompt("Valor do Depósito");
    let deposito = parseFloat(depositoStr);
    console.log(deposito)
    console.log(saldo)
    saldo = saldo + deposito
    console.log('Novo saldo abaixo')
    var saldoFormatado = +(saldo.toFixed(2))
    console.log(saldoFormatado)
    
}