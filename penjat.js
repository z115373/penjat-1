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
       
  if ((vidas==0)){
      window.alert("Has perdut");
      document.getElementById("A0").hidden="false";
      lletra="";
  }   
  if ((vidas==6)){
      window.alert("malament");
      document.getElementById("A6").hidden="false";
  }
  if ((vidas==5)){
      window.alert("malament");
      document.getElementById("A5").hidden="false";
  }
  if ((vidas==4)){
      window.alert("malament");
      document.getElementById("A4").hidden="false";
  }
  if ((vidas==3)){
      window.alert("malament");
      document.getElementById("A3").hidden="false";
  }
  if ((vidas==2)){
      window.alert("malament");
      document.getElementById("A2").hidden="false";
  }
  if ((vidas==1)){
      window.alert("malament");
      document.getElementById("A1").hidden="false";
  }
 
  }   


    function Esconder(){
    document.getElementById("A0").hidden="true";
    document.getElementById("A1").hidden="true";
    document.getElementById("A2").hidden="true";
    document.getElementById("A3").hidden="true";
    document.getElementById("A4").hidden="true";
    document.getElementById("A5").hidden="true";
    document.getElementById("A6").hidden="true";
    }
