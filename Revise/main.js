// Filter on Array
let arr = [23, 45, 78, 13, 88, 100, 50]

// let a = arr.filter((a)=>{
//     return a>20
// })
// console.log("a: ",a)

// Map on Array
let arr2 = [23, 45, 78, 13, 88]

// let b = arr2.map((value, index)=>{
//     console.log(value, index)
//     return value + index
// })

// console.log("b: ",b)

// Reduce on Array
let arr3 = [23, 45, 78, 13, 88]

//1st method
// let c = arr3.reduce((r1, r2)=>{
//     return r1 + r2
// })
// console.log("c: ",c)

//2nd method

// function plus(r1, r2){
//     return r1 + r2
// }
// let d = arr3.reduce(plus)
// console.log("d: ",d)


//1
// let r = prompt("Enter a  Number")

// r = Number.parseInt(r)

// arr.push(r)

// console.log(arr)

//2

// let p;
// do{
//     p = prompt("Enter a  Number")
//     p = Number.parseInt(p)
//     arr.push(p)
// }while(p != 0)
// console.log(arr)


//3

// let ab  = arr.filter((n)=>{
//     if (n%10 == 0){
//         return n
//     }
// })

// console.log(ab)


//4

// let arr4 = arr.map((num)=>{
//     return num*num
// })

// console.log(arr4)

// 5
prr = [1,2,3,4,5,6]
let s = prr.reduce((n1, n2)=>{
    return n1*n2
})

console.log(s)