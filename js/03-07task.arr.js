// var prompt= require('prompt-sync')();
// let p1= parseInt(prompt(enter age of p1));
// let p2= parseInt(prompt(enter age of p2));
// let p3= parseInt(prompt(enter age of p3));
// let p4= parseInt(prompt(enter age of p4));
// let arr=[]
// for(let i=0;i<=3;i++)
// {
//     arr[i]=parseInt(prompt('Enter${i}nd age'))
// }
// console.log("greater than 18;",arr.filter(v=> v>=18));
// console.log("less than 18;",arr.filter(v=> v<=18));




// for(let i=0;i<=4;i++)
// {
//     arr[i]=parseInt(prompt('Enter${i+1}nd age'))
// }
// console.log(arr.reduce(((reduce,cv))=>{
//     return cv/5
// },0));


// //sort methodd

// let x=[2,'abc','xyz',1,65,'fc'90,33]
// let y=[]
// let z=[]

// for(let i of x)
// {
//     if(typeof i =='string')
//     {
//         y.push(i)
//     }
//     else{
//         z.push
//     }
// }
// y.sort()
// z.sort((a,b)=>a-b)

// x=[..z,..y]
// console.log(x);





function map (fun,arr){
    let new arr= fun(arr)
    return new arr;
}
let ans= map((arr)=>{
  for(let i=0 ; i<ar . length; i++)
{
    arr[i]=ar[i]*2;
}
return ar;
},[1,4,30,40,7])
console.log(ans);