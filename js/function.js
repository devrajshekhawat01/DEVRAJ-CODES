// function => fn is a block of code to perform specific task that can be reused 

//normal fn, fn experession(anonymus fn), arrow fn
//normal fn=> this 
//hoisting
function sum(a,b){
     // console.log(a+b)
     return a+b
}
//let x= sum(23,12)
//console.log(x)
let square = function(a){
    returna**2
}
//console.log(square(12))
//arrow fn=> not this
//not hosited
//let cube=(x) =>{return x**3}
let cube= x=>x**3
console.log(cube(4))


//cb function => a fn that is paased in  another fn and called inside it

function calculateandmultiby5(fnc , a){
    let b = fnc(a)
    return b*5
}
let z= x=> x+10
console.log(calculateandmultiby5(z,3))
console.log(calculateandmultiby5(x=>x+12,3))