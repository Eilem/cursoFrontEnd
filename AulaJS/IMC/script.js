let dados = [];

/**
 * Verifica se recebeu todos os dados obrigatórios
 */
function validarDados( nome, altura, peso ){

    if( nome.length > 0 && altura.length > 0 && peso.length > 0){
        return true;
    }else{
        return false;
    }
}

/**
 * 
 */
function calcularIMC(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    if( validarDados( nome, altura, peso )){      
        let pessoa = {};
        pessoa.nome = nome;
        pessoa.altura = altura;
        pessoa.peso = peso;
        pessoa.imc = gerarIMC( pessoa.peso , pessoa.altura );
        pessoa.situação = mostrarSituacao(pessoa.imc);

        dados.push(pessoa);
        exibirResultados();

    }else{
        alert("Por favor preencher todos os campos");
    }
}


/*
    Resultado	        Situação
    Entre 18,5 e 24,99	Peso normal
    Entre 25 e 29,99	Peso normal
    Entre 30 e 34,99	Obesidade I
    Entre 35 e 39,99	Obesidade II (severa)
 */
function mostrarSituacao( imc ) {

    if( imc < 18.5){
        return "Magreza";

    }else if(imc >= 18.5 && imc < 25 ){

        return "Peso normal";
    
    }else if(imc >= 25 && imc < 30 ){

        return "Sobrepeso";
    
    }else if(imc >= 30 && imc < 35 ){

        return "Obesidade I";

    }else if(imc >= 35 && imc < 40 ){

        return "Obesidade II";
    
    }else{
        return "Obesidade III - Grave";

    }
}

/**
 * gerar resultado do IMC de acordo com o peso e altura recebidos
 * @param {*} peso 
 * @param {*} altura 
 */
function gerarIMC( peso , altura) {
    imc =  peso / (altura * altura);
    return imc.toFixed(2);
}

/**
 * Exibe lista de resultados na Tabela
 */
function exibirResultados() {
    let template = '';

    for (let index = 0; index < dados.length; index++) {

        template += `
            <tr>
                <th>${dados[index].nome}</th>
                <th>${dados[index].altura}</th>
                <th>${dados[index].peso}</th>
                <th>${dados[index].imc}</th>
                <th>${dados[index].situação}</th>
            </tr>
        `;
    }

    console.log("template");
    console.log(template);

    document.getElementById('resultados').innerHTML = template;
}