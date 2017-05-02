window.onload = function() {
  captcha();
  var generar = document.getElementById("click");
  generar.addEventListener("click",captcha);


  var corregir = document.getElementById("ingresar");
  corregir.addEventListener("click",validar);

};

function validar(){

    var codigo1= document.getElementById("codigo").value;
    var codigo2= document.getElementById("codigoT").value;

  if (codigo1 == codigo2) {
    alert("FELICIDADES has ingresado el codigo correcto.");

  }else {
    alert("El codigo ingresado no es el correcto. Vuelva a intentarlo por favor.");
    captcha();
  }
}



function captcha(){
  /*MANERA UNO
  var codLetras= new Array("A", "B", "C","D", "E", "F","G","H","I","J","K", "L", "M", "N", "Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  var codNumber= new Array("1", "2", "3","4","5","6","7","8","9","0");

  var letras = codLetras[Math.floor(Math.random()*codLetras.length)];
  var numeros = codNumber[Math.floor(Math.random()*codNumber.length)];

  var codigoMostrar = document.getElementById("codigo");
  codigoMostrar.value= letras + numeros;*/
  var caracter = "ABCDEFGHIJKLMÑOPQRSTUVWXYZ'1234567890"
  var codigo= "";
  var cantidad= Math.floor(Math.random() * (8 - 6) + 6);

  for (var i = 0; i < cantidad; i++ ) {
      codigo += caracter[Math.floor(Math.random() * caracter.length)];
  }
  var codigoMostrar = document.getElementById("codigo").value= codigo;

  var codigoColor = document.getElementById("codigo").style.color= color();
}

function color(){

      var codigos = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += codigos[Math.floor(Math.random() * 16)];
      }
      return color;
}
