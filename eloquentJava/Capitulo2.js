// Aqui comienza el Ejercicio 1 (pirámide)
let string= '#'
for(let i=0;i<8;i++){
    console.log(string)
    string=string + "#"
}
 //Aqui comienza el Ejercicio 2( FizzBuzz)
 for(let a=1; a<101;a++){
if(a%3==0 && a%5==0){
    console.log('Fizzbuzz')
}
     else if (a%3==0 ){
        console.log('Fizz')
    }
    else if( a%5==0){
        console.log('Buzz')
    } 
    else{
        console.log(a)
    }
} 
 //Aqui comienza el Ejercicio 3 (Tablero de Ajedrez)
let b= 20
let y= ' #'
let x= '# '
 for( let c=0;c<b;c++){
    if(c%2==0){
console.log(y.repeat(b/2))
    } 
    else{
        console.log(x.repeat(b/2))
    }  
} 
 