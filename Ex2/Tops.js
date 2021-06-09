function solucao(produtos) {
    //seu codigo aqui
    let soma = 0;
    let totalTop = 0;
    for (let item of produtos) {
        soma = soma + item.preco;
        const top = item.preco
        if (top >= 10000) {
            totalTop = totalTop + top;
        };
    };

    const percent = totalTop / soma
    console.log({
        totalTop: totalTop,
        percentual: percent
    })
}