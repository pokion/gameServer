let activeView = "account";

function toggleView(idName){
    document.querySelector('#' + activeView).classList.toggle('d-none');
    document.querySelector('#' + idName).classList.toggle('d-none');
    activeView = idName;
    loadData(activeView)
}
//  search
function getDataFromInputsSearch(table){
    if(table == 'account'){
        return {
            email: (document.querySelector('#accountEmailSearch').value.length < 1) ? null : document.querySelector('#accountEmailSearch').value,
            name: (document.querySelector('#accountNameSearch').value.length < 1) ? null : document.querySelector('#accountNameSearch').value,
            isValid: document.querySelector('#accountIsValidSearch').checked
        }
    }
    if(table == 'avatar'){
        return {
            accountID: (document.querySelector('#avatarAccountIDSearch').value.length < 1) ? 0 : document.querySelector('#avatarAccountIDSearch').value,
            name: (document.querySelector('#avatarNameSearch').value.length < 1) ? null : document.querySelector('#avatarNameSearch').value,
            avatarClass: (document.querySelector('#avatarClassSearch').value.length < 1) ? null : document.querySelector('#avatarClassSearch').value
        }
    }
    if(table == 'item'){
        return {
           name: (document.querySelector('#itemNameSearch').value.length < 1) ? null : document.querySelector('#itemNameSearch').value,
           itemClass: (document.querySelector('#itemClassSearch').value.length < 1) ? null : document.querySelector('#itemClassSearch').value
        }
    }
    if(table == 'enemy'){
        return {
            name: (document.querySelector('#enemyNameSearch').value.length < 1) ? null : document.querySelector('#enemyNameSearch').value
        }
    }
}

async function loadData(table){
    const url = `/api/${table}/search`;
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getDataFromInputsSearch(table))
        })
        populateTable(table, (await response.json()).data)
    }catch(err){
        console.log(err)
    }
}

function populateTable(table, data){
    let tableBody = document.querySelector('#' + table + 'Body');
    let htmlToInject = ''
    if(table == 'account'){
       for(let row of data){
            htmlToInject +=`<tr>
                <th>${row.ID}</th>
                <td>${row.name}</td>
                <td>${row.email}</td>
                <td><input class="form-check-input" type="checkbox" ${(row.isValid) ? 'checked' : ''} disabled></td>
            </tr>`
       }
    }
    if(table == 'avatar'){
        for(let row of data){
            htmlToInject +=`
            <tr>
                <td>${row.ID}</td>
                <td>${row.name}</td>
                <td>${row.accountID}</td>
                <td>${row.class}</td>
                <td>${row.hitPoints}</td>
                <td>${row.intelligence}</td>
                <td>${row.dexterity}</td>
                <td>${row.strength}</td>
                <td>${row.luck}</td>
            </tr>`
        }
    }
    if(table == 'item'){
        for(let row of data){
            htmlToInject +=`
                <tr>
                    <td>${row.ID}</td>
                    <td>${row.name}</td>
                    <td>${row.defense}</td>
                    <td>${row.hitPoints}</td>
                    <td>${row.attack}</td>
                    <td>${row.level}</td>
                    <td>${row.class}</td>
                </tr>
            `
        }
    }
    if(table == 'enemy'){
        for(let row of data){
            htmlToInject +=`
                <tr>
                    <td>${row.ID}</td>
                    <td>${row.name}</td>
                    <td>${row.hitPoints}</td>
                    <td>${row.intelligence}</td>
                    <td>${row.dexterity}</td>
                    <td>${row.strength}</td>
                    <td>${row.level}</td>
                    <td>${row.experience}</td>
                    <td>${row.defense}</td>
                </tr>
            `
        }
    }
    tableBody.innerHTML = htmlToInject;
}
// end search

// add data
async function addData(table){
    const url = `/api/${table}/`;
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getDataFromInputsCreate(table))
        })
        console.log(await response.json())
    }catch(err){
        console.log(err);
    }
}

function getDataFromInputsCreate(table){
    if(table == 'account'){
        return {
            name: document.querySelector('#accountName').value,
            password: document.querySelector('#accountPassword').value,
            email: document.querySelector('#accountEmail').value,
        }
    }
    if(table == 'avatar'){
        return {
            accountID: Number(document.querySelector('#avatarAccountID').value),
            name: document.querySelector('#avatarName').value,
            avatarClass: document.querySelector('#avatarClass').value,
            hitPoints: Number(document.querySelector('#avatarHitPoints').value),
            intelligence: Number(document.querySelector('#avatarIntelligence').value),
            dexterity: Number(document.querySelector('#avatarDexterity').value),
            strength: Number(document.querySelector('#avatarStrenght').value),
            luck: Number(document.querySelector('#avatarLuck').value),
        }
    }
    if(table == 'item'){
        return {
            name: document.querySelector('#itemName').value,
            hitPoints: Number(document.querySelector('#itemHitPoints').value),
            defense: Number(document.querySelector('#itemDefense').value),
            attack: Number(document.querySelector('#itemAttack').value),
            level: Number(document.querySelector('#itemLevel').value),
            itemClass: document.querySelector('#itemClass').value,
        }
    }
    if(table == 'enemy'){
        return {
            name: document.querySelector('#enemyName').value,
            hitPoints: Number(document.querySelector('#enemyHitPoints').value),
            intelligence: Number(document.querySelector('#enemyIntelligence').value),
            dexterity: Number(document.querySelector('#enemyDexterity').value),
            strength: Number(document.querySelector('#enemyStrength').value),
            level: Number(document.querySelector('#enemyLevel').value),
            experience: Number(document.querySelector('#enemyExperience').value),
            defense: Number(document.querySelector('#enemyDefense').value),
        }
    }
}

// end add data

loadData(activeView)