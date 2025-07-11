let arr = [1,232,45,7,80]
arr.forEach((value,index,ar)=>{
    console.log(value,index,arr);
})


//arr1.every(v=>v>1)
//arr1.some(v=> v<2)


//console.log(arr1.find(v=>v>=45))


//console.log(arr.findIndex(v=>v>3))

//console.log(arr.map(v=>v*2))


console.log(arr.filter(v=>v>40))

console.log(arr.filter((v,i)=>i!=2))
console.log(arr.fill(5,2,1))

console.log(arr.reduce((preValue,currentValue,i,arr)=>{
    return preValue+currentValue
},0))
//p=0 ,1=p-1,232 = p-233,45=p-278,


console.log(arr.sort((a,b)=>b-a))

