const unprotectedRoutes = ['index.html', 'login.html', '']

const route = window.location.pathname.split(`/`)[2]

const validateUser = () => {
  if (unprotectedRoutes.includes(route)) return

  const auth = localStorage.getItem('auth')
  if (!auth) {
    window.location.pathname = '/html/errors/401.html'
  }
}

const validateLoggedUser = () => {
  if(route === 'login.html' && localStorage.getItem('auth')) window.location.pathname = '/html/dashboard.html' 
}

validateUser()
validateLoggedUser()