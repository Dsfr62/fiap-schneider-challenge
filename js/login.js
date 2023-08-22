const currentHours = new Date().getHours()
const greetingMessage = (currentHours >= 12 && currentHours < 20) 
    ? 'Boa Tarde!' 
    : (currentHours >= 4 && currentHours < 12)
        ? 'Bom Dia!' : 'Boa Noite!'
document.querySelector('.greeting-message').innerHTML = greetingMessage

const handleFormValidation = () => {
    const cpfInput = document.querySelector(`input[name='CPF']`)
    const passwordInput = document.querySelector(`input[name='Password']`)
    const submitBtn = document.getElementById('form-login')
    
    let cpfLength = 0

    const validate = () => {
        if(cpfLength < 14 || passwordInput.value.trim().length === 0) submitBtn.disabled = true;
        else submitBtn.disabled = false
    }

    const addToString = (string, text, position) => {
        return string.substring(0, position) + text + string.substring(position, string.length)
    }

    cpfInput.addEventListener('input', e => {
        const { value } = e.target
        if(cpfLength > value.length) {
            cpfLength = value.length 
            validate()
            return 
        }

        let parsedValue = value.replace(/[^0-9]/g, '');
        if (parsedValue.length >= 3) parsedValue = addToString(parsedValue, '.', 3)
        if (parsedValue.length >= 7) parsedValue = addToString(parsedValue, '.', 7)
        if (parsedValue.length >= 11) parsedValue = addToString(parsedValue, '-', 11)
        if (parsedValue.length > 14) parsedValue = parsedValue.substring(0, 14)
        
        cpfLength = parsedValue.length 
        e.target.value = parsedValue
        validate()
    })
    
    passwordInput.addEventListener('input', validate)

    submitBtn.addEventListener('click', () => window.location.href = './dashboard.html')
}

handleFormValidation()

document.addEventListener("submit", (event) => {
    event.preventDefault()
    localStorage.setItem('auth', 'true')
    if(!localStorage.getItem('medals')) {
        localStorage.setItem('medals', JSON.stringify({
            login: {
                completed: true,
                completedAt: new Date().toLocaleString('pt-br', {
                    year: '2-digit', month: '2-digit', day: '2-digit'
                })
            },
            activity: {
                completed: false,
                completedAt: null
            },
        }))
        window.location.replace = "./dashboard.html?new=true"
    } else window.location.replace = "./dashboard.html"
})