const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#mnome')
const sTelefone = document.querySelector('#telefone')
const sEmail = document.querySelector('#memail')
const sSenha = document.querySelector('#msenha')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    if (edit) {
        sNome.value = itens[index].nome
        sTelefone.value = itens[index].telefone
        sEmail.value = itens[index].email
        sSenha.value = itens[index].senha
        id = index
    } else {
        sNome.value = ''
        sTelefone.value = ''
        sEmail.value = ''
        sSenha.value = ''
    }

}

function editItem(index) {

    openModal(true, index)
}



function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.telefone}</td>
    <td>${item.email}</td>
    <td>${item.senha}</td>


  `
    tbody.appendChild(tr)
}

btnSalvar.onclick = e => {

    if (sNome.value == '' || sTelefone.value == '' || sEmail.value == '' || sSenha.value == '') {
        return
    }

    e.preventDefault();

    if (id !== undefined) {
        itens[id].nome = sNome.value
        itens[id].telefone = sTelefone.value
        itens[id].email = sEmail.value
        itens[id].senha = sSenha.value
    } else {
        itens.push({ 'nome': sNome.value, 'telefone': sTelefone.value, 'email': sEmail.value, 'senha': sSenha.value })
    }

    setItensBD()

    modal.classList.remove('active')
    loadItens()
    id = undefined
}


setInterval(() => {
    function loadItens()
}, interval); {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()