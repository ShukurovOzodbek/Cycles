// Loop
// 1
// while (true) {
//     let spros = +prompt('Введите число')
//     if (spros) {
//         alert('Ваше число ' + spros)
//     }else if ( spros > 100 ){
//         alert('Вы вели число больше 100')
//     }else{
//         alert('You are not ready')
//     }
// }

// 2 
let arr = [12,33,23,42,4,4,34,3,43,5,54,56,4,4,3,35,6,7,8,9]

let even = []
let odd = []

for ( let item of arr ) {
    if (item % 2 === 0){
        even.push(item)
    }else{
        odd.push(item)
    }
}
console.log(even, odd);
