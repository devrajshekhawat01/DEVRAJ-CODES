const PromptSync = require('prompt-sync')

//array=> collection of datatypes(values)
let arr=[12,'a,true']
let a=[23,12,45,9,14,45]

console.log(Array.isArray(a))
console.log(a.at(1))
console.log(a[1])
console.log(a.pop())
console.log(a.push(23))
console.log(a.shift())
console.log(a.unshift(1,6))
console.log(a.concat(23,12,34,45))
console.log(a.includes(12,3))
console.log(a.indexOf(45,3))
console.log(a.lastIndexOf(45))
console.log(a.length)
console.log(a.reverse())
console.log(a.slice(1,4))

for(let i in a){
    console.log(a[i])
}


for (const x of a){
    console.log(x)
}

//1.insert element at specified location in an array
var prompt = require('prompt-sync')();
let index= parseInt(prompt("enter an number ;"))
let ele = parseInt("enter index;")

//2. delete element at sspecified location in an array
var prompt = require('prompt-sync')();
let ele = parseInt(Prompt ("enter index for delete"))
let arr=[12,22,31,223,112,22]
console.log("before deleting",arr);
arr.pop('${ind}')
console.log(arr)

//3. take 5 values from user and create an array from them
let values = [];

for (let i = 0; i < 5; i++) {
  let input = prompt('Enter value ${i + 1}:');
  values.push(input);
}



//4. and print them in reverse order
//5. flatern an 2d array (without method)
let x=[[1,2],[3,4][3,7]]
let y=[]
for(let i of x){
    if(array.isArray(i)){
        for(let j of i){
            y.push(j)
        }
    }else{
        prompt.push(i)
    }
}
