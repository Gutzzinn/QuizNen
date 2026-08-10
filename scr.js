let f =0,t =0,e =0,c=0,m=0,s=0;
function nen(){
q1 = document.querySelectorAll('input[name="q1"]')
q2 = document.querySelectorAll('input[name="q2"]')
q3 = document.querySelectorAll('input[name="q3"]')
q4 = document.querySelectorAll('input[name="q4"]')
q5 = document.querySelectorAll('input[name="q5"]')
q6 = document.querySelectorAll('input[name="q6"]')
q7 = document.querySelectorAll('input[name="q7"]')
q8 = document.querySelectorAll('input[name="q8"]')
q9 = document.querySelectorAll('input[name="q9"]')
q10 = document.querySelectorAll('input[name="q10"]')
q11 = document.querySelectorAll('input[name="q11"]')
q12 = document.querySelectorAll('input[name="q12"]')
q13 = document.querySelectorAll('input[name="q13"]')
q14 = document.querySelectorAll('input[name="q14"]')
q15 = document.querySelectorAll('input[name="q15"]')
q16 = document.querySelectorAll('input[name="q16"]')
q17 = document.querySelectorAll('input[name="q17"]')
q18 = document.querySelectorAll('input[name="q18"]')
q19 = document.querySelectorAll('input[name="q19"]')
q20 = document.querySelectorAll('input[name="q20"]')
q1.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=2;
    m-=2;
    s-=1;
    c+=1;
    t-=2;
}
if(input.value==2){
    f+=2;
    e+=2;
    m-=1;
    s;
    c+=1;
    t-=1;
}
if(input.value==3){
    f+=1;
    e+=1;
    m;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f;
    e+=1;
    m+=2;
    s+=2;
    c+=1;
    t+=2;
}
if(input.value==5){
    f-=2;
    e+=1;
    m+=3;
    s+=3;
    c+=1;
    t+=3;
}
}
});
q2.forEach((input) => {
if(input.checked){
        if(input.value==1){
            f+=3;
            e+=2;
            m-=2;
            s-=1;
            c+=1;
            t-=2;
        }
        if(input.value==2){
            f+=2;
            e+=2;
            m-=1;
            s;
            c+=1;
            t-=1;
        }
        if(input.value==3){
            f+=1;
            e+=1;
            m;
            s+=1;
            c+=1;
            t;
        }
        if(input.value==4){
            f;
            e+=1;
            m+=2;
            s+=2;
            c+=1;
            t+=2;
        }
        if(input.value==5){
            f-=2;
            e+=1;
            m+=3;
            s+=3;
            c+=1;
            t+=3;
        }
}
});
q3.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=1;
    m+=2;
    s;
    c+=1;
    t-=1;
}
if(input.value==2){
    f+=2;
    e+=1;
    m+=1;
    s;
    c+=1;
    t;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t+=1;
}
if(input.value==4){
    f+=1;
    e+=2;
    m+=1;
    s+=1;
    c;
    t+=2;
}
if(input.value==5){
    f;
    e+=3;
    m;
    s+=3;
    c-=1;
    t+=3;
}
}
});
q4.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=1;
    m+=2;
    s;
    c+=1;
    t-=1;
}
if(input.value==2){
    f+=2;
    e+=1;
    m+=1;
    s;
    c+=1;
    t;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t+=1;
}
if(input.value==4){
    f+=1;
    e+=2;
    m+=1;
    s+=1;
    c;
    t+=2;
}
if(input.value==5){
    f;
    e+=3;
    m;
    s+=3;
    c-=1;
    t+=3;
}
}
});
q5.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=2;
    m-=1;
    s-=1;
    c-=2;
    t+=2;
}
if(input.value==2){
    f+=2;
    e+=2;
    m;
    s;
    c-=1;
    t+=1;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f;
    e+=1;
    m+=2;
    s+=1;
    c+=2;
    t;
}
if(input.value==5){
    f-=1;
    e;
    m+=3;
    s+=3;
    c+=3;
    t-=2;
}
}
});
q6.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=2;
    m-=1;
    s-=1;
    c-=2;
    t+=2;
}
if(input.value==2){
    f+=2;
    e+=2;
    m;
    s;
    c-=1;
    t+=1;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f;
    e+=1;
    m+=2;
    s+=1;
    c+=2;
    t;
}
if(input.value==5){
    f-=1;
    e;
    m+=3;
    s+=3;
    c+=3;
    t-=2;
}
}
});
q7.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=2;
    m-=1;
    s-=1;
    c-=1;
    t+=1;
}
if(input.value==2){
    f+=2;
    e+=1;
    m;
    s;
    c;
    t+=1;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=2;
    t+=1;
}
if(input.value==4){
    f;
    e+=1;
    m+=1;
    s+=2;
    c+=2;
    t+=1;
}
if(input.value==5){
    f-=1;
    e;
    m+=2;
    s+=3;
    c+=3;
    t+=3;
}
}
});
q8.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=2;
    m-=1;
    s-=1;
    c-=1;
    t+=1;
}
if(input.value==2){
    f+=2;
    e+=1;
    m;
    s;
    c;
    t+=1;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=2;
    t+=1;
}
if(input.value==4){
    f;
    e+=1;
    m+=1;
    s+=2;
    c+=2;
    t+=1;
}
if(input.value==5){
    f-=1;
    e;
    m+=2;
    s+=3;
    c+=3;
    t+=3;
}
}
});
q9.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=1;
    e;
    m+=3;
    s+=1;
    c+=2;
    t-=1;
}
if(input.value==2){
    f+=1;
    e;
    m+=2;
    s+=1;
    c+=1;
    t;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=2;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f+=1;
    e+=2;
    m;
    s+=2;
    c+=1;
    t+=2;
}
if(input.value==5){
    f+=2;
    e+=3;
    m-=2;
    s+=3;
    c-=1;
    t+=3;
}
}
});
q10.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=1;
    e;
    m+=3;
    s+=1;
    c+=2;
    t-=1;
}
if(input.value==2){
    f+=1;
    e;
    m+=2;
    s+=1;
    c+=1;
    t;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=2;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f+=1;
    e+=2;
    m;
    s+=2;
    c+=1;
    t+=2;
}
if(input.value==5){
    f+=2;
    e+=3;
    m-=2;
    s+=3;
    c-=1;
    t+=3;
}
}
});
q11.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=2;
    e+=1;
    m+=1;
    s-=1;
    c+=1;
    t-=2;
}
if(input.value==2){
    f+=2;
    e+=1;
    m+=1;
    s;
    c+=1;
    t-=1;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=2;
    t+=1;
}
if(input.value==4){
    f;
    e+=1;
    m+=1;
    s+=2;
    c+=2;
    t+=3;
}
if(input.value==5){
    f-=2;
    e+=2;
    m;
    s+=3;
    c+=3;
    t+=3;
}
}
});
q12.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=2;
    e+=1;
    m+=1;
    s-=1;
    c+=1;
    t-=2;
}
if(input.value==2){
    f+=2;
    e+=1;
    m+=1;
    s;
    c+=1;
    t-=1;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=2;
    t+=1;
}
if(input.value==4){
    f;
    e+=1;
    m+=1;
    s+=2;
    c+=2;
    t+=3;
}
if(input.value==5){
    f-=2;
    e+=2;
    m;
    s+=3;
    c+=3;
    t+=3;
}
}
});
q13.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=1;
    m+=2;
    s+=1;
    c+=2;
    t-=1;
}
if(input.value==2){
    f+=2;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f;
    e+=2;
    m+=1;
    s+=2;
    c+=1;
    t+=2;
}
if(input.value==5){
    f+=1;
    e+=3;
    m;
    s+=3;
    c-=1;
    t+=3;
}
}
});
q14.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=1;
    m+=2;
    s+=1;
    c+=2;
    t-=1;
}
if(input.value==2){
    f+=2;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f;
    e+=2;
    m+=1;
    s+=2;
    c+=1;
    t+=2;
}
if(input.value==5){
    f+=1;
    e+=3;
    m;
    s+=3;
    c-=1;
    t+=3;
}
}
});
q15.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=2;
    e+=3;
    m+=1;
    s-=1;
    c-=1;
    t+=1;
}
if(input.value==2){
    f+=2;
    e+=2;
    m+=1;
    s;
    c;
    t+=1;
}
if(input.value==3){
    f+=1;
    e+=2;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f+=1;
    e+=1;
    m+=1;
    s+=2;
    c+=2;
    t+=1;
}
if(input.value==5){
    f;
    e-=1;
    m+=1;
    s+=3;
    c+=2;
    t+=2;
}
}
});
q16.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=2;
    e+=3;
    m+=1;
    s-=1;
    c-=1;
    t+=1;
}
if(input.value==2){
    f+=2;
    e+=2;
    m+=1;
    s;
    c;
    t+=1;
}
if(input.value==3){
    f+=1;
    e+=2;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f+=1;
    e+=1;
    m+=1;
    s+=2;
    c+=2;
    t+=1;
}
if(input.value==5){
    f;
    e-=1;
    m+=1;
    s+=3;
    c+=2;
    t+=2;
}
}
});
q17.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=2;
    e+=2;
    m+=1;
    s;
    c+=1;
    t-=1;
}
if(input.value==2){
    f+=2;
    e+=2;
    m+=1;
    s;
    c+=1;
    t;
}
if(input.value==3){
    f+=2;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t+=1;
}
if(input.value==4){
    f+=2;
    e+=1;
    m+=1;
    s+=1;
    c;
    t+=2;
}
if(input.value==5){
    f+=3;
    e+=1;
    m;
    s+=2;
    c-=1;
    t+=3;
}
}
});
q18.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=2;
    e+=2;
    m+=1;
    s;
    c+=1;
    t-=1;
}
if(input.value==2){
    f+=2;
    e+=2;
    m+=1;
    s;
    c+=1;
    t;
}
if(input.value==3){
    f+=2;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t+=1;
}
if(input.value==4){
    f+=2;
    e+=1;
    m+=1;
    s+=1;
    c;
    t+=2;
}
if(input.value==5){
    f+=3;
    e+=1;
    m;
    s+=2;
    c-=1;
    t+=3;
}
}
});
q19.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=1;
    m+=2;
    s+=1;
    c+=2;
    t-=1;
}
if(input.value==2){
    f+=2;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f+=1;
    e+=2;
    m+=1;
    s+=2;
    c+=1;
    t+=2;
}
if(input.value==5){
    f-=1;
    e+=3;
    m-=1;
    s+=3;
    c-=2;
    t+=3;
}
}
});
q20.forEach((input) => {
if(input.checked){
if(input.value==1){
    f+=3;
    e+=1;
    m+=2;
    s+=1;
    c+=2;
    t-=1;
}
if(input.value==2){
    f+=2;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==3){
    f+=1;
    e+=1;
    m+=1;
    s+=1;
    c+=1;
    t;
}
if(input.value==4){
    f+=1;
    e+=2;
    m+=1;
    s+=2;
    c+=1;
    t+=2;
}
if(input.value==5){
    f-=1;
    e+=3;
    m-=1;
    s+=3;
    c-=2;
    t+=3;
}
}
});

console.log(
    "F, E, M, S, C, T " + f+" "+e+" "+m+" "+s+" "+c+" "+t
)

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
        }

        else if (soma === melhorSoma) {

            const prioridade = { S: 0, T: 1, C: 2, M: 3, E: 4, F: 5 };
            if (prioridade[tipo] < prioridade[melhorTipo]) {
                melhorTipo = tipo;
            }
        }
    }
    
    return nomes[melhorTipo];
}


console.log("F, E, M, S, C, T = " + f + " " + e + " " + m + " " + s + " " + c + " " + t);
const resultado = desempatarPorHexagono(f, e, m, c, s, t);

const copo = document.querySelector("#copo");
const texto = document.querySelector("#resultado");

copo.classList.remove(
    "fortificador",
    "emissor",
    "manipulador",
    "especialista",
    "conjurador",
    "transmutador"
);

copo.classList.add(resultado.toLowerCase());

texto.textContent = "Seu tipo é: " + resultado;
f = 0; e = 0; m = 0; c = 0; s = 0; t = 0;

}