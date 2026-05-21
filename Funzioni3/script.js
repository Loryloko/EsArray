function conta(num){
    if(num < 10 && num >= 0){
    return "1 cifra"
}else if(num >= 10 && num < 100){
        return "2 cifre" 
}else if(num >=100 && num < 1000){
    return "3 cifre"
}else if(num >= 1000 && num <= 9999){
    return "4 cifre"
}else if(num < 0){
    return "Numero troppo piccolo"
}else{
    return "Numero troppo grande"
}
}
let input = Number(prompt('inserisci un numero'))
console.log(conta(input))