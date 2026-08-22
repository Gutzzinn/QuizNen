let f = 1, t = 1, e = 1, c = 1, m = 1, s = 1;

function nen() {
  q1 = document.querySelectorAll('input[name="q1"]');
  q2 = document.querySelectorAll('input[name="q2"]');
  q3 = document.querySelectorAll('input[name="q3"]');
  q4 = document.querySelectorAll('input[name="q4"]');
  q5 = document.querySelectorAll('input[name="q5"]');
  q6 = document.querySelectorAll('input[name="q6"]');
  q7 = document.querySelectorAll('input[name="q7"]');
  q8 = document.querySelectorAll('input[name="q8"]');
  q9 = document.querySelectorAll('input[name="q9"]');
  q10 = document.querySelectorAll('input[name="q10"]');
  
q1.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.2; e *= 1.2; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 2) { f *= 1.1; e *= 1.1; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 1.0; e *= 1.0; m *= 0.9; s *= 0.9; c *= 0.9; t *= 1.0; }
    if (input.value == 5) { f *= 1.0; e *= 1.0; m *= 0.8; s *= 0.9; c *= 0.8; t *= 1.0; }
  }
});

q2.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.2; e *= 1.0; m *= 1.2; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 2) { f *= 1.1; e *= 1.0; m *= 1.1; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 1.0; e *= 0.9; m *= 1.0; s *= 0.9; c *= 1.0; t *= 0.9; }
    if (input.value == 5) { f *= 1.0; e *= 0.8; m *= 1.0; s *= 0.9; c *= 1.0; t *= 0.8; }
  }
});

q3.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.2; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.2; t *= 1.0; }
    if (input.value == 2) { f *= 1.1; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.1; t *= 1.0; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 1.0; e *= 1.0; m *= 0.9; s *= 0.9; c *= 1.0; t *= 0.9; }
    if (input.value == 5) { f *= 1.0; e *= 1.0; m *= 0.8; s *= 0.9; c *= 1.0; t *= 0.8; }
  }
});

q4.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.2; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.2; }
    if (input.value == 2) { f *= 1.1; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.1; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 1.0; e *= 0.9; m *= 1.0; s *= 0.9; c *= 0.9; t *= 1.0; }
    if (input.value == 5) { f *= 1.0; e *= 0.8; m *= 1.0; s *= 0.9; c *= 0.8; t *= 1.0; }
  }
});

q5.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.0; e *= 1.2; m *= 1.2; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 2) { f *= 1.0; e *= 1.1; m *= 1.1; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 0.9; e *= 1.0; m *= 1.0; s *= 0.9; c *= 0.9; t *= 1.0; }
    if (input.value == 5) { f *= 0.8; e *= 1.0; m *= 1.0; s *= 0.9; c *= 0.8; t *= 1.0; }
  }
});

q6.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.0; e *= 1.2; m *= 1.0; s *= 0.9; c *= 1.2; t *= 1.0; }
    if (input.value == 2) { f *= 1.0; e *= 1.1; m *= 1.0; s *= 0.9; c *= 1.1; t *= 1.0; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 1.0; e *= 1.0; m *= 0.9; s *= 0.9; c *= 1.0; t *= 0.9; }
    if (input.value == 5) { f *= 1.0; e *= 1.0; m *= 0.8; s *= 0.9; c *= 1.0; t *= 0.8; }
  }
});

q7.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.0; e *= 1.2; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.2; }
    if (input.value == 2) { f *= 1.0; e *= 1.1; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.1; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 0.9; e *= 1.0; m *= 0.9; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 5) { f *= 0.8; e *= 1.0; m *= 0.8; s *= 0.9; c *= 1.0; t *= 1.0; }
  }
});

q8.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.0; e *= 1.0; m *= 1.2; s *= 0.9; c *= 1.2; t *= 1.0; }
    if (input.value == 2) { f *= 1.0; e *= 1.0; m *= 1.1; s *= 0.9; c *= 1.1; t *= 1.0; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 1.0; e *= 0.9; m *= 1.0; s *= 0.9; c *= 1.0; t *= 0.9; }
    if (input.value == 5) { f *= 1.0; e *= 0.8; m *= 1.0; s *= 0.9; c *= 1.0; t *= 0.8; }
  }
});

q9.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.0; e *= 1.0; m *= 1.2; s *= 0.9; c *= 1.0; t *= 1.2; }
    if (input.value == 2) { f *= 1.0; e *= 1.0; m *= 1.1; s *= 0.9; c *= 1.0; t *= 1.1; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 0.9; e *= 1.0; m *= 1.0; s *= 0.9; c *= 0.9; t *= 1.0; }
    if (input.value == 5) { f *= 0.8; e *= 1.0; m *= 1.0; s *= 0.9; c *= 0.8; t *= 1.0; }
  }
});

q10.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.2; t *= 1.2; }
    if (input.value == 2) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.1; t *= 1.1; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.0; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 1.0; e *= 0.9; m *= 0.9; s *= 0.9; c *= 1.0; t *= 1.0; }
    if (input.value == 5) { f *= 1.0; e *= 0.8; m *= 0.8; s *= 0.9; c *= 1.0; t *= 1.0; }
  }
});

  const nomes = {
    F: "Fortificador",
    T: "Transmutador",
    C: "Conjurador",
    S: "Especialista",
    M: "Manipulador",
    E: "Emissor"
  };

  function desempatarPorHexagono(f, e, m, c, s, t) {
    const valores = { F: f, T: t, C: c, S: s, M: m, E: e };
    const maxVal = Math.max(f, e, m, c, s, t);
    const empatados = [];
    for (let tipo in valores) {
      if (valores[tipo] === maxVal) {
        empatados.push(tipo);
      }
    }
    if (empatados.length === 1) {
      return nomes[empatados[0]];
    }
    if (maxVal === 0 && empatados.length === 6) {
      return "Especialista";
    }
    let melhorTipo = empatados[0];
    let melhorSoma = -Infinity;
    for (let tipo of empatados) {
      const afinidade = afinidades[tipo];
      let soma = 0;
      for (let outroTipo in valores) {
        soma += valores[outroTipo] * afinidade[outroTipo];
      }
      if (soma > melhorSoma) {
        melhorSoma = soma;
        melhorTipo = tipo;
      } else if (soma === melhorSoma) {
        const prioridade = { S: 0, T: 1, C: 2, M: 3, E: 4, F: 5 };
        if (prioridade[tipo] < prioridade[melhorTipo]) {
          melhorTipo = tipo;
        }
      }
    }
    return nomes[melhorTipo];
  }

  const resultado = desempatarPorHexagono(f, e, m, c, s, t);
  console.log("Valores finais:");
  console.log(`Fortificador (F): ${f.toFixed(4)}`);
  console.log(`Emissor (E): ${e.toFixed(4)}`);
  console.log(`Manipulador (M): ${m.toFixed(4)}`);
  console.log(`Conjurador (C): ${c.toFixed(4)}`);
  console.log(`Transmutador (T): ${t.toFixed(4)}`);
  console.log(`Especialista (S): ${s.toFixed(4)}`);
  f = 1, t = 1, e = 1, c = 1, m = 1, s = 1;

  let texto = document.getElementById("Resultado");
  texto.textContent = "Seu tipo é: " + resultado;

}