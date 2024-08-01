window.addEventListener("scroll", function() {
    let nav = this.document.querySelector('#nav');

    nav.classList.toggle('scroll', window.scrollY > 0)
    //adicionando dinamicamente uma classe ao header
    //toggle = se a classe ja existir, remove, Se não existir, adiciona.
    // Essa linha (4) de código diz que, a partir do momento que o scroll na vertical for maior que 0, a classe 'scroll' é adicionada.
})