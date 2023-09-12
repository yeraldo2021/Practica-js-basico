const calcularPromedio = (numero) => {
    let sumaTotal=0
    for (let i=0; i<numero.length; i++){
        sumaTotal += numero[i]
    }
    const promedio=sumaTotal/numero.length
    return promedio
}
const listaNumeros=[1,2,3,4,5,6,7,8,9,10]
const promedioNumeros=calcularPromedio(listaNumeros)
console.log(promedioNumeros)
