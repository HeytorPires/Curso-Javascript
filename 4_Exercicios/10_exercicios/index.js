let primo = 7   ;
let divisoes = 0;

for(let i = 1; i <= primo; i++ ){

  if(primo % i == 0) {
    divisoes++;
  }
}

if(divisoes == 2) {
  console.log(`o numero ${primo} é primo `);
} else {
  console.log(`o numoero ${primo} não é primo`)
}
