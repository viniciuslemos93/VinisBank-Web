var login = sessionStorage.getItem("login")

var bemVindo = document.getElementById('bem-vindo')
bemVindo.innerHTML=`Bem vindo(a) ${login}`



document.getElementById('deposito').addEventListener('click', depositar);
var saldo = document.getElementById('saldo').innerText
parseFloat(saldo)
function depositar() {
    var deposito = prompt("Valor do Depósito");
    
    saldo = saldo + deposito
    //saldo = parseFloat(saldo + deposito)
    //saldo = parseFloat((saldo) + (deposito))
    console.log(saldo)    
}
