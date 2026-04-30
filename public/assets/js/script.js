const modal = document.getElementById('ticketModal')
const modalfrm = document.getElementById('modalForm')
const botoes = document.querySelectorAll('.select-ticket') // por eu ter usado query selector all ele me retorna um nodelist que se assemelha a um vetor


window.onload = () => {
  modal.style.display = 'none'
  modalfrm.style.display = 'none'
}

function abrirModal(){
    modal.style.display = 'flex'
    
}

function fecharModal(){
  modal.style.display = 'none'
}

function abrirFormModal(){
  modalfrm.style.display = 'flex'
}
function fecharFormModal(){
  modalfrm.style.display = 'none'
}

for(let i = 0;i < botoes.length;i++){
  const botao = botoes[i] //esse loop faz botoes passar pelo metodo addeventlister,quando o botao for cliclado ele dispara o bloco
  botao.addEventListener('click',()=>{
    fecharModal()
    abrirFormModal()
  })
  }


const frm = document.getElementById('pedido')

frm.addEventListener('submit',(event) =>{
  event.preventDefault()
  
    const formDados = new FormData(frm)
    const nome = formDados.get('inNome')
    const email = formDados.get('inEmail')
    const telefone = formDados.get('inTelefone')
    const cpf = formDados.get('inCpf')
    const quantidade = formDados.get('inQuantidade')

    console.log(nome,email,telefone,cpf,quantidade)

})

let tipoSelecionado = null

botao.addEventListener('click',(event) => {
  const ticket = event.target.closest('.ticket')
  tipoSelecionado = ticket.dataset.type

  fecharModal()
  abrirFormModal()
})