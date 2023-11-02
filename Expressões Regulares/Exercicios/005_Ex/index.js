const ValidarPassword = /^[A-Za-z0-9_!@#$%^&*()-+=<>?]{3,16}$/

console.log(ValidarPassword.test("123aa@"))