function suma(){
    let num1;
    let num2;
    let res;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    res=parseInt(num1) + parseInt(num2);
    document.getElementById("res").innerHTML=res;
}
function resta(){
    let num1;
    let num2;
    let res;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    res=parseInt(num1) - parseInt(num2);
    document.getElementById("res").innerHTML=res;
}
function multiplicacion(){
    let num1;
    let num2;
    let res;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    res=parseInt(num1) * parseInt(num2);
    document.getElementById("res").innerHTML=res;
}
function division(){
    let num1;
    let num2;
    let res;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    res=parseInt(num1) / parseInt(num2);
    document.getElementById("res").innerHTML=res;
}