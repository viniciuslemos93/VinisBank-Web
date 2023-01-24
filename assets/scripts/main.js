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
          elementId: "cep",
          event: "focusout",
          eventHandler: EventosDoUsuario.consultarCep,
        },
      ];
  
      const document = this.window.document;
  
      for (const { elementId, event, eventHandler } of tabelaDeEventos) {
        document.getElementById(elementId)?.addEventListener(event, eventHandler);
      }
    }
  
    static logar() {
      alert('Olá')
    }

  }  
  const eventos = new EventosDoUsuario(window);
  eventos.registrarEventos();