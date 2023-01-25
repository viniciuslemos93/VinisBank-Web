function cadastrar() {
  let usuario = this.lerDados();
  console.log(usuario.nomeCompleto)
  if (validarCamposCadastro(usuario) == true) {    
    alert ("Ok, Camos Preenchidos")    
    sessionStorage.setItem("nomeCompleto", usuario.nomeCompleto);
    sessionStorage.setItem("email", usuario.nomeCompleto);
    sessionStorage.setItem("senha", usuario.senha);
    sessionStorage.setItem("confirmarSenha", usuario.confirmarSenha);
  }else {
    
  }

}
function validarCamposCadastro(usuario) {
  let msg = ''

  if (!usuario.nomeCompleto) {
    msg += 'Informe o seu nome completo \n'
  }
  if (!usuario.email) {
    msg += 'Informe o seu e-mail \n'
  }
  if (!usuario.senha) {
    msg += 'Informe a sua senha \n'
  }
    if (!usuario.confirmarSenha) {
  msg += 'Confirme a sua senha \n'
  }
  if (msg != '') {
    alert(msg)
    return false
  }
    return true
  }

  function lerDados() {
    let usuario = {}
      usuario.nomeCompleto = document.getElementById('nomeCompleto').value
      usuario.email = document.getElementById('email').value
      usuario.senha = document.getElementById('senha').value
      usuario.confirmarSenha = document.getElementById('confirmarSenha').value
    return usuario;    
  }