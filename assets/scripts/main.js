class Usuario {
  constructor() {    
    this.nomeCompleto = '';
    this.email = '';
    this.senha = '';
    this.confirmarSenha = '';

  }
/*
  registrarEventos() {
    document.getElementById("btn-cadastrar").addEventListener("click", usuario.cadastrar)
  }
*/
  cadastrar() {
    let usuario = this.lerDados();    
  }
  lerDados() {
    let usuario = {}
      usuario.nomeCompleto = document.getElementById('nomeCompleto').value
      usuario.email = document.getElementById('email').value
      usuario.senha = document.getElementById('senha').value
      usuario.confirmarSenha = document.getElementById('confirmarSenha').value
    return usuario;    
  }

}
var usuario = new Usuario();

/*
class EventosDoUsuario {
    constructor(window) {
      this.window = window;
    }    
    registrarEventos() {
      const tabelaDeEventos = [
        {
          elementId: "btn-login",
          event: "click",
          eventHandler: EventosDoUsuario.logar,
        },
        {
          elementId: "btn-cadastrar",
          event: "click",
          eventHandler: EventosDoUsuario.cadastrar,
        },
      ];
  
      const document = this.window.document;
  
      for (const { elementId, event, eventHandler } of tabelaDeEventos) {
        document.getElementById(elementId)?.addEventListener(event, eventHandler);
      }
    }
  
    static logar() {
      alert('Olá, vamos logar')      
    }
    static cadastrar() {
      let usuario = this.obterDados();
    }

    static obterDados() {
      let usuario = {}

      usuario.nomeCompleto = document.getElementById('nomeCompleto').value

      return usuario
      //var nomeCompleto = document.getElementById('nomeCompleto')
      //var email = document.getElementById('email')
      //var senha = document.getElementById('senha')
      //var confirmarSenha = document.getElementById('confirmarSenha')
    }

    static validarCampos(usuario) {
      if (usuario.nomeCompleto == '') {
        alert('Preencher o campo Nome')
      }
    }

  }  
  const eventos = new EventosDoUsuario(window);
  eventos.registrarEventos();
  */