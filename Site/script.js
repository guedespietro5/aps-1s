let mensagemCriada = false;

function MensagemCriada() {
  	 if (!mensagemCriada) {
      mostrarMensagem();
      mensagemCriada = true;
    }
}

function mostrarMensagem() {
  const infoDiv = document.getElementById('infoParqueTecnologico');
  const mensagem = document.getElementById('mensagem');

  if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
    infoDiv.style.display = 'flex';  // mostrar a div com layout flex para imagem ao lado

  } else {
    infoDiv.style.display = 'none';  // esconder a div
    mensagem.textContent = '';
    mensa.style.display = 'none';
  }
}




  let graficoCriado = false;

function mostrarGrafico() {
  const conteudo = document.getElementById('conteudoExtra');
  if (conteudo.style.display === 'none') {
    conteudo.style.display = 'block';

    if (!graficoCriado) {
      criarGrafico();
      graficoCriado = true;
    }
  } else {
    conteudo.style.display = 'none';
  }
}




function criarGrafico() {
  const ctx = document.getElementById('graficoDiversificacao').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Combustíveis', 'Material de Transporte', 'Bebidas', 'Químico', 'Metalurgia', 'Outros'],
      datasets: [{
        label: 'Percentual dos Empregos Formais no Vale do Paraíba (%)',
        data: [15.4, 14.0, 11.2, 12.7, 10.2, 36.5],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgb(0, 216, 245, 0.7)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(0, 216, 245, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 60,
          title: {
            display: true,
            text: 'Percentual (%)'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          enabled: true
        }
      }
    }
  });
}
