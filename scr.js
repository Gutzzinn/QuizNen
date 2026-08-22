
Scr · JS
let f = 1, t = 1, e = 1, c = 1, m = 1, s = 1;
 
// Afinidades entre os tipos no hexágono do Nen (usadas no desempate).
// Estava faltando essa definição — sem ela, qualquer empate quebrava o site.
const afinidades = {
  F: { F: 1.00, T: 0.80, C: 0.60, S: 0.00, M: 0.40, E: 0.80 },
  T: { F: 0.80, T: 1.00, C: 0.80, S: 0.60, M: 0.00, E: 0.40 },
  C: { F: 0.60, T: 0.80, C: 1.00, S: 0.80, M: 0.60, E: 0.00 },
  S: { F: 0.00, T: 0.60, C: 0.80, S: 1.00, M: 0.80, E: 0.60 },
  M: { F: 0.40, T: 0.00, C: 0.60, S: 0.80, M: 1.00, E: 0.80 },
  E: { F: 0.80, T: 0.40, C: 0.00, S: 0.60, M: 0.80, E: 1.00 }
};
 
// Cada tipo "gasta" em média um valor diferente de multiplicador ao longo
// das 10 perguntas (alguns perfis usam mais valores centrais, que rendem
// multiplicadores maiores com mais frequência). MEDIA_ESPERADA é quanto
// cada tipo tende a acumular em média se alguém respondesse aleatoriamente
// — usamos isso só pra dividir o resultado final e comparar todo mundo de
// forma justa (ver normalização antes do desempate, no fim da função nen).
const MEDIA_ESPERADA = {
  F: 1.560906,
  E: 1.389201,
  M: 1.528645,
  C: 1.415412,
  S: 1.363475,
  T: 1.389201
};
 
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
    if (input.value == 1) { f *= 1.2; e *= 1.2; m *= 1.0; c *= 1.0; s *= 0.9; t *= 0.8; }
    if (input.value == 2) { f *= 1.1; e *= 1.1; m *= 1.1; c *= 1.1; s *= 1.0; t *= 0.9; }
    if (input.value == 3) { f *= 1.0; e *= 1.0; m *= 1.2; c *= 1.2; s *= 1.1; t *= 1.0; }
    if (input.value == 4) { f *= 0.9; e *= 0.9; m *= 1.1; c *= 1.1; s *= 1.2; t *= 1.1; }
    if (input.value == 5) { f *= 0.8; e *= 0.8; m *= 1.0; c *= 1.0; s *= 1.1; t *= 1.2; }
  }
});
 
q2.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.2; e *= 1.0; m *= 1.2; c *= 1.0; s *= 1.1; t *= 0.8; }
    if (input.value == 2) { f *= 1.1; e *= 1.1; m *= 1.1; c *= 1.1; s *= 1.2; t *= 0.9; }
    if (input.value == 3) { f *= 1.0; e *= 1.2; m *= 1.0; c *= 1.2; s *= 1.1; t *= 1.0; }
    if (input.value == 4) { f *= 0.9; e *= 1.1; m *= 0.9; c *= 1.1; s *= 1.0; t *= 1.1; }
    if (input.value == 5) { f *= 0.8; e *= 1.0; m *= 0.8; c *= 1.0; s *= 0.9; t *= 1.2; }
  }
});
 
q3.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.1; e *= 1.2; m *= 1.0; c *= 0.8; s *= 0.8; t *= 1.0; }
    if (input.value == 2) { f *= 1.2; e *= 1.1; m *= 1.1; c *= 0.9; s *= 0.9; t *= 1.1; }
    if (input.value == 3) { f *= 1.1; e *= 1.0; m *= 1.2; c *= 1.0; s *= 1.0; t *= 1.2; }
    if (input.value == 4) { f *= 1.0; e *= 0.9; m *= 1.1; c *= 1.1; s *= 1.1; t *= 1.1; }
    if (input.value == 5) { f *= 0.9; e *= 0.8; m *= 1.0; c *= 1.2; s *= 1.2; t *= 1.0; }
  }
});
 
q4.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.2; e *= 1.1; m *= 0.9; c *= 1.1; s *= 1.2; t *= 0.8; }
    if (input.value == 2) { f *= 1.1; e *= 1.2; m *= 1.0; c *= 1.2; s *= 1.1; t *= 0.9; }
    if (input.value == 3) { f *= 1.0; e *= 1.1; m *= 1.1; c *= 1.1; s *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 0.9; e *= 1.0; m *= 1.2; c *= 1.0; s *= 0.9; t *= 1.1; }
    if (input.value == 5) { f *= 0.8; e *= 0.9; m *= 1.1; c *= 0.9; s *= 0.8; t *= 1.2; }
  }
});
 
q5.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.1; e *= 0.9; m *= 1.2; c *= 1.0; s *= 1.0; t *= 0.8; }
    if (input.value == 2) { f *= 1.2; e *= 1.0; m *= 1.1; c *= 1.1; s *= 1.1; t *= 0.9; }
    if (input.value == 3) { f *= 1.1; e *= 1.1; m *= 1.0; c *= 1.2; s *= 1.2; t *= 1.0; }
    if (input.value == 4) { f *= 1.0; e *= 1.2; m *= 0.9; c *= 1.1; s *= 1.1; t *= 1.1; }
    if (input.value == 5) { f *= 0.9; e *= 1.1; m *= 0.8; c *= 1.0; s *= 1.0; t *= 1.2; }
  }
});
 
q6.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.0; e *= 1.2; m *= 1.0; c *= 0.8; s *= 0.8; t *= 1.1; }
    if (input.value == 2) { f *= 1.1; e *= 1.1; m *= 1.1; c *= 0.9; s *= 0.9; t *= 1.2; }
    if (input.value == 3) { f *= 1.2; e *= 1.0; m *= 1.2; c *= 1.0; s *= 1.0; t *= 1.1; }
    if (input.value == 4) { f *= 1.1; e *= 0.9; m *= 1.1; c *= 1.1; s *= 1.1; t *= 1.0; }
    if (input.value == 5) { f *= 1.0; e *= 0.8; m *= 1.0; c *= 1.2; s *= 1.2; t *= 0.9; }
  }
});
 
q7.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 0.9; e *= 0.8; m *= 1.1; c *= 1.2; s *= 1.1; t *= 1.0; }
    if (input.value == 2) { f *= 1.0; e *= 0.9; m *= 1.2; c *= 1.1; s *= 1.2; t *= 1.1; }
    if (input.value == 3) { f *= 1.1; e *= 1.0; m *= 1.1; c *= 1.0; s *= 1.1; t *= 1.2; }
    if (input.value == 4) { f *= 1.2; e *= 1.1; m *= 1.0; c *= 0.9; s *= 1.0; t *= 1.1; }
    if (input.value == 5) { f *= 1.1; e *= 1.2; m *= 0.9; c *= 0.8; s *= 0.9; t *= 1.0; }
  }
});
 
q8.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.0; e *= 0.8; m *= 1.2; c *= 0.9; s *= 0.9; t *= 1.1; }
    if (input.value == 2) { f *= 1.1; e *= 0.9; m *= 1.1; c *= 1.0; s *= 1.0; t *= 1.2; }
    if (input.value == 3) { f *= 1.2; e *= 1.0; m *= 1.0; c *= 1.1; s *= 1.1; t *= 1.1; }
    if (input.value == 4) { f *= 1.1; e *= 1.1; m *= 0.9; c *= 1.2; s *= 1.2; t *= 1.0; }
    if (input.value == 5) { f *= 1.0; e *= 1.2; m *= 0.8; c *= 1.1; s *= 1.1; t *= 0.9; }
  }
});
 
q9.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 1.1; e *= 1.0; m *= 0.8; c *= 1.2; s *= 1.2; t *= 0.9; }
    if (input.value == 2) { f *= 1.2; e *= 1.1; m *= 0.9; c *= 1.1; s *= 1.1; t *= 1.0; }
    if (input.value == 3) { f *= 1.1; e *= 1.2; m *= 1.0; c *= 1.0; s *= 1.0; t *= 1.1; }
    if (input.value == 4) { f *= 1.0; e *= 1.1; m *= 1.1; c *= 0.9; s *= 0.9; t *= 1.2; }
    if (input.value == 5) { f *= 0.9; e *= 1.0; m *= 1.2; c *= 0.8; s *= 0.8; t *= 1.1; }
  }
});
 
q10.forEach((input) => {
  if (input.checked) {
    if (input.value == 1) { f *= 0.9; e *= 1.1; m *= 1.0; c *= 0.8; s *= 0.8; t *= 1.2; }
    if (input.value == 2) { f *= 1.0; e *= 1.2; m *= 1.1; c *= 0.9; s *= 0.9; t *= 1.1; }
    if (input.value == 3) { f *= 1.1; e *= 1.1; m *= 1.2; c *= 1.0; s *= 1.0; t *= 1.0; }
    if (input.value == 4) { f *= 1.2; e *= 1.0; m *= 1.1; c *= 1.1; s *= 1.1; t *= 0.9; }
    if (input.value == 5) { f *= 1.1; e *= 0.9; m *= 1.0; c *= 1.2; s *= 1.2; t *= 0.8; }
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
 
  console.log("Valores brutos:");
  console.log(`Fortificador (F): ${f.toFixed(4)}`);
  console.log(`Emissor (E): ${e.toFixed(4)}`);
  console.log(`Manipulador (M): ${m.toFixed(4)}`);
  console.log(`Conjurador (C): ${c.toFixed(4)}`);
  console.log(`Transmutador (T): ${t.toFixed(4)}`);
  console.log(`Especialista (S): ${s.toFixed(4)}`);
 
  // Normaliza cada valor pela média esperada do próprio tipo antes do
  // desempate — é isso que corrige o desequilíbrio (sem essa divisão,
  // Fortificador e Manipulador ganhavam bem mais só por acumularem
  // multiplicadores maiores em média, não por serem mais compatíveis).
  const fN = f / MEDIA_ESPERADA.F;
  const eN = e / MEDIA_ESPERADA.E;
  const mN = m / MEDIA_ESPERADA.M;
  const cN = c / MEDIA_ESPERADA.C;
  const sN = s / MEDIA_ESPERADA.S;
  const tN = t / MEDIA_ESPERADA.T;
 
  const resultado = desempatarPorHexagono(fN, eN, mN, cN, sN, tN);
  console.log("Vencedor:", resultado);
 
  f = 1, t = 1, e = 1, c = 1, m = 1, s = 1;
 
  let texto = document.getElementById("Resultado");
  texto.textContent = "Seu tipo é: " + resultado;
 
}