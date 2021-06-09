function solucao(tempo, distancia) {
    //seu codigo aqui
    if (tempo < 5) {
        console.log(600)
    } else if (tempo > 5 && tempo <= 60) {
        (tempo * 100) + distancia * 50
        console.log((tempo * 100) + distancia * 50)
    } else if (tempo > 60) {
        if (distancia < 100) {
            console.log(200 * distancia)
        } else if (distancia >= 100) {
            console.log(150 * distancia)
        };
    };
};