function matrizDiagonal(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i !== j && matriz[i][j] !== 0) {
                return false
            }
        }
    }
    return true
}

let matriz = [
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3]
]

const matriz2 = [
    [1, 1, 2],
    [0, 0, 1],
    [2, 3, 0]];

console.log(matrizDiagonal(matriz))
console.log(matrizDiagonal(matriz2))

