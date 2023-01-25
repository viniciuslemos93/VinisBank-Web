function cadastrar() {
  let usuario = this.lerDadosCadastro();
  
  if (validarCamposCadastro(usuario) == true) {    
    window.location.href = "../../index.html";
    sessionStorage.setItem("nomeCompleto", usuario.nomeCompleto);
    sessionStorage.setItem("email", usuario.email);
    sessionStorage.setItem("senha", usuario.senha);
    sessionStorage.setItem("confirmarSenha", usuario.confirmarSenha);
  }else {

  }

}
function logar() {
  let dadosLogin = this.lerDadosLogin();
  //Pegando os dados de login que o usuário cadastrou pelo SessionStorage e guardando nas variáveis email e senha.
  login.emailBD = sessionStorage.getItem("email")
  login.senhaBD = sessionStorage.getItem("senha")

  if (validarCamposLogin(dadosLogin) == true) {
    
      if (dadosLogin.email === login.emailBD) {
        alert('LOGOU!!')
        window.location.href = "assets/paginas/home.html";
      }else
        alert('Login incorreto!')
  }else {

  }

}

function validarCamposLogin(login) {
  let msg = ''
  
  if (!login.email) {
    msg += 'Informe o seu e-mail para login \n'
  }
  if (!login.senha) {
    msg += 'Informe a sua senha \n'  
  if (msg != '') {
    alert(msg)
    return false
  }
    return true
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
  if (usuario.senha != usuario.confirmarSenha) {
    msg += 'As senhas não conferem'
  }
  if (msg != '') {
    alert(msg)
    return false
  }
    return true
  }

  function lerDadosLogin() {
    let login = {}
      login.email = document.getElementById('login').value
      login.senha = document.getElementById('senha').value      
    return login;
  }

  function lerDadosCadastro() {
    let usuario = {}
      usuario.nomeCompleto = document.getElementById('nomeCompleto').value
      usuario.email = document.getElementById('email').value
      usuario.senha = document.getElementById('senha').value
      usuario.confirmarSenha = document.getElementById('confirmarSenha').value
    return usuario;    
  }