try{
  let c = a + blur;
} catch(error) {
  console.log("Algo deu errado: " + error)
} finally {
  console.log("Executou")
}