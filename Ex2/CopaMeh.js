function solucao(ano) {
    //seu codigo aqui
    const MOD = ano % 4;
    if (MOD == 0) {
        console.log("JOGOS")
    } else if (MOD == 1) {
        console.log("MEH")
    } else if (MOD == 2) {
        console.log("COPA")
    } else if (MOD == 3) {
        console.log("MEH")
    };
}