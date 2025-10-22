const quizContainer = document.getElementById('quiz-container');
const resultadoDiv = document.getElementById('resultado');
const pontuacaoP = document.getElementById('pontuacao');

const perguntas = [
  {
    pergunta: "1. Qual é a capital do Brasil?",
    opcoes: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
    correta: 1
  },
  {
    pergunta: "2. Quanto é 2 + 2?",
    opcoes: ["3", "4", "5", "6"],
    correta: 1
  },
  {
    pergunta: "3. Qual planeta é conhecido como o Planeta Vermelho?",
    opcoes: ["Marte", "Vênus", "Saturno", "Terra"],
    correta: 0
  },
  {
    pergunta: "4. Qual é a fórmula da água?",
    opcoes: ["H2O", "CO2", "NaCl", "O2"],
    correta: 0
  },
  {
    pergunta: "5. Qual é o maior oceano do planeta?",
    opcoes: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    correta: 3
  },
  {
    pergunta: "6. Quem pintou a Mona Lisa?",
    opcoes: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
    correta: 1
  },
  {
    pergunta: "7. Qual é o metal usado para fabricar fios elétricos?",
    opcoes: ["Ouro", "Prata", "Cobre", "Ferro"],
    correta: 2
  },
  {
    pergunta: "8. Qual é o maior planeta do sistema solar?",
    opcoes: ["Terra", "Marte", "Júpiter", "Saturno"],
    correta: 2
  },
  {
    pergunta: "9. Qual é o idioma mais falado no mundo?",
    opcoes: ["Inglês", "Chinês", "Espanhol", "Hindi"],
    correta: 1
  },
  {
    pergunta: "10. Em que continente está o Egito?",
    opcoes: ["Ásia", "Europa", "África", "América"],
    correta: 2
  },
  {
    pergunta: "11. Qual animal é conhecido como o rei da selva?",
    opcoes: ["Tigre", "Elefante", "Leão", "Pantera"],
    correta: 2
  },
  {
    pergunta: "12. Qual é a cor do sangue oxigenado?",
    opcoes: ["Azul", "Vermelho", "Roxo", "Verde"],
    correta: 1
  },
  {
    pergunta: "13. Qual o símbolo químico do ferro?",
    opcoes: ["Fe", "Ir", "In", "F"],
    correta: 0
  },
  {
    pergunta: "14. Qual é a capital da França?",
    opcoes: ["Paris", "Londres", "Berlim", "Roma"],
    correta: 0
  },
  {
    pergunta: "15. Qual é o menor número primo?",
    opcoes: ["1", "2", "3", "0"],
    correta: 1
  }
];

let perguntaAtual = 0;
let acertos = 0;

function mostrarPergunta() {
  if (perguntaAtual >= perguntas.length) {
    mostrarResultado();
    return;
  }

  const q = perguntas[perguntaAtual];

  quizContainer.innerHTML = `
    <div class="question">${q.pergunta}</div>
    <div class="options">
      ${q.opcoes.map((opcao, index) => `
        <button class="option-btn" onclick="verificarResposta(${index})">
          ${opcao}
        </button>
      `).join('')}
    </div>
  `;
}

function verificarResposta(respostaSelecionada) {
  const pergunta = perguntas[perguntaAtual];
  if (Number(respostaSelecionada) === pergunta.correta) {
    acertos++;
  }
  perguntaAtual++;
  mostrarPergunta();
}

function mostrarResultado() {
  quizContainer.classList.add('hidden');
  resultadoDiv.classList.remove('hidden');

  const total = perguntas.length;
  const erros = total - acertos;

const porcentagemAcertos = Number(((acertos / total) * 100).toFixed(1));
const porcentagemErros = Number((100 - porcentagemAcertos).toFixed(1));

  pontuacaoP.textContent = `Você acertou ${acertos} de ${total} questões. 
  (${porcentagemAcertos}% de acertos e ${porcentagemErros}% de erros)`;

  const ctx = document.getElementById('grafico').getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Acertos (%)', 'Erros (%)'],
      datasets: [{
        data: [porcentagemAcertos, porcentagemErros],
        backgroundColor: ['#4caf50', '#f44336']
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}
 mostrarPergunta();