const form = document.getElementById('validacao');

//adiciona ouvinte para eventos dos nossos elementos
//toda vez que houver um evento disparado pelo submit 
form.addEventListener('submit', function(e){
    //cancela a ação padrão do submit
    e.preventDefault();

    let vcampoa = document.getElementById('campoa').value;
    let vcampob = document.getElementById('campob').value;
    const mensagemValidoB   = 'Sucesso o <b>CAMPO B<b> é válido!'
    const mensagemInvalidoB = '<b>CAMPO B<b> é invalido!'
    
    if (vcampob < vcampoa) {
    
        const mensSucesso = document.querySelector('.insuccess-menssagem');
        mensSucesso.innerHTML = mensagemInvalidoB;
        mensSucesso.style.display = 'block'
    
    }else {
            const mensSucesso = document.querySelector('.success-menssagem');
            mensSucesso.innerHTML = mensagemValidoB;
            mensSucesso.style.display = 'block'
            
    }
    
})
console.log(form)