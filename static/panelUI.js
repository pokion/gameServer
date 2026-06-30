let activeView = "accounts";

function toggleView(idName){
    document.querySelector('#' + activeView).classList.toggle('d-none');
    document.querySelector('#' + idName).classList.toggle('d-none');
    activeView = idName;
}