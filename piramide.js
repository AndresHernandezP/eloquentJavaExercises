 // Aqui comienza el Ejercicio 1 (pirámide)
function piramide1(){
let string= '#'
let a= document.getElementById("p1").value;
for(let i=0;i<a;i++){ 
    document.getElementById("ejercicio1").innerHTML+=`<div> ${string}</div> `
    string=string + "#"
}
}
//Aqui comienza el Ejercicio 2( FizzBuzz)
function fizzbuzz(){
let b= document.getElementById("p2").value;
for(let a=1;a<=b;a++){
if(a%3==0 && a%5==0){
    document.getElementById("ejercicio2").innerHTML+=`<div> Fizzbuzz </div> `
}
     else if (a%3==0 ){
        document.getElementById("ejercicio2").innerHTML+=`<div> Fizz </div> `
    }
    else if( a%5==0){
        document.getElementById("ejercicio2").innerHTML+=`<div> Buzz </div> `
    } 
    else{
        document.getElementById("ejercicio2").innerHTML+=`<div> ${a}</div> `
    }
} 
}
//Aqui comienza el Ejercicio 3( Tablero de ajedrez)
function ajedrez() {
let c= document.getElementById("p3").value;
let y= ' #'
let x= '# '
 for( let d=0;d<c;d++){
    if(d%2==0){
        document.getElementById("ejercicio3").innerHTML+=`<div> ${y.repeat(c/2)} </div> `
    } 
    else{
        document.getElementById("ejercicio3").innerHTML+=`<div> ${x.repeat(c/2)} </div> `
    }  
}  
}
/* aqui comienza el Ejercicio 4(Minimo) */
const bigestNumber =() =>{
    let a=document.getElementById("p4").value
    let b=document.getElementById("p5").value
    if(a===null || b===null){
        window.alert("necesitas dos numeros!");
    }
    else if(a>b){
        document.getElementById("ejercicio4").innerHTML+= `<div> ${a} </div> `
    }
    else{
        document.getElementById("ejercicio4").innerHTML+= `<div> ${b} </div> `
    }
}
/* aqui comienza el Ejercicio 5(Recursión) */

function esPar() {
    let a =document.getElementById("p6").value
    function buscar (a){
        if (a===0){
            document.getElementById("ejercicio5").innerHTML+= `<div> es par </div> `
            console.log('es par')
        }
          else if(a===1){
            document.getElementById("ejercicio5").innerHTML+= `<div> es impar </div> `
          }
    }
} 
