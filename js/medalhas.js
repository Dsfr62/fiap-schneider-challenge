const medals = JSON.parse(localStorage.getItem('medals'))

Object.keys(medals).forEach(k => {
  const medalContainer = document.getElementById(k)
  medalContainer.className = `medal-container ${!medals[k].completed && 'uncompleted'}`
  const completedAt = medalContainer.querySelector('span')
  completedAt.innerHTML = medals[k].completed 
    ? `Completado em ${medals[k].completedAt}` 
    : 'Ainda não completou'
})