let f = 1, t = 1, e = 1, c = 1, m = 1, s = 1;

function nen() {
  let respostas = [];
  for (let i = 1; i <= 10; i++) {
    let inputs = document.querySelectorAll(`input[name="q${i}"]`);
    let selecionado = false;
    inputs.forEach((input) => {
      if (input.checked) {
        respostas[i-1] = parseInt(input.value);
        selecionado = true;
      }
    });
    if (!selecionado) {
      alert(`Por favor, responda a questão ${i}.`);
      return;
    }
  }

  const perfis = {
    F: [1, 1, 2, 1, 2, 3, 4, 3, 2, 4],
    E: [1, 3, 1, 2, 4, 1, 5, 5, 3, 2],
    M: [3, 1, 3, 4, 1, 3, 2, 1, 5, 3],
    C: [3, 3, 5, 2, 3, 5, 1, 4, 1, 5],
    T: [5, 5, 3, 5, 5, 2, 3, 2, 4, 1],
    S: [4, 2, 5, 1, 3, 5, 2, 4, 1, 5]
  };

  function distanciaEuclidiana(respostas, perfil) {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
      let diff = respostas[i] - perfil[i];
      soma += diff * diff;
    }
    return Math.sqrt(soma);
  }

  function distanciaAbsoluta(respostas, perfil) {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += Math.abs(respostas[i] - perfil[i]);
    }
    return soma;
  }

  let distancias = {};
  for (let tipo in perfis) {
    distancias[tipo] = distanciaAbsoluta(respostas, perfis[tipo]);
  }

  let menorDist = Infinity;
  let vencedor = "";
  for (let tipo in distancias) {
    if (distancias[tipo] < menorDist) {
      menorDist = distancias[tipo];
      vencedor = tipo;
    }
  }

  const afinidades = {
    F: { F: 1.00, T: 0.80, C: 0.60, S: 0.00, M: 0.40, E: 0.80 },
    T: { F: 0.80, T: 1.00, C: 0.80, S: 0.60, M: 0.00, E: 0.40 },
    C: { F: 0.60, T: 0.80, C: 1.00, S: 0.80, M: 0.60, E: 0.00 },
    S: { F: 0.00, T: 0.60, C: 0.80, S: 1.00, M: 0.80, E: 0.60 },
    M: { F: 0.40, T: 0.00, C: 0.60, S: 0.80, M: 1.00, E: 0.80 },
    E: { F: 0.80, T: 0.40, C: 0.00, S: 0.60, M: 0.80, E: 1.00 }
  };

  const nomes = {
    F: "Fortificador",
    T: "Transmutador",
    C: "Conjurador",
    S: "Especialista",
    M: "Manipulador",
    E: "Emissor"
  };

  let empatados = [];
  for (let tipo in distancias) {
    if (distancias[tipo] === menorDist) {
      empatados.push(tipo);
    }
  }

  let resultado;
  if (empatados.length === 1) {
    resultado = nomes[vencedor];
  } else {
    let melhorTipo = empatados[0];
    let melhorSoma = -Infinity;
    for (let tipo of empatados) {
      const afinidade = afinidades[tipo];
      let soma = 0;
      let invDist = 1 / (distancias[tipo] + 0.1);
      for (let outroTipo in afinidade) {
        soma += invDist * afinidade[outroTipo];
      }
      if (soma > melhorSoma) {
        melhorSoma = soma;
        melhorTipo = tipo;
      }
    }
    resultado = nomes[melhorTipo];
  }

  console.log("Respostas:", respostas);
  console.log("Distâncias:", distancias);
  console.log("Vencedor:", resultado);

  let texto = document.getElementById("Resultado");
  texto.textContent = "Seu tipo é: " + resultado;

  f = 1; t = 1; e = 1; c = 1; m = 1; s = 1;
}