
/*let num = prompt("Digite um número:");

    if (num % 2 === 0) {
        console.log(num + " é um número par.")
    }
    else {
        console.log(num + " é um número impar.")
    }


    if (num == 0) {
        console.log("Esse número é 0, um número neutro.");
    }
    else {
        if (num > 0) {
        console.log(num + " é um número positivo.");
        }
        else {
        console.log(num + " é um número negativo.");
    }
    }*/

    /*let oper = prompt ("Digite o símbolo do operador:");
    let num1 = parseInt (prompt ("Digite o primeiro número:"));
    let num2 = parseInt (prompt ("Digite o segundo número:"));
    
    let resultado = 0;

    switch (oper) {
        case "+" :
            resultado = num1 + num2;
            
            break;
        case "-" :
            resultado = num1 - num2;
           
            break;
        case "*" :
            resultado = num1 * num2;
            
            break;
        case "/" :
            resultado = num1 / num2;
           
            break;
        default:
            console.log("Operador inválido!")
    }
    console.log(resultado)*/

    /*let num = 1

    do {
       num = prompt ("Digite um número de 1 a 7:");
        switch (num) {
            case "1" :
                console.log("Domingo");
                break;
            case "2" :
                console.log("Segunda");
                break;
            case "3" :
                console.log("Terça");
                break;
            case "4" :
                console.log("Quarta");
                break;
            case "5" :
                console.log("Quinta");
                break;
            case "6" :
                console.log("Sexta");
                break;
            case "7" :
                console.log("Sábado");   
                break;
            default:
                console.log("Número inválido!")
        }
    }
    while (num>0)*/

    /*let vet = [10,20,30];
    console.log (vet);
    //console.log (vet.length);
    vet.push (40,50,60);
    console.log (vet);
    //console.log (vet.length);
    vet.pop ()
    vet.pop ()
    console.log (vet)
    //console.log (vet.length);

    for (i=1; i<=vet.length; i++) {
        let qtde = vet.length
        console.log(qtde)
    }*/

    /*let cont;
    let vet = [];
    for (cont=0; cont<5; cont++) {
        vet [cont] = parseInt (prompt("Digite o elemento ", cont, " do vetor."));
    }
    console.log (vet);*/

    //let cont=0;
    //let vet = [];
    //let num;
    
    /*num = parseInt (prompt("Digite um número: "));
    while (num != 0) {

        vet [cont] = num
        console.log (vet[cont]-1, "  ", vet[cont]+1)

        cont++;
        num = parseInt (prompt("Digite um número: "));
    }*/

    /*num = parseInt (prompt("Digite um número: "))

    do {
        vet [cont] = num
        console.log (vet[cont]-1, "  ", vet[cont]+1)

        cont++;
        num = parseInt (prompt("Digite um número: "));
    }
    while (num != 0);
    console.log(vet)
    console.lot(vet.length)*/

    /*let cont;
    let vet = [];
    let num;
    let num1;
    let qtde = 0

    for (cont=0; cont<=5; cont++) {
        num = parseInt (prompt("Digite um número:"));
        vet [cont] = num;
       
    }
    console.log(vet)

    num1 = parseInt (prompt("Digite um número:"));
    for (cont=0; cont<=5; cont++) {
        if (num1==vet[cont]) {
            qtde++;
        }
    }
    console.log("Esse número se repete ",qtde," no vetor.")*/

   /* let pontuacao = parseInt (prompt ("Digite sua pontuação:"))
    let titulo;

    if (pontuacao>=100) titulo = "Mestre";
    else if (pontuacao >=50) titulo = "Experiente";
        else if (pontuacao >= 20) titulo = "Aprendiz";
            else titulo = "Sem experiência"
    console.log(titulo)*/

    /*let codMsg = parseInt(prompt("Digite um número:"));
    let msg;

    if (codMsg==1) msg = "INÍCIO"
    else if(codMsg==2) msg = "MEIO"
        else if(codMsg==3) msg = "MEIO2"
            else msg = "FIM"
    console.log(msg)

    switch (codMsg){
        case 1:
            msg = "INICIO";
            break;
        case 2:
            msg = "MEIO";
            break;
        case 3:
            msg = "MEIO2"
            break;
        default:
            msg = "FIM"
    }
    console.log(msg)*/

    /*let idade = parseInt(prompt("Digite sua idade:"));
     
    if(idade<18) console.log("Você é menor de idade.");
    else if(idade>=18 && idade<=64) console.log("Você é adulto.");
        else console.log("Você é idoso.");

    switch (true){
        case idade>64:
            console.log("Você é idoso.")
            break;
        case idade>=18:
            console.log("Você é adulto.");
            break;
        default:
            console.log("Você é menor de idade.");
    }*/

/*function soma(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

function mult(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    return num1/num2;
}

let numero1 = parseInt(prompt("Digite um número:"));
let resultado;

let oper;
let numero2;

while (numero1>=0){
oper = prompt("Digite o operador:");
numero2 = parseInt(prompt("Digite outro número:"));
let correto = true;
switch (oper){
    case "+":
        resultado = soma(numero1,numero2);
        break;
    case "-":
        resultado = sub(numero1,numero2);
        break;
    case "*":
        resultado = mult(numero1,numero2);
        break;
    case "/":
        resultado = div(numero1,numero2);
        break;
    default:
        console.log("O operador ",oper," é inválido.");
        correto = false;
}
if (correto=true) console.log(resultado);
numero1 = parseInt(prompt("Digite um número:"));

}  */

/*function soma (num1,num2) {
    return num1+num2;
  }
  function mult (num1,num2) {
    return num1*num2;
  }
  function sub (num1,num2) {
    return num1-num2;
  }
  function divisao (num1,num2) {
    return num1/num2;
  }
  // programa principal
  let resultado;
  let numero2;
  let numero1=parseInt (prompt("Digite o primeiro número"));  
  while (numero1>=0){
    let correto = true;
    numero2=parseInt (prompt("Digite o segundo número"))
    oper = prompt ("Digite a operação (+,-,*,/");
    switch (oper) {
      case "+":
        resultado = soma (numero1,numero2);
        break;
      case "-":
        resultado = sub (numero1,numero2);
        break;
      case "*":
        resultado = mult (numero1,numero2);
        break;  
      case "/":
        resultado = divisao (numero1,numero2);
        break;  
      default:
        console.log ("O operador ",oper," é invalido") ;
        correto=false;
    }      
    if (correto==true) console.log (resultado);
    numero1=parseInt (prompt("Digite o primeiro número"));  
   
   
  }*/

  //Exercício 1: Soma dos elementos de um vetor
  //Escreva uma função que recebe um vetor de números como parâmetro e retorna a soma de todos os elementos.
 /* const limite = 5;
  let sum = 0;
  let vet = [];
  let cont = 0
 
  function soma(){
      
  for(let ind = 0; ind < limite; ind++){
        vet[cont] = parseInt(prompt("Digite um número:"));

        sum+=vet[cont];
    }
    return sum;
  }
 
  console.log(soma())*/

//Exercício 2: Média dos elementos de um vetor
//Escreva uma função que recebe um vetor de números como parâmetro e retorna a média dos elementos.
/*const limite = 5;
  let vet = [];
  let cont = 0
  let sum = 0;
  let media;
 
  function Media(){
      
  for(let ind = 0; ind < limite; ind++){
        vet[cont] = parseInt(prompt("Digite um número:"));

        sum+=vet[cont];
    }
    media = sum/limite;
    return media;
  }
 
  console.log(Media())*/

//Exercício 3: Maior elemento de um vetor
//Escreva uma função que recebe um vetor de números como parâmetro e retorna o maior elemento presente no vetor.
 /* const limite = 5;
  let vet = [];
  let cont = 0
  let maiornum = 0;
 
  function maiorNum(){
      
  for(let ind = 0; ind < limite; ind++){
        vet[cont] = parseInt(prompt("Digite um número:"));
        if (maiornum<vet[cont]) maiornum = vet[cont];
    }
   
    return maiornum;
}
console.log(maiorNum())*/

//Exercício 4: Verificar se um elemento existe no vetor
//Escreva uma função que recebe um vetor de números e um valor como parâmetros, e retorna 
//true se o valor está presente no vetor, ou false caso contrário.
  /*const limite = 5;
  let vet = [];
  let cont = 0
  let valor;
  let num;

 
  function mesmonum(vet){
    
      
  for(let ind = 0; ind < limite; ind++){
        vet[cont] = parseInt(prompt("Digite um número:"));
        
    }
    num = parseInt(prompt("Digite um número:"));
    for(let ind = 0; ind < limite; ind++){
    if (num==vet[cont]) valor=true;
    else valor = false
    }
   
    return valor;
}
console.log(mesmonum())*/

//Exercício 5: Contagem de ocorrências no vetor
//Escreva uma função que recebe um vetor de números e um valor como parâmetros, e retorna a quantidade de 
//vezes que o valor aparece no vetor.
/*const limite = 5;
  let vet = [];
  let cont = 0
  let correto = true
 
  function maiorNum(){
      
  for(let ind = 0; ind < limite; ind++){
        vet[cont] = parseInt(prompt("Digite um número:"));
        if (maiornum<vet[cont]) maiornum = vet[cont];
    }
   
    return maiornum;
}
console.log(maiorNum());*/


  // função com arrow  
  /*function calcula (operador, operando1, operando2){
    let result;

    //function soma (num1,num2) {
    //    return num1+num2;}
    //function mult (num1,num2) {
    //    return num1*num2;}
    //function sub (num1,num2) {
     //   return num1-num2;}
    //function divisao (num1,num2) {
    //    return num1/num2;}

    let soma = (num1,num2) => num1+num2;
    let mult = (num1,num2) => num1*num2;
    let sub = (num1,num2) => num1-num2;
    let divisao = (num1,num2) => num1/num2;

    switch (operador) {
        case "+":
            result = soma (operando1,operando2);
          break;
        case "-":
            result = sub (operando1,operando2);
          break;
        case "*":
            result = mult (operando1,operando2);
          break;  
        case "/":
            result = divisao (operando1,operando2);
          break;  
        default:
          console.log ("O operador ",operador," é invalido") ;  
      }  
      return result;
  }
  // programa principal
  let resultado;
  let numero2;
  let numero1=parseInt (prompt("Digite o primeiro número"));  
  while (numero1>=0){
    
    numero2=parseInt (prompt("Digite o segundo número"))
    oper = prompt ("Digite a operação (+,-,*,/");
    resultado = calcula(oper, numero1, numero2)    
    console.log (resultado);
    numero1=parseInt (prompt("Digite o primeiro número"));  
   
   
  }*/


 /* let global1 = 10;
  let global2 = 20;

  function a (num1, num2){
    let loc;
    let unlock;
    /*console.log ("global 1= ",global1);
    console.log ("global 2= ",global1);
    console.log ("loc= ",global1);
    console.log ("unlock= ",global1);
    function a1 (num1){
        let loca1;

        /*console.log ("global 1= ",global1);
        console.log ("global 2= ",global1);
        console.log ("loc= ",global1);
        console.log ("unlock= ",global1);
        console.log ("loca1= ",global1);
    }

    function a2 (num2){
        let loca2;
        console.log ("global 1= ",global1);
        console.log ("global 2= ",global1);
        console.log ("loc= ",loc);
        console.log ("unlock= ",unlock);
        //console.log ("loca1= ",loca1);
        console.log ("loca2= ",loca2);
    }
  }*/

  /*console.log (a(global1,global2));
  console.log (global1);
  console.log (global2);*/
/*function a (){
  var mensagem = prompt("Digite um mensagem:");
  var elemento = document.getElementById ("msg");
  elemento.innerHTML = mensagem}*/

  /*let pessoa = {
    nome : "Diana",
    idade: 23,
    sexo: "feminino",
    estudante: true,
  };

  console.log(pessoa);
  console.log(pessoa.nome ," ", pessoa.idade);
  pessoa.nome = "Túlio";
  pessoa.idade = 21;
  pessoa.estudante = false
  console.log(pessoa.nome ," ", pessoa.idade," ", pessoa.estudante);*/

  /*let pessoa = [
    {nome:"Josefa",idade:70},
    {nome:"Marineide",idade:50},
    {nome:"Robesvaldo",idade:45},
    {nome:"akldflaksd",idade:6}
  ]
  
  for (let cont=0; cont<pessoa.length; cont++){
    console.log(pessoa[cont].nome)
    console.log(pessoa[cont].idade)
  }*/

  let pessoas = [];
  
  

  for (let cont= 0; cont<3; cont++){
    let pessoa = {nome: "", idade: 0};
    
    pessoa.nome = prompt("Digite um nome:")
    pessoa.idade= prompt("Digite um número:")
    pessoas.push(pessoa)
    
  }
  console.log(pessoas)