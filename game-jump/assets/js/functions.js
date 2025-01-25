var canves, ctx, ALTURA, LARGURA, maxPulos = 5, velocidade = 6, estadoAtual, record, img,
pontosParaNovaFase = [7, 14, 21, 28],
faseAtual = 0,
soundBackground = new Audio("assets/sound/overworld.mp3"),

labelNovaFase = {
  texto: "",
  opacidade: 0,

  fadeIn: function(segundo) {

    var idFadeIn = setInterval(function() {

      if(labelNovaFase.opacidade < 1)
        labelNovaFase.opacidade += 0.01;
      else
        clearInterval(idFadeIn);
    }, 10 * segundo);
  },

  fadeOut: function(segundo) {

    var idFadeOut = setInterval(function() {

      if(labelNovaFase.opacidade > 0)
        labelNovaFase.opacidade -= 0.01;
      else
        clearInterval(idFadeOut);
    }, 10 * segundo);
  }
},

estados = {

  jogar: 0,
  jogando: 1,
  perdeu: 2
},

chao = {

  y: 550,
  x: 0,
  altura: 50,

  atualiza: function() {

    this.x -= velocidade;

    if(this.x <= -30)
      this.x += 30;
  },

  desenha: function() {

    spriteChao.desenha(this.x, this.y);
    spriteChao.desenha(this.x + spriteChao.largura, this.y);
  }
},

bloco = {

  x: 50,
  y: 0,
  altura: spriteBoneco.altura,
  largura: spriteBoneco.largura,
  gravidade: 1.6,
  velocidade: 0,
  forcaDoPulo: 23.6,
  qtdPulos: 0,
  score: 0,
  rotacao: 0,

  atualiza: function() {

    this.velocidade += this.gravidade;
    this.y += this.velocidade;
    this.rotacao += Math.PI / 180 * velocidade;

    if(this.y > chao.y - this.altura && estadoAtual != estados.perdeu) {

      this.y = chao.y - this.altura;
      this.qtdPulos = 0;
      this.velocidade = 0;
    }
  },

  pula: function() {

    if(this.qtdPulos < maxPulos) {

      this.velocidade = -this.forcaDoPulo;
      this.qtdPulos++;
    }
  },

  reset: function() {

    this.velocidade = 0;
    this.y = 0;

    if(this.score > record) {

      record = this.score;
      localStorage.setItem("record", record);
    }

    this.score = 0;
    velocidade = 6;
    faseAtual = 0;
    this.gravidade = 1.6;
  },

  desenha: function() {

    // Realiza a rotação do boneco.
    ctx.save();
    ctx.translate(this.x + this.largura / 2, this.y + this.altura / 2);
    ctx.rotate(this.rotacao);
    spriteBoneco.desenha(-this.largura / 2, - this.altura / 2);
    ctx.restore();
  }
},

obstaculos = {

  _barreira: [],
  _scored: false,
  cores: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d"],
  tempoInsere: 0,

  insere: function() {

    this._barreira.push({

      x: LARGURA,
      largura: 50,
      altura: 25 + Math.floor(120 * Math.random()),
      cor: this.cores[Math.floor(this.cores.length * Math.random())]
    });

    this.tempoInsere = 35 + Math.floor(21 * Math.random());
  },

  atualiza: function() {

    if(this.tempoInsere == 0)
      this.insere();
    else
      this.tempoInsere--;

    let length = this._barreira.length;

    for(var i = 0; i < length; i++) {

      this._barreira[i].x -= velocidade;

      if(bloco.x < this._barreira[i].x + this._barreira[i].largura &&
        bloco.x + bloco.largura >= this._barreira[i].x &&
        bloco.y + bloco.altura >= chao.y - this._barreira[i].altura)
         estadoAtual = estados.perdeu;

      if(this._barreira[i].x <= 0 && !this._barreira[i]._scored) {

        bloco.score++;
        this._barreira[i]._scored = true;

        if(faseAtual < pontosParaNovaFase.length && bloco.score == pontosParaNovaFase[faseAtual])
          mudarFase();
      }

      if(this._barreira[i].x <= -this._barreira[i].largura) {

        // Apago item do array assim que sair da tela
        this._barreira.splice(i, 1);
        length --;
        i --;
      }
    }
  },

  limpa: function() {

    this._barreira = [];
  },

  desenha: function() {

    let length = this._barreira.length;

    for(var i = 0; i < length; i++) {

      ctx.fillStyle = this._barreira[i].cor;
      ctx.fillRect(this._barreira[i].x, chao.y - this._barreira[i].altura, this._barreira[i].largura, this._barreira[i].altura);
    }
  }
};

function mudarFase() {

  velocidade++;
  faseAtual++;

  if(faseAtual == 4)
    bloco.gravidade *= 0.6;

  labelNovaFase.texto = "Level " + faseAtual;
  labelNovaFase.fadeIn(0.4);

  setTimeout(function() {

    labelNovaFase.fadeOut(0.4);
  }, 800);

  var sound = new Audio("assets/sound/level.wav");
  sound.play();
}

function main() {

  ALTURA 	= window.innerHeight;
  LARGURA = window.innerWidth;

  if(LARGURA => 500) {

    ALTURA	= 600;
    LARGURA = 600;
  }

  soundBackground.play();

  canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  canvas.style.border = "1px solid #ccc";

  ctx = canvas.getContext("2d");

  document.body.appendChild(canvas);

  document.addEventListener("mousedown", clique);
  document.body.onkeyup = function(e) {

    // https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    if(e.keyCode === 32 || e.keyCode === 38 || e.keyCode === 87)
      clique();
  }

  estadoAtual = estados.jogar;
  record = localStorage.getItem("record");

  if(record == null)
    record = 0;

  img = new Image();
  img.src="assets/i/sheet.png";

  roda();
}

function clique(event) {

  if(!soundBackground.play())
    soundBackground.play();

  switch(estadoAtual) {
    case estados.jogando:
      var sound = new Audio("assets/sound/jump.wav");
      sound.play();
      bloco.pula();
      break;

    case estados.jogar:
      estadoAtual = estados.jogando;
      break;

    case estados.perdeu:
      estadoAtual = estados.jogar;
      obstaculos.limpa();
      bloco.reset();
  }
}

function roda() {

  atualiza();
  desenha();

  window.requestAnimationFrame(roda);
}

function atualiza() {

  if(estadoAtual == estados.jogando)
    obstaculos.atualiza();

  chao.atualiza();
  bloco.atualiza();
}

function desenha() {

  bg.desenha(0, 0);

  ctx.fillStyle = "#fff";
  ctx.font = "50px Arial";
  ctx.fillText(bloco.score, 30, 68);
  ctx.fillStyle = "rgba(0, 0, 0, " + labelNovaFase.opacidade + ")"
  ctx.fillText(labelNovaFase.texto, canvas.width / 2 - ctx.measureText(labelNovaFase.texto).width / 2, canvas.height / 3);


  if(estadoAtual == estados.jogando)
    obstaculos.desenha();

  chao.desenha();
  bloco.desenha();

  if(estadoAtual == estados.jogar)
    jogar.desenha(LARGURA / 2 - jogar.largura / 2, ALTURA / 2 - jogar.altura / 2);


  if(estadoAtual == estados.perdeu) {

    perdeu.desenha(LARGURA / 2 - perdeu.largura / 2, ALTURA / 2 - perdeu.altura / 2 - spriteRecord.altura / 2);
    spriteRecord.desenha(LARGURA / 2 - spriteRecord.largura / 2, ALTURA / 2 + perdeu.altura / 2 - spriteRecord.altura / 2 - 25);
    ctx.fillStyle = "#fff";

    if(bloco.score > record) {

      novo.desenha(LARGURA / 2 - 180, ALTURA / 2 + 30);
      ctx.fillText(bloco.score, 420, 470);
    } else {

      ctx.fillText(bloco.score, 375, 392);
      ctx.fillText(record, 415, 470);
    }
  }
}

// Inicializa o game
main();
