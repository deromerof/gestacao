function semana(){
  
  var valorSemanaElemento = document.getElementById("semana");
  var semana = valorSemanaElemento.value;
  var x = parseInt(semana);
  console.log(semana);


if (x<=0) {
  alert ("insira um número entre 1 e 40")
} else if (x<= 4) {
alert ("Parabéns, você está no primeiro mês de gravidez");
} else if (x<=8) {
alert ("Parabéns, você está no segundo mês de gravidez");
} else if (x<=12) {
alert ("Parabéns, você está no terceiro mês de gravidez")
} else if (x<=16) {
alert ("Parabéns, você está no quarto mês de gravidez")
 } else if (x<=21) {
alert ("Parabéns, você está no quinto mês de gravidez")
   } else if (x<=26){
alert ("Parabéns, você está no sexto mês de gravidez")
     } else if (x<=30){
alert ("Parabéns, você está no sétimo mês de gravidez")
       } else if (x<=35){
alert ("Parabéns, você está no oitavo mês de gravidez")
          } else if (x<=40){
alert ("Parabéns, você está no nono mês de gravidez")
          }else {
            alert ("insira um número entre 1 e 40")
          }

  }