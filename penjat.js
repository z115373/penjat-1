var vidas= 7;
  var palabro="";
  var letra="";
  var seconds=0
function timer(){
seconds=seconds+1;
document.getElementById("counter").innerHTML=seconds;
}
setInterval(timer,1000);
  function Verificar(){
  var lletra= document.getElementById("lletra").value;
  document.getElementById("lletra").value="";
  lletra=lletra.toLowerCase();
  switch (lletra) {
    case 'à':
    case 'á':
    case 'ä':
    lletra='a';
         break;
    case 'è':
    case 'é':
    case 'ë':
    lletra='e';
         break;
    case 'ì':
    case 'í':
    case 'ï':
    lletra='i';
         break;
    case 'ò':
    case 'ó':
    case 'ö':
    lletra='o';
         break;
    case 'ú':
    case 'ù':
    case 'ü':
    lletra='u';
         break;
    case 'ñ':
    lletra='n';
         break;
    case'ç':
    lletra='c';
         break;
}
  if((lletra >= "m")&&(lletra <= "z") || (lletra=="ñ")){
      vidas= vidas-1;
      document.getElementById("vidas").innerHTML=vidas;
      letra=lletra+letra+""
      document.getElementById("letras").innerHTML=letra;
      document.body.style.backgroundImage="url('img/Jungle.png')"
      document.getElementById('Fallo').play();
      document.getElementById('tictac').play();
      
} else if((lletra <= "m")&&(lletra >= "a") || (lletra=="ç")){
      palabro=lletra+palabro+""
      document.getElementById("palabro").innerHTML=palabro;
      document.getElementById('G2').play();
      document.body.style.backgroundImage="url('img/Desert.png')"
      
}else{
    window.alert("Caracter incorrecte")
}
  if ((vidas==0)){
      window.alert("Has perdut");
      document.getElementById("lletra").disabled=true;
      document.getElementById("boton").disabled=true;
      document.getElementById("A0").hidden=false;
      document.getElementById("A1").hidden=true;
      document.body.style.backgroundImage="url('img/Castle2.png')"
      document.getElementById('campanadax3').play();
      document.getElementById('G1').play();
      lletra="";
  }   
  if ((vidas==6)){
      document.getElementById("A6").hidden=false;
  }
  if ((vidas==5)){
      document.getElementById("A5").hidden=false;
      document.getElementById("A6").hidden=true;
  }
  if ((vidas==4)){
      document.getElementById("A4").hidden=false;
      document.getElementById("A5").hidden=true;    
  }
  if ((vidas==3)){
      document.getElementById("A3").hidden=false;
      document.getElementById("A4").hidden=true;    
  }
  if ((vidas==2)){
      document.getElementById("A2").hidden=false;
      document.getElementById("A3").hidden=true;  
  }
  if ((vidas==1)){
      document.getElementById("A1").hidden=false;
      document.getElementById("A2").hidden=true;  
 }
 }

 


    function Esconder(){
    document.getElementById("A0").hidden=true;
    document.getElementById("A1").hidden=true;
    document.getElementById("A2").hidden=true;
    document.getElementById("A3").hidden=true;
    document.getElementById("A4").hidden=true;
    document.getElementById("A5").hidden=true;
    document.getElementById("A6").hidden=true;
    document.getElementById("fondo1").hidden=true;
    document.getElementById("fondo2").hidden=true;
    document.getElementById("fondo3").hidden=true;
    }
