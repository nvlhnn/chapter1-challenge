let readline = require('readline-sync');


let calculation = (op, ...args) => {
    let result
    switch (op) {
        case 1:
            result = args[0] + args[1]
            break;

        case 2:
            result = args[0] - args[1]
            break;

        case 3:
            result = args[0] * args[1]
            break;

        case 4:
            result = args[0] / args[1]
            break;

        case 5:
            result = Math.sqrt(args[0])
            break;

        case 6:
            result = Math.pow(args[0], 2)
            break;

        case 7:
            result = Math.pow(args[0], 2)
            break;

        case 8:
            result = Math.pow(args[0], 3)
            break;

        case 9:
            result = Math.PI * Math.pow(args[0], 2) * args[1]
            break;

        default:
            break;
    }

    return result
}


let options = `
    1. tambah
    2. kurang
    3. kali
    4. bagi
    5. akar
    6. kuadrat
    7. luas persegi
    8. volume kubus
    9. volume tabung
`

let needTwoNumQuest = [1, 2, 3, 4, 9]
let num1
let num2
let op
let repeat = true

let generateQuestion = () => {
    console.log(options)
    op = +readline.question("Silahkan masukkan nomor operasi yang ingin dilakukan: ");
    num1 = +readline.question("silahkan masukkan angka pertama: ");
    if (needTwoNumQuest.includes(+op)) {
        num2 = +readline.question("silahkan masukkan angka kedua: ");
    }
}

while (repeat) {
    generateQuestion()
    console.log(calculation(op, num1, num2))
    let again = readline.question("ingin menghitung lagi? (Y/T) : ");
    if (again == 'T') repeat = false
}