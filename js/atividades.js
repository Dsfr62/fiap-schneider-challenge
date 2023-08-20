
async function handleCreateRow(data) {
    let result = document.createElement("div")
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
