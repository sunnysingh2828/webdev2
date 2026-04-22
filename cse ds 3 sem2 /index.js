function calculate(){

let n=document.getElementById("subjects").value;
let total=0;
for(let i=1; i<=n; i++){
    let m=Number(prompt("Enter Marks of subject "+i));
    total+=m;
}
let average=total/n;
document.getElementById("result").innerHTML="total marks="+total;
}