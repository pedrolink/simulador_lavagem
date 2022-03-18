function simula_valores() {
    // VALOR TEMPO SIMULADO
    var tempo_simulado = document.getElementById('tempo_simulado').value;

    // VALORES DE CHEGADA
    var valorA_chegada = document.getElementById('valorA_chegada').value;
    var valorB_chegada = document.getElementById('valorB_chegada').value;
    var valorC_chegada = document.getElementById('valorC_chegada').value;

    // VALORES DE SERVIÇO
    var valorA_servico = document.getElementById('valorA_servico').value;
    var valorB_servico = document.getElementById('valorB_servico').value;
    var valorC_servico = document.getElementById('valorC_servico').value;

    if (tempo_simulado == false || valorA_chegada == false || valorB_chegada == false ||
        valorC_chegada == false || valorA_servico == false || valorB_servico == false ||
        valorC_servico == false) {
        alert('Favor preencha todos os campos para o cálculo.')
    } else {
        var disableA_chegada
        var disableB_chegada
        var disableC_chegada

        var disableA_servico
        var disableB_servico
        var disableC_servico

        // CÁLCULOS CHEGADAS E SERVIÇOS
        disableA_chegada = (tempo_simulado / valorA_chegada);
        disableB_chegada = (tempo_simulado / valorB_chegada);
        disableC_chegada = (tempo_simulado / valorC_chegada);

        disableA_servico = (tempo_simulado / valorA_servico);
        disableB_servico = (tempo_simulado / valorB_servico);
        disableC_servico = (tempo_simulado / valorC_servico);

        document.getElementById('disableA_chegada').value = disableA_chegada.toFixed(2);
        document.getElementById('disableB_chegada').value = disableB_chegada.toFixed(2);
        document.getElementById('disableC_chegada').value = disableC_chegada.toFixed(2);

        document.getElementById('disableA_servico').value = disableA_servico.toFixed(2);
        document.getElementById('disableB_servico').value = disableB_servico.toFixed(2);
        document.getElementById('disableC_servico').value = disableC_servico.toFixed(2);

        // CÁLCULO NÚMERO MÉDIO
        var numero_medio_A
        var numero_medio_B
        var numero_medio_C

        numero_medio_A = (disableA_chegada / (disableA_servico - disableA_chegada));
        numero_medio_B = (disableB_chegada / (disableB_servico - disableB_chegada));
        numero_medio_C = (disableC_chegada / (disableC_servico - disableC_chegada));

        document.getElementById('numero_medio_A').value = numero_medio_A.toFixed(2);
        document.getElementById('numero_medio_B').value = numero_medio_B.toFixed(2);
        document.getElementById('numero_medio_C').value = numero_medio_C.toFixed(2);

        // CÁLCULO TEMPO MÉDIO
        var tempo_medio_A
        var tempo_medio_B
        var tempo_medio_C

        tempo_medio_A = (1 / (disableA_servico - disableA_chegada));
        tempo_medio_B = (1 / (disableB_servico - disableB_chegada));
        tempo_medio_C = (1 / (disableC_servico - disableC_chegada));

        document.getElementById('tempo_medio_A').value = tempo_medio_A.toFixed(2);
        document.getElementById('tempo_medio_B').value = tempo_medio_B.toFixed(2);
        document.getElementById('tempo_medio_C').value = tempo_medio_C.toFixed(2);

        // CÁLCULO TAXA MÉDIA
        var taxa_media_A
        var taxa_media_B
        var taxa_media_C

        taxa_media_A = (disableA_chegada / disableA_servico);
        taxa_media_B = (disableB_chegada / disableB_servico);
        taxa_media_C = (disableC_chegada / disableC_servico);

        document.getElementById('taxa_media_A').value = taxa_media_A.toFixed(2);
        document.getElementById('taxa_media_B').value = taxa_media_B.toFixed(2);
        document.getElementById('taxa_media_C').value = taxa_media_C.toFixed(2);

    }
}

function monta_tabela() {
    // VALORES DE CHEGADA
    var disableA_chegada_tabela = document.getElementById('disableA_chegada').value;
    var disableB_chegada_tabela = document.getElementById('disableB_chegada').value;
    var disableC_chegada_tabela = document.getElementById('disableC_chegada').value;

    // VALORES DE SERVIÇO
    var disableA_servico_tabela = document.getElementById('disableA_servico').value;
    var disableB_servico_tabela = document.getElementById('disableB_servico').value;
    var disableC_servico_tabela = document.getElementById('disableC_servico').value;

    if (disableA_chegada_tabela == false || disableB_chegada_tabela == false || disableC_chegada_tabela == false ||
        disableA_servico_tabela == false || disableB_servico_tabela == false || disableC_servico_tabela == false) {
        alert('Não foi possível montar a tabela, favor preencha os campos acima!')
        document.getElementById('probabilidade_clientes').value = '';
    } else {
        // PROBABILIDADE TABELA
        var probabilidade_clientes = document.getElementById('probabilidade_clientes').value;
        var tabela_calculos = document.getElementById('body_tabela_calculos');

        // LIMPA TABELA DE CÁLCULOS
        tabela_calculos.innerHTML = '';

        if (probabilidade_clientes != '') {
            probabilidade_clientes = parseInt(probabilidade_clientes);

            for (let i = 0; i < probabilidade_clientes; i++) {
                // CÁLCULOS TABELA
                calculo_tabela_A = ((1 - (disableA_chegada_tabela / disableA_servico_tabela)) * Math.pow((disableA_chegada_tabela / disableA_servico_tabela), i)).toFixed(2);
                calculo_tabela_B = ((1 - (disableB_chegada_tabela / disableB_servico_tabela)) * Math.pow((disableB_chegada_tabela / disableB_servico_tabela), i)).toFixed(2);
                calculo_tabela_C = ((1 - (disableC_chegada_tabela / disableC_servico_tabela)) * Math.pow((disableC_chegada_tabela / disableC_servico_tabela), i)).toFixed(2);
                
                // ADICIONA HTML TABELA
                tabela_calculos.innerHTML += '<tr><th scope="row">' + i + '</th><td>PX(' + i + ')</td><td>' + calculo_tabela_A + '</td><td>' + calculo_tabela_B + '</td><td>' + calculo_tabela_C +'</td></tr>';
            }
        }
    }
}

function limpa_valores() {
    // VALOR TEMPO SIMULADO
    document.getElementById('tempo_simulado').value = '';

    // VALORES DE CHEGADA
    document.getElementById('valorA_chegada').value = '';
    document.getElementById('valorB_chegada').value = '';
    document.getElementById('valorC_chegada').value = '';
    document.getElementById('disableA_chegada').value = '';
    document.getElementById('disableB_chegada').value = '';
    document.getElementById('disableC_chegada').value = '';

    // VALORES DE SERVIÇO
    document.getElementById('valorA_servico').value = '';
    document.getElementById('valorB_servico').value = '';
    document.getElementById('valorC_servico').value = '';
    document.getElementById('disableA_servico').value = '';
    document.getElementById('disableB_servico').value = '';
    document.getElementById('disableC_servico').value = '';

    // NÚMERO MÉDIO
    document.getElementById('numero_medio_A').value = '';
    document.getElementById('numero_medio_B').value = '';
    document.getElementById('numero_medio_C').value = '';

    // TEMPO MÉDIO
    document.getElementById('tempo_medio_A').value = '';
    document.getElementById('tempo_medio_B').value = '';
    document.getElementById('tempo_medio_C').value = '';

    // TAXA MÉDIA
    document.getElementById('taxa_media_A').value = '';
    document.getElementById('taxa_media_B').value = '';
    document.getElementById('taxa_media_C').value = '';

    // PROBABILIDADE
    document.getElementById('probabilidade_clientes').value = '';
    document.getElementById('body_tabela_calculos').innerHTML = '';
}
