let a=document.getElementById('k1');
let d;
a.addEventListener('click',function(){
    let b=document.getElementById('inp').value;
    let c=document.getElementById('s').value;
    if(c==="Celsius"){
        d=Math.round((b*(9/5))+32);
        console.log(d);
        document.getElementById("j1").innerHTML=d+ "F";
    }
    else{
        d= Math.round((b-32)*(5/9));
        console.log(d);
        document.getElementById("j1").innerHTML=d+ "C";
    }
    
})