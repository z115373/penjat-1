
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
       } else{
           palabro=lletra+palabro+""
         document.getElementById("palabro").innerHTML=palabro;
       }
       if ((vidas==6)){
           
       }
  if ((vidas==0)){
      window.alert("Has perdut");
      lletra="";
  }   
  if ((vidas==6)){
      document.getElementById("A0").hidden="false";
  }
  }   

if ((vidas==7)){
    function Esconder(){
    document.getElementById("A0").hidden="true";
    document.getElementById("A1").hidden="true";
    document.getElementById("A2").hidden="true";
    document.getElementById("A3").hidden="true";
    document.getElementById("A4").hidden="true";
    document.getElementById("A5").hidden="true";
    document.getElementById("A6").hidden="true";
    }
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


