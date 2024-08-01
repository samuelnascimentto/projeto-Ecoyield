function cadastrar() {
    const nome = input_name.value;
    const lastName = input_lastName.value;
    const rg = input_rg.value;
    const cpf = input_cpf.value;
    const empresa = input_company.value;
    const email = input_email.value;
    const senha = input_password.value;
    const confirmacaoSenha = input_passwordConfirm.value;

    let contemNumero = false;
    for (let numero = 0; numero <= 9; numero++) {
        if (senha.indexOf((numero)) != -1) {
            contemNumero = true;
        }
    }

    if (nome == '' || lastName == '' || rg == '' || cpf == '' || empresa == '' || email == '' || senha == '' || confirmacaoSenha == '') {
        alert("Por favor, preencha todos os campos.");
    }
    else if (cpf.length < 11 || cpf.length > 11) {
        alert("Por favor, insira um CPF valido.");
    }
    else if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        alert("Por favor, insira um e-mail válido.");
    }
    else if (senha.length < 8) {
        alert("Minimo de caracteres não alcançado")
    }
    else if (senha.indexOf("@") == -1 && senha.indexOf("#") == -1 && senha.indexOf("!") == -1 && senha.indexOf("*") == -1 && senha.indexOf("&") == -1 && senha.indexOf("%") == -1 && senha.indexOf("$") == -1 && senha.indexOf("-") == -1 && senha.indexOf("_") == -1) {
        alert("Por favor, insira um caractér especial na senha.");
    }

    else if (!contemNumero) {
        alert("A senha deve conter pelo menos um número.");
    }
    else if (confirmacaoSenha != senha) {
        alert("As senhas digitas não condizem.");
    }

    else {
        alert("Cadastro realizado com sucesso!");
    }
    
}
