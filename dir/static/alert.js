function createAlert(message){
    let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    let alert = document.createElement('div');
    alert.innerHTML = `<div class="alert alert-danger alert dismissible" role="alert">
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" arial-label="close"></button>
    </div>`;
    alertPlaceholder.append(alert)
}