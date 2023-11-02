
function VerificarAlgo(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log("o Numero é o 2"))
        } else {
            reject(new Error("Falhou"));
        }
    })
}

VerificarAlgo(2);
VerificarAlgo(3);