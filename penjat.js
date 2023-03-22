var vidas= 7;
  var palabro=[];
  var letra=["_" , "_" , "_" , "_" , "_" , "_" , "_"];
  var seconds=0;
  var paraules=["fetge" , "forca" , "jutges" , "jutjat" , "mengen" , "penjat" , 
      "quinta" , "setze"];
  var pistes=["A la quinta forca" , "A ca un penjat, no hi anomenis cordes" , 
      "Setze jutges d'un jutjat mengen fetge d'un penjat"];
  var paraulespistes=[1 , 2 , 0 , 2 , 2 , 2 , 1 , 0 , 2];
  var taula=[
    {"paraula":"cordes", "pista":"A ca un penjat, no hi anomenis cordes"},
    {"paraula":"fetge", "pista":"Setze jutges d'un jutjat mengen fetge d'un penjat"},
    {"paraula":"forca", "pista":"A la quinta forca"},
    {"paraula":"jutges", "pista":"Setze jutges d'un jutjat mengen fetge d'un penjat"},
    {"paraula":"jutjat", "pista":"Setze jutges d'un jutjat mengen fetge d'un penjat"},
    {"paraula":"mengen", "pista":"Setze jutges d'un jutjat mengen fetge d'un penjat"},
    {"paraula":"penjat", "pista":"A ca un penjat, no hi anomenis cordes"},
    {"paraula":"quinta", "pista":"A la quinta forca"},
    {"paraula":"setze", "pista":"Setze jutges d'un jutjat mengen fetge d'un penjat"}
  ];
  var aleatori=Math.floor(Math.random()*paraules.length);
  var paraula=paraules[aleatori];
  var pista=pistes[paraulespistes[aleatori]];
  var endevinades=[];
  for (var i = 0; i < paraula.length; i++){
      endevinades[i]="_";
  } 

function timer(){
seconds=seconds+1;
document.getElementById("counter").innerHTML=seconds;
setInterval(timer,1000);
}
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

var pos=paraula.indexOf(lletra);
  if((pos==-1)){
      window.alert("fallat");
      vidas= vidas-1;
      document.getElementById("vidas").innerHTML=vidas;
      letra=lletra+letra+"";
      document.getElementById("letras").innerHTML=letra;
      document.body.style.backgroundImage="url('img/Jungle.png')";
      document.getElementById('Fallo').play();
      document.getElementById('tictac').play();
  }
 else if((pos>-1)){
      window.alert("encertat");
      for (var i = pos; i < paraula.length; i++)
      if (paraula[i]==){
      Paraula[i]=lletra;
         }
  
      document.getElementById("endevinades").innerHTML=palabro;
      document.getElementById('G2').play();
      document.body.style.backgroundImage="url('img/Desert.png')";
      }   
else{ 
    window.alert("Caracter incorrecte");
}
  if ((vidas==0)){
      window.alert("Has perdut");
      document.getElementById("lletra").disabled=true;
      document.getElementById("boton").disabled=true;
      document.getElementById("A0").hidden=false;
      document.getElementById("A1").hidden=true;
      document.body.style.backgroundImage="url('img/Castle2.png')";
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
    document.getElementById('endevinades').innerHTML = endevinades;
    }
