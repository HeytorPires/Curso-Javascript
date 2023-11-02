let p = promisse.resolve(new Error("Não deu Certo"));

console.log("lalalala")

p.then(value => console.log(value))
    .catch(reason => console.log("Falhou " + reason))
//Then = então;
//catch = pegar;
//Reason = razão