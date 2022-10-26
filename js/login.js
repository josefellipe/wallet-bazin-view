const btn = document.getElementById('btn_login')
    const name = document.getElementById('user_name')
    const senha = document.getElementById('senha')

    btn.addEventListener('click', async() => {

        const url = 'https://wallet-bazin-api.herokuapp.com/login';

        let data_json = {
            login: String(name.value),
            senha: String(senha.value)
        };

        let fetchData = {
            method:'POST',
            body: JSON.stringify(data_json),
            headers: { 'Content-Type': 'application/json' }
        }

        let investidor = await fetch(url, fetchData)
        investidor = await investidor.json()

        console.log(investidor)

    })