const modal = document.getElementById('ticketModal')
const modalfrm = document.getElementById('modalForm')
const botoes = document.querySelectorAll('.select-ticket') // por eu ter usado query selector all ele me retorna um nodelist que se assemelha a um vetor

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
