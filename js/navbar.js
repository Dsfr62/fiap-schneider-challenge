const navbar = document.createElement('nav')
navbar.innerHTML = /* HTML */ `
<div class="logo-container">
    <img src="../img/Logo-Alternative.svg" alt="logo" class="logo" width="170" height="130">
</div>
<div>
  <ul>
      <li>
        <a href="./dashboard.html" class="nav-item" id="dashboard-item">
          <i class="fa-solid fa-chart-column"></i>
          <span> Dashboard </span>
        </a>
      </li>
      <li>
        <a href="./historico.html" class="nav-item" id="historico-item">
          <i class="fa-solid fa-clock-rotate-left"></i>
            <span> Histórico </span>
        </a>
      </li>
      <li>
        <a href="./atividades.html" class="nav-item" id="atividades-item">
            <i class="fa-solid fa-leaf"></i>
            <span> Atividades </span>
        </a>
      </li>
      <li>
        <a href="./medalhas.html" class="nav-item" id="medalhas-item">
        <i class="fa-solid fa-award"></i>
          <span>Medalhas</span>
        </a>
      </li>
      <li>
        <a href="./conscientizacao.html" class="nav-item" id="conscientizacao-item">
          <i class="fa-solid fa-lightbulb"></i>
          <span>Conscientização</span>
        </a>
      </li>
      <li>
        <a href="./configuracoes.html" class="nav-item" id="configuracoes-item">
          <i class="fa-solid fa-gear"></i>
          <span>Configurações</span>
        </a>
      </li>
      <li>
        <a href="./suporte.html" class="nav-item" id="suporte-item">
          <i class="fa-solid fa-circle-question"></i>
          <span>Suporte</span>
        </a>
      </li>
  </ul>
</div>
<div class="nav-logout">
  <a href="./index.html">
    <i class="fa-solid fa-arrow-right-from-bracket"></i>
    <span>Logout</span>
  </a>
</div>
`

document.body.insertAdjacentElement('afterbegin', navbar)

const pageName = document.body.dataset.page
const current = document.getElementById(`${pageName}-item`)
current.classList.add('current')

const logout = document.querySelector('.nav-logout')
logout.addEventListener('click', () => {
  localStorage.removeItem('auth')
})