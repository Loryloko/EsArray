let a = [3, 5, 10, 2, 8]
let somma = a.reduce((a , b) => a + b)

let media = somma / a.length

console.log(media)

let minori = a.filter((b) => b < media)

console.log(minori)

let Qmin = a.filter((b)=> b < media).length
console.log(Qmin)

let QMax = a.filter((b)=> b > media).length
console.log(QMax);