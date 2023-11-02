function SomacomDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b)
        }, 3000);
    })
}

async function soma(a, b, c, d) {
    let x = SomacomDelay(a, b)
    let y = SomacomDelay(c, d)

    return await x + await y;
}

console.log(soma(1, 2, 3, 4).then(value => console.log(value)))