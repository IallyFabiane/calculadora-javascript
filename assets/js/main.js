function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    pressionaBackSpace() { //evento de pressionar a tecla
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.clearDisplay();
        }
      });
    },

    pressionaEnter() { //evento de soltar a tecla
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value; //capturando o valor do display

      try {
        conta = eval(conta); //transformando a string em código js

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },


    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target; //capturando o elemento que foi clicado

        //sequência de if's que checa se o elemento clicasdo é de uma classe específica  e realiza a ação correspondente ao método invocado dentro do bloco

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor; //concatenando valores
    }

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
