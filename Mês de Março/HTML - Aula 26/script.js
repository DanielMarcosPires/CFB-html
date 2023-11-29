const bt = document.querySelector('#btn-abrir')

bt.addEventListener('click',()=>{
    let d1 = document.querySelector('#d1')
    d1.setAttribute('open','')
})

const btf = document.querySelector('#btn-fechar');

btf.addEventListener('click',()=>{
    let d1 = document.querySelector('#d1')
    d1.removeAttribute('open','')
})