const containerP = document.getElementsByClassName('p')[0];
const containerR = document.getElementsByClassName('r')[0];
const containeOp = document.getElementsByClassName('opcao')[0];
const containerEnv = document.getElementsByClassName('enviar')[0];
const containerInp = document.getElementsByClassName('ipnRadio');
const quizz = document.getElementsByClassName('quizz')[0];

const perguntas = [
  'Qual é a faixa de temperatura média na Amazônia? ',
  'Como a Amazônia ajuda a suavizar as mudanças climáticas? ',
  'Qual é o impacto da degradação da Amazônia? ',
  'Qual é uma medida para conservar o clima da Amazônia? ',
];
const respostas = [
  [
    '25 a 27°C',
    '20 a 25°C',
    '15 a 20°C',
    '30 a 35°C',
  ],
  ['Liberando metano', 'Absorvendo  CO₂', 'Aumentando a temperatura.', 'Reduzindo a umidade'],
  
  ['Redução na absorção CO₂', 'Afeta a disponibilidade de água ', 'Aumento em água doce', ' Redução de incêndios florestais'],

  ['Àreas Protegidas...', 'Incentivo  desmatamento', ' Reduzir de a. protegidas', ' Aumento exploração de madeireira'],
];

function createIpn() {
  let txt = document.createElement('p');

  for (c = 1; c <= 4; c += 1) {
    let ipnRadio = document.createElement('input');
    ipnRadio.setAttribute('type', 'radio');
    ipnRadio.setAttribute('name', 'ipnRadio');
    ipnRadio.setAttribute('class', 'ipnRadio');
    containerR.append(ipnRadio);
  }
}
createIpn(perguntas);

// GERANDO PERGUNTAS

function createP(req, pos) {
  containerP.innerHTML = req[pos];
  console.log(`Pergunta ${pos + 1} criada com sucesso`);
}

var c = 0;
var acertos = 0;

createP(perguntas, 0);

// GERANDO ALTERNATIVAS

function gerarAlternativas(posX, posY) {
  respostas[posX].map((el, i) => {
    const elementos = [];
    switch (0) {
      case 0: {
        elementos[0] = el;
      }
      case 1: {
        elementos[1] = el;
      }
      case 2: {
        elementos[2] = el;
      }
      case 3: {
        elementos[3] = el;
      }
    }

    const section = document.createElement('section');
    section.setAttribute('class', 'option');
    section.innerText = elementos[posX];
    const sections = [...document.getElementsByClassName('option')];
    sections.map((el, i) => {
      containeOp.removeChild(el);
    });
    setTimeout(() => {
      containeOp.appendChild(section);
    }, 200);
  });
}

gerarAlternativas(c);

// REMOVENDO ALTERNATIVAS JÁ MOSTRADAS

// VALIDANDO RESPOSTA SELECIONADA

function verificar(q) {
  const inputs = [
    containerInp[0],
    containerInp[1],
    containerInp[2],
    containerInp[3],
  ];
  let result;
  inputs.map((el, i, a) => {
    if (el.checked == true) {
      if (q == 0) {
        if (i == 0) {
          result = true;
          acertos += 1;
        }
      } else if (q == 1) {
        if (i == 1) {
          result = true;
          acertos += 1;
        }
      } else if (q == 2) {
        if (i == 1) {
          // este número é a posição em que a resposat está
          result = true;
          acertos += 1;
        }
      } else if (q == 3) {
        if (i == 0) {
          result = true;
          acertos += 1;
        }
      } else if (q == 4) {
        if (i == 4) {
          result = true;
          acertos += 1;
        }
      } else {
        result = false;
      }
    }
  });
  return result;
}

// CRIANDO PERGUNTAS ,VALIDANDO RESPOSTAS,REMOVENDO E GERANDO NOVAS ALTERNATIVAS

containerEnv.addEventListener('click', () => {
  if (verificar(c) == true) {
    if (c == 3) {
      containerP.innerHTML = 'FIM';
      containeOp.innerHTML = `Acertos: ${acertos}`;
    } else {
      console.log('Resposta correta');
      c++;
      createP(perguntas, parseInt(c));
      gerarAlternativas(c);
    }
  } else {
    if (c == 3) {
      containerP.innerHTML = 'FIM';
      containeOp.innerHTML = `Acertos: ${acertos}`;
    } else {
      c++;
      createP(perguntas, parseInt(c));
      gerarAlternativas(c);
    }
  }
});
