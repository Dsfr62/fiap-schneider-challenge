
async function handleCreateRow(data) {
    let result = document.createElement("tr")
    result.innerHTML = `
        <td class="row">${data.titulo}</td>
        <td class="row">${data.data}</td>
        <td class="row">${data.tipo}</td>
        <td class="row">${data.quantidade} kgCO2</td>
    `
    return result
}

async function handleLoadHistorico() {
    const element = document.getElementById("historico")
    const historicoData = await fetch("../data/historico.json").then(res => res.json()).catch(err => alert("Erro ao carregar dados"))
    if(historicoData.dados && historicoData.dados.length > 0) {
        historicoData.dados.forEach(async (i) => {
            const result = await handleCreateRow(i)
            element.appendChild(result)
        })
    } else {
        element.innerHTML = "<p>Histórico vazio...</p>"
    }
}

document.addEventListener("DOMContentLoaded", handleLoadHistorico)
