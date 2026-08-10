const radios = document.querySelectorAll('input[type="radio"]');
const btn = document.querySelector('#e');

function verificar() {
    const grupos = new Set();

    radios.forEach(radio => {
        grupos.add(radio.name);
    });

    const todosMarcados = [...grupos].every(name => {
        return document.querySelector(`input[name="${name}"]:checked`);
    });

    btn.disabled = !todosMarcados;
}

radios.forEach(radio => {
    radio.addEventListener('change', verificar);
});

verificar();