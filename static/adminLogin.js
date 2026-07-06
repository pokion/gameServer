async function adminLogin(){
    let credentials = {
        email: document.querySelector('#email').value,
        login: document.querySelector('#login').value,
        pin: Number(document.querySelector('#pin').value),
        password: document.querySelector('#password').value
    }

    try{
        const response = await fetch('/api/admin/login',{
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json",
            }, 
            redirect: 'manual'
        });
        console.log(response)
        if(response.status == 200){
            window.location.replace('adminpanel/panel');
            console.log(response.url)
        }

        createAlert(JSON.parse(await response.text()).message)

    }catch(err){
        console.error(err)
    }

}