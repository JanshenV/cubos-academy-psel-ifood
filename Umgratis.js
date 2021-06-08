function solucao(precos) {
    //seu codigo aqui
    var soma = 0;
    if (precos.length >= 5) {
        for (let item in precos) {
            soma = soma + precos[item];
        };

        let menor = precos[0];
        for (let item in precos) {
            if (precos[item] < menor) {
                menor = precos[item];
            };
        };
        precototal = soma - menor;
        console.log(precototal);

    } else if (precos.length > 0 && precos.length < 5) {
        for (let item in precos) {
            soma = soma + precos[item];
        };
        precototal = soma
        console.log(precototal)

    } else {
        console.log(0)
    }

}