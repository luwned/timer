function relogio() {
function getHoursFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(getHoursFromSeconds(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        seconds++;
        relogio.innerHTML = getHoursFromSeconds(seconds);
    }, 1000);
}
    

iniciar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio()
});

pausar.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    relogio.classList.remove('pausado');
    seconds = 0;
});
}

relogio();
