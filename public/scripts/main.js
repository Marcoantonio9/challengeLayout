let btn = document.querySelector('.icon-menu')
    btn.addEventListener('click', () => {
        document.querySelector('.nav-itens').classList.toggle('exibir-menu')
    })
    
let capturarDados = document.querySelector('#btnEnviar')
    capturarDados.addEventListener('click', (e) => {
        
        e.preventDefault()

        let capNome = document.querySelector('#campoNome').value 
        let capEmail = document.querySelector('#campoEmail').value 
        const url = "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register"
        
        let data = {
            "name": capNome,
            "email": capEmail
        }
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'marcojr918@gmail.com'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
        .then(data => console.log(data))
    })