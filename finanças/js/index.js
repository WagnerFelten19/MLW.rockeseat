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

const transacao = [{
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
    innerHTMLTransaction(){
        const html = `
        <tr>  
        <td class="descricao">internet</td>
        <td class="entrada">R$ 110,00</td>
        <td class="data">13/10/2021</td>
        <td>
            <img src="/finanças/imagens/minus.svg" alt="Remover Transação">
        </td>
    </tr>
        `
    }
}

