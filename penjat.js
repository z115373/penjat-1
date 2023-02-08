 
 var vidas= 7;
  var palabro="";
  var letra="";
  function Verificar(){
  var lletra= document.getElementById("lletra").value;
  if((lletra >= "m")) {
      vidas= vidas-1;
      document.getElementById("vidas").innerHTML=vidas;
      letra=lletra+letra+""
      document.getElementById("letras").innerHTML=letra;
      document.getElementById('Fallo').play();
      document.getElementById('tictac').play();
} else{
      palabro=lletra+palabro+""
      document.getElementById("palabro").innerHTML=palabro;
      document.getElementById('G2').play();
}
  if ((vidas==0)){
      window.alert("Has perdut");
      document.getElementById("lletra").disabled=true;
      document.getElementById("boton").disabled=true;
      document.getElementById("A0").hidden=false;
      document.getElementById("A1").hidden=true;
      document.body.style.backgroundImage="url('img/Jungle.png')"
      document.getElementById('campanadax3').play();
      document.getElementById('G1').play();
      lletra="";
  }   
  if ((vidas==6)){
      window.alert("malament");
      document.getElementById("A6").hidden=false;
  }
  if ((vidas==5)){
      window.alert("malament");
      document.getElementById("A5").hidden=false;
      document.getElementById("A6").hidden=true;
  }
  if ((vidas==4)){
      window.alert("malament");
      document.getElementById("A4").hidden=false;
      document.getElementById("A5").hidden=true;    
  }
  if ((vidas==3)){
      window.alert("malament");
      document.getElementById("A3").hidden=false;
      document.getElementById("A4").hidden=true;    
  }
  if ((vidas==2)){
      window.alert("malament");
      document.getElementById("A2").hidden=false;
      document.getElementById("A3").hidden=true;  
  }
  if ((vidas==1)){
      window.alert("malament");
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
    }
