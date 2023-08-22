
async function handleCreateCard(data) {
    let result = document.createElement("tr")
    result.innerHTML = `
        <td class="row">${data.titulo}</td>
        <td class="row">${data.data}</td>
        <td class="row">${data.horario}</td>
        <td class="row">${data.inscritos}/${data.lotacao}</td>
        <td class="row">${data.inscrito ? 'Sim' : 'Não'}</td>
    `
    return result
}

async function handleLoadAtividadesRecomendadas() {
    const element = document.getElementById("atividades_recomendadas")
    const atividadesData = await fetch("../data/atividades.json").then(res => res.json()).catch(err => alert("Erro ao carregar dados"))
    if (atividadesData.dados && atividadesData.dados.length > 0) {
        atividadesData.dados.forEach(async (i) => {
            if (i.recomendar) {
                const result = await handleCreateCard(i)
                element.appendChild(result)
            }
        })
    } else {
        element.innerHTML = "<p>Sem atividades no momento...</p>"
    }
}

document.addEventListener("DOMContentLoaded", handleLoadAtividadesRecomendadas)


const firstChart = document.getElementById('first-chart')

new Chart(firstChart, {
    type: 'bar',
    data: {
        labels: ['Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],
        datasets: [{
            label: 'Emissão',
            data: [25, 30, 24, 54, 21, 40].map(n => n * 100),
            borderWidth: 1,
            backgroundColor: '#212121'
        }, {
            label: 'Crédito',
            data: [10, 23, 20, 30, 31, 23].map(n => n * 100),
            borderWidth: 1,
            backgroundColor: '#3DCD58'
        }, {
            label: 'Carbono',
            data: [23, 12, 42, 32, 2, 12].map(n => n * 100),
            borderWidth: 1,
            backgroundColor: '#FF6060'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

const secondChart =  document.getElementById('second-chart')

new Chart(secondChart, {
    type: 'doughnut',
    data: {
        labels: [],
          datasets: [{
            label: '',
            data: [20, 20, 20, 20, 20, 100],
            backgroundColor: [
              '#93F4A5',
              '#49F268',
              '#3DCD58',
              '#39BF52',
              '#45734D',
              'white'
            ],
            hoverOffset: 4
          }]
    },
    options: {
        events: []
    }
})

const isFirstLogin = () => {
    const urlParams = new URLSearchParams(window.location.search);
    if(!urlParams.get('new')) return 

    const medal = document.createElement('div')
    medal.classList.add('medal')
    medal.innerHTML = /* HTML */ `
        <button><i class="fa-solid fa-xmark"></i></button>
        <i class="fa-solid fa-leaf"></i>
        <div>
            <h2>Mudando o Mundo</h2>
            <p>Fez seu primeiro Login na Plataforma Renova Carbon</p>
            <a href="./medalhas.html">Ver Medalhas</a>
        </div>
        <div class="progress-bar"></div>
    `
    
    document.body.appendChild(medal)

    const closeBtn = medal.querySelector('button')
    closeBtn.addEventListener('click', () => medal.style.display = 'none')

    setTimeout(() => {
        medal.style.display = 'none'
    }, 4000)
}

isFirstLogin()