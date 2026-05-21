function palindromo(frase) {
    const pulita = frase.replace(/\W/g, "");
    return pulita === pulita.split('').reverse('').join('')
}
console.log(palindromo('i topi non avevano nipoti'))
console.log(palindromo('hey'))