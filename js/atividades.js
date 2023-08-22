
async function handleCreateRow(data) {
    const result = document.createElement("div")
    result.className = "card"
    result.innerHTML = `
        <h2>${data.titulo}</h2>
        <p class="descricao">${data.descricao}</p>
        <p>Data: ${data.data}</p>
        <p>Horário: ${data.horario}</p>
        <p class="vagas">Vagas: ${data.inscritos}/${data.lotacao}</p>
        ${
            data.inscrito == true ? 
                `
                    <button type="button" disabled>Inscrito</button>
                ` 
            : 
                `
                    ${
                        data.inscritos == data.lotacao ?
                            "<button type='button' disabled>Lotado</button>"
                        :
                            "<button type='button'>Inscreva-se</button>"
                    }
                `
        }
    `
    const button = result.querySelector('button')
    if (!button.disabled) {
        button.addEventListener('click', () => {
            button.disabled = true
            button.innerHTML = 'Inscrito'

            const medals = JSON.parse(localStorage.getItem('medals'))
            medals.activity = {
                completed: true,
                completedAt: new Date().toLocaleString('pt-br', {
                    year: '2-digit', month: '2-digit', day: '2-digit'
                })
            }

            if(medals.activity.completed) return

            const medal = document.createElement('div')
            medal.classList.add('medal')
            medal.innerHTML = /* HTML */ `
                <button><i class="fa-solid fa-xmark"></i></button>
                <i class="fa-solid fa-star"></i>
                <div>
                    <h2>Hora do Show!</h2>
                    <p>Inscreva-se para uma atividade</p>
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

            localStorage.setItem('medals', JSON.stringify(medals))
        })
    }
    return result
}

async function handleLoadAtividades() {
    const element = document.getElementById("atividades")
    const atividadesData = await fetch("../data/atividades.json").then(res => res.json()).catch(err => alert("Erro ao carregar dados"))
    if(atividadesData.dados && atividadesData.dados.length > 0) {
        atividadesData.dados.forEach(async (i) => {
            const result = await handleCreateRow(i)
            element.appendChild(result)
        })
    } else {
        element.innerHTML = "<p>Sem atividades no momento...</p>"
    }
}

document.addEventListener("DOMContentLoaded", handleLoadAtividades)
//handleLoadAtividades()
