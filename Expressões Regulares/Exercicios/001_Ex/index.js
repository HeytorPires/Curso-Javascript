const OnlyCapsLock = /^[A-Z]+$/

console.log(OnlyCapsLock.test("OLAAA"));
console.log(OnlyCapsLock.test("olá"))