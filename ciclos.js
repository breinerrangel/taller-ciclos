//PRIMER PUNTO

// suma=0
// let x=+prompt("ingrese un numero ")
// while(x>0){
//     suma+=x
//     x=+prompt("ingrese un numero ")


// }
// console.log(suma)

//SEGUNDO PUNTO
// let x=1

// while(x!=0){

//    x=Math.floor(((Math.random(0,10)* (10 - 0 )) + 0))
//    console.log(x)

// }

//TERCER PUNTO
// for(let i=1;i<=1000;i++){
//     x=Math.floor((Math.random(1,1000)* (1000-1 +1))+1)
//     console.log(x)
// }


//CUARTO PUNTO
// let num=+prompt("ingrese un numero : ")
// for(let i=1;i<=num;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }


//QUINTO PUNTO
// let promedio_niños=0
// let promedio_jovenes=0
// let promedio_adultos=0
// let promedio_viejos=0
// let contador=0
// let contador1=0
// let contador2=0
// let contador3=0




// for (let i=1;i<=20;i++){
//     let edad=+prompt("ingrese su edad : ")
//     if(edad>=0  && edad<=12){
//         let peso=+prompt("ingrese su peso : ")
//         promedio_niños+=peso
//         contador+=1
//         console.log("categoria niños")
//     }
//     else if (edad>=13 && edad<=29){
//         let peso=+prompt("ingrese su peso : ")
//         promedio_jovenes+=peso
//         contador1+=1
//         console.log("catgoria jovenes")

//     }
//     else if(edad>=30 && edad<=59){
//         let peso=+prompt("ingrese su peso : ")
//         promedio_adultos+=peso
//         contador2+=1
//         console.log("categoria adultos")
//     }
//     else if(edad>=60){
//         let peso=+prompt("ingrese su peso : ")
//         promedio_viejos+=peso
//         contador3+=1
//         console.log("categoria viejos ")
//     }

// }
// console.log(`el promedio de peso de los niños fueron ${promedio_niños/contador}\n joevenes ${promedio_jovenes/contador1}\n adultos ${promedio_adultos/contador2} \n viejos ${promedio_viejos/contador3}`)
   




//SEPTIMO PUNTO
// let contador1=0
// let  contador2=0
// let contador3=0

// let animales=+prompt("ingrese 1 si quiere elefantes 2 si quiere jirafas y 3 si quiere chimpanses ")
// while(animales!=0){
//     if(animales==1){
//         for(let i=1;i<=20;i++){
//             edades=+prompt("ingrese las edades : ")
//             if(edades>=0  && edades<=1){
//                 contador1+=1
                
//             }
//             else if(edades>1 && edades<3){
//                 contador2+=1
//             }
//             else if(edades>=3){
//                 contador3+=1
    
//             }
    
//         }console.log(`el porcentaje de edades entre 0 a 1 año es ${(contador1*100)/20}% entre 1 a 3 ${(contador2*100)/20}% y de tres en adelate es ${(contador3*100)/20}%`)
//     }
//     else if (animales==2){
//         for(let i=1;i<=15;i++){
//             edades=+prompt("ingrese las edades : ")
//             if(edades>=0  && edades<=1){
//                 contador1+=1
//             }
//             else if(edades>1 && edades<3){
//                 contador2+=1
//             }
//             else if(edades>=3){
//                 contador3+=1
    
//             }
    
//         }console.log(`el porcentaje de edades entre 0 a 1 año es ${(contador1*100)/15}% entre 1 a 3 ${(contador2*100)/15}% y de tres en adelate es ${(contador3*100)/15}%`)
    
//     }
//     else  if(animales==3){
//         for(let i=1;i<=40;i++){
//             edades=+prompt("ingrese las edades : ")
//             if(edades>=0  && edades<=1){
//                 contador1+=1
//             }
//             else if(edades>1 && edades<3){
//                 contador2+=1
//             }
//             else if(edades>=3){
//                 contador3+=1
    
//             }
    
//         }console.log(`el porcentaje de edades entre 0 a 1 año es ${(contador1*100)/40}% entre 1 a 3 ${(contador2*100)/40}% y de tres en adelate es ${(contador3*100)/40}%`)
//     }
//     animales=+prompt("ingrese 1 si quiere elefantes 2 si quiere jirafas y 3 si quiere chimpanses ")

    
    

// }


// OCTAVO PUNTO

// let sueldo=980000
// let ventas =+prompt("ingrese las ventas de esta semana : ")
// while(ventas>0){
//     nombre=prompt("nombre del vndedor ")
//     total=(ventas*0.1)
//     sueldo_total=total+sueldo
//     console.log(`la comision que resive el vendedor ${nombre} por las vendas es de ${total} y total de mas sueldo base es de ${sueldo_total}`)
//     alert("siguiente ")
//     ventas =+prompt("ingrese las ventas de esta semana : ")
// }


// const sueldo=950000
// const comision=170000
// let autos_venditos=+prompt("ingrese la cantidad de autos vendidos ")

// while(autos_venditos>0){
//     nombre=prompt("ingrese nombre del vendedor ")
//     ventas=+prompt("ingrese la cantidad total de los autos vendidos ")
//     suma=ventas*0.05
//     total=ventas+sueldo+(autos_venditos*comision)
//     console.log(`autos vendidos ${autos_venditos}`)

//     console.log(`el vendedor ${nombre} resive un extra de ${suma} por el total de autos vendidos y una comicion de ${comision*autos_venditos} y el total es de ${total}`)
//     alert("siguiente vendedor")
//     autos_venditos=+prompt("ingrese la cantidad de autos vendidos ")
// }

//DECIMO PUNTO
// let nombre=prompt("ingrese nombre de el estudiante : ")
// while(nombre!=""){  

//     nota1=+prompt("ingrese nota 1")
//     nota2=+prompt("ingrese nota 2")
//     nota3=+prompt("ingrese nota 3")
//     nota4=+prompt("ingrese nota 4")
//     nota5=+prompt("ingrese nota 5")
//     suma=((nota1+nota1)*0.4)+((nota3+nota4+nota5)*0.6)/5
//     if(nota1,nota2,nota3,nota4,nota5>=0 && nota1,nota2,nota3,nota4,nota5<=10){
//         console.log(`nombre del estudiante ${nombre} notas = ${nota1}\n ${nota2}\n ${nota3}\n ${nota4}\n ${nota5} y promedio ${suma}`)
//         alert("siguiente estudiante")

//     }
//     else{
//         alert("error ingrese de nuevo")
//     }
   
//     nombre=prompt("ingrese nombre de el estudiante : ")
// }