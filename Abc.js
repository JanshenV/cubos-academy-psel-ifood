function solucao(letra, palavras) {
    //seu codigo aqui
    let PERDERAM = 0;
    for (let item in palavras) {
        splitting = Array.from(palavras[item]);
        if (splitting[0] != letra) {
            PERDERAM += 1;
        };
    };
    console.log(PERDERAM);
}