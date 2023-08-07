function getCarbonEmission(data) {
    const emission_values = {
        gasoline: 2.31,
        ethanol: 1.73,
        s10: 2.65,
        s10_plus: 2.68,
        green_plus: 2
    }
    const fuel = emission_values[data.fuel_type] || 0
    const currentCarbonEmission = (data.liters * fuel) * data.period
    const usingGreenPlus = (data.liters * emission_values.green_plus) * data.period
    const reduction = currentCarbonEmission - usingGreenPlus
    const response = {
        currentCarbonEmission,
        usingGreenPlus,
        reduction
    }
    return response
}

function getFormData() {
    const liters = document.getElementById("liters").value
    const period = document.getElementById("period").value
    const fuel_type = document.getElementById("fuel_type").value
    return {liters, period, fuel_type}
}

document.addEventListener("submit", (event) => {
    event.preventDefault()
    const data = getFormData()
    const result = getCarbonEmission(data)
    alert(`
        Você está emitindo ${result.currentCarbonEmission}kg de CO2 no período de ${data.period} meses.
        Utilizando o díesel green plus, sua emissão de carbono irá para ${result.usingGreenPlus}kg de CO2.
        Uma redução de ${result.reduction}kg de CO2.
    `)
})

