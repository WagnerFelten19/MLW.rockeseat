const Modal = {
    open(){
        //abrir modal
        //adicionar a class active ao modal
        
        document
            .querySelector('.modal-overlay')
            .classList.add('active')
    },
    close(){
        //fechamento de modal
        //remover a class active do modal
        //
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')

    }
}

const transacao = [
    {
        id: 1,
        descricao: 'Luz',
        entrada: -50000,
        data: '23/01;2021'
    },

    {
        id: 2,
        descricao: 'websait',
        entrada: -50000,
        data: '23/01;2021'
    },

    {
        id: 3,
        descricao: 'internet',
        entrada: -20000,
        data: '23/01;2021'
    }
]




const transacao = {
    incomes(){
        //somar entradas
    },
    entrada(){
        //somar saidas
    },
    Total(){
        //entradas - saidas
    }

}

const DOM = {
    transacaoContainer: document.querySelector('#data-table tbody'),
    
    addTransacao(transacao, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransacao(transacao)
    },

    innerHTMLTransacao(transacao){
        const html = `
        
        <td class="descricao">${transacao.descricao}</td>
        <td class="entrada">${transacao.entrada}</td>
        <td class="data">${transacao.data}</td>
        <td>
            <img src="/finanças/imagens/minus.svg" alt="Remover Transação">
        </td>
        `

        return html
    }
}

DOM.addTransacao(transacao[0])

