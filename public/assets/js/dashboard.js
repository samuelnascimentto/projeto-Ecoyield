//Botao mudar de cor quando selecionado
var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
    if (usuario.classList.contains('ativo')) {
        modalUsuario()
    } else {
        dialog.close();
    }
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuLat = document.querySelector('.menuLateral')
var empurrar = document.querySelector('.empurradora')

btnExp.addEventListener('click', function () {
    menuLat.classList.toggle('expandir')
    empurrar.classList.toggle('aparecer')
})

// modal Usuario
usuario = document.getElementById('link_usuario')

function modalUsuario() {
    dialog.showModal();

    cancel.addEventListener('click', () => {
        dialog.close();
    })
}

// modal Ambientes
let amb1 = document.getElementById('amb1')
let amb2 = document.getElementById('amb2')
let amb3 = document.getElementById('amb3')
let amb4 = document.getElementById('amb4')
let amb5 = document.getElementById('amb5')

function but1() {
    amb1.showModal();
}

function but2() {
    amb2.showModal();
}

function but3() {
    amb3.showModal();
}

function but4() {
    amb4.showModal();
}

function but5() {
    amb5.showModal();
}

function fecharAMB() {
    amb1.close();
    amb2.close();
    amb3.close();
    amb4.close();
    amb5.close();
}

let nomeCS = "Sensor 1"


function cs11() {
    fecharAMB();
    const ctx = document.getElementById('csChart');
    nomeCS = "Sensor 1"
    dialogCS.showModal();
    csNome.innerHTML = `<h1>${nomeCS}</h1>`
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function cs21() {
    fecharAMB();
    const ctx21 = document.getElementById('csChart');
    dialogCS.showModal();
    nomeCS = "Sensor 2"
    csNome.innerHTML = `<h1>${nomeCS}</h1>`
    new Chart(ctx21, {
        type: 'bar',
        data: {
            labels: ['Red', 'dife', 'rente', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function cs12() {
    fecharAMB();
    const ctx = document.getElementById('csChart');
    dialogCS.showModal();
    nomeCS = "Sensor 1"
    csNome.innerHTML = `<h1>${nomeCS}</h1>`
    //AQUI VAI O CHART COM OS DADOS DO GRAFICO 2
}

function cs22() {
    fecharAMB();
    const ctx = document.getElementById('csChart');
    dialogCS.showModal();
    nomeCS = "Sensor 2"
    csNome.innerHTML = `<h1>${nomeCS}</h1>`
    //AQUI VAI O CHART COM OS DADOS DO GRAFICO 2
}

function cs13() {
    fecharAMB();
    const ctx = document.getElementById('csChart');
    dialogCS.showModal();
    nomeCS = "Sensor 1"
    csNome.innerHTML = `<h1>${nomeCS}</h1>`
    //AQUI VAI O CHART COM OS DADOS DO GRAFICO 2
}

function cs14() {
    fecharAMB();
    const ctx = document.getElementById('csChart');
    dialogCS.showModal();
    nomeCS = "Sensor 1"
    csNome.innerHTML = `<h1>${nomeCS}</h1>`
    //AQUI VAI O CHART COM OS DADOS DO GRAFICO 2
}

function cs24() {
    fecharAMB();
    const ctx = document.getElementById('csChart');
    dialogCS.showModal();
    nomeCS = "Sensor 2"
    csNome.innerHTML = `<h1>${nomeCS}</h1>`
    //AQUI VAI O CHART COM OS DADOS DO GRAFICO 2
}

function cs15() {
    fecharAMB();
    const ctx = document.getElementById('csChart');
    dialogCS.showModal();
    nomeCS = "Sensor 1"
    csNome.innerHTML = `<h1>${nomeCS}</h1>`
    //AQUI VAI O CHART COM OS DADOS DO GRAFICO 2
}