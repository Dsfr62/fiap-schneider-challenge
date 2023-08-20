
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
    if(atividadesData.dados && atividadesData.dados.length > 0) {
        atividadesData.dados.forEach(async (i) => {
            if(i.recomendar) {
                const result = await handleCreateCard(i)
                element.appendChild(result)
            }
        })
    } else {
        element.innerHTML = "<p>Sem atividades no momento...</p>"
    }
}

document.addEventListener("DOMContentLoaded", handleLoadAtividadesRecomendadas)
