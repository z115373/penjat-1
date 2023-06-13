 var Idiomes = [];
  const Idiomes_dft = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Estructures de Dades Joc del Penjat",
            "Versio": "Versió β Joc del Penjat",
            "Input": "Escriu una lletra minúscula",
            "Pregunta": "Anam a la quinta forca?",
            "Comprovar": "Comprovar",
            "Paraula": "Paraula:",
            "Sopes": "Demanes sopes?",
            "Pista": "Pista",
            "Vides": "Vides:",
            "Moix": "Un moix en té set?",
            "Lletres": "Lletres:",
            "Ets": "Ets de lletres?",
            "URLpistes": "URLpistes:",
            "Dita": "Dita",
            "Dita1": "A la quinta forca, ",
            "Dita2": "A ca un penjat, no hi anomenis cordes, ",
            "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
            "Credits": "Crèdits:",
            "YouTube": "Joc Penjat on Scratch",
            "Wikis": "Penjat",
            "Idioma": "en Català",
            "Diccionari": "Diccionari",
            "Teclat": "Mostra o Amaga",
            "Incorrecte": "Caràcter incorrecte!",
            "Repetida": "Lletra repetida!",
            "Encertat": "Has encertat!",
            "Guanyat": "i has guanyat!",
            "Fallat": "Has fallat!",
            "Perdut": "i has perdut!",
            "Descansi": "En pau descansi – RIP!",
            "Puntuacio": "Puntuació:"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Estructuras de Datos Juego del Ahorcado",
            "Versio": "Versión β Juego del Ahorcado",
            "Input": "Escribe una letra minúscula",
            "Pregunta": "Vamos al quinto pino?",
            "Comprovar": "Comprobar",
            "Paraula": "Palabra:",
            "Sopes": "Te rindes?",
            "Pista": "Pista",
            "Vides": "Vidas:",
            "Moix": "Un gato tiene siete?",
            "Lletres": "Letras:",
            "Ets": "Eres de letras?",
            "URLpistes": "URLpistas:",
            "Dita": "Dicho",
            "Dita1": "Al quinto pino, ",
            "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
            "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
            "Credits": "Crèditos:",
            "YouTube": "Juego Ahorcado on Scratch",
            "Wikis": "Ahorcado",
            "Idioma": "en Español",
            "Diccionari": "Diccionario",
            "Teclat": "Muestra o Esconde",
            "Incorrecte": "Carácter incorrecto!",
            "Repetida": "Letra repetida!",
            "Encertat": "Has acertado!",
            "Guanyat": "y has ganado!",
            "Fallat": "Has fallado!",
            "Perdut": "y has perdido!",
            "Descansi": "En paz descanse - RIP!",
            "Puntuacio": "Puntuación:"
        },
        {
            "IdIdioma": "en",
            "Titol": "Hangman Game Images and Sounds Version",
            "Versio": "Hangman Game β Versión",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        }
    ];
    var Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == "ca");


  var vidas= 7;
  var punts = 0;
  var Paraula=[];
  var letra=["_" , "_" , "_" , "_" , "_" , "_" , "_"];
  var seconds=0;
  var paraules=["cordes", "fetge" , "forca" , "jutges" , "jutjat" , "mengen" ,
      "penjat", "quinta" , "setze"];
  var pistes=["A la quinta forca" , "A ca un penjat, no hi anomenis cordes" , 
      "Setze jutges d'un jutjat mengen fetge d'un penjat"];
  var paraulespistes=[1 , 2 , 0 , 2 , 2 , 2 , 1 , 0 , 2];
  var aleatori=Math.floor(Math.random()*paraules.length);
  var paraula=paraules[aleatori];
  var pista=pistes[paraulespistes[aleatori]];
  var endevinades=[];
  for (var i = 0; i < paraula.length; i++){
      endevinades[i]="_";
  } 
alert(paraula);
function timer() {
seconds = seconds + 1;
document.getElementById("counter").innerHTML = seconds;
}
setInterval(timer, 1000);
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
      window.alert("Has fallat!");
      letra[7 - vidas]=lletra;
      vidas= vidas-1;
      document.getElementById("Vides").innerHTML=vidas;
      document.getElementById("Lletres").innerHTML=letra;
      document.body.style.backgroundImage="url('img/Jungle.png')";
      document.getElementById('Fallo').play();
      document.getElementById('tictac').play();
  }
  else if((pos>-1)){
      window.alert("Has encertat!");
      for (var i = pos; i < paraula.length; i++){
      if (paraula[i]==lletra){
      endevinades[i]=lletra;
         }
     }
      document.getElementById("endevinades").innerHTML=endevinades;
      document.getElementById('G2').play();
      document.body.style.backgroundImage="url('img/Desert.png')";
       if(endevinades.indexOf("_") == -1) {
           window.alert("i has guanyat!");
      punts= endevinades.length * vidas* 10 - document.getElementById("counter").innerHTML;
       if (punts < 0){ punts=0; }
      document.getElementById("Puntuacio").innerHTML=" " + punts;
      document.getElementById("A0").hidden=true;
      document.getElementById("A1").hidden=true;
      document.getElementById("A2").hidden=true;
      document.getElementById("A3").hidden=true;
      document.getElementById("A4").hidden=true;
      document.getElementById("A5").hidden=true;
      }
  }
  else{ 
       window.alert("Caràcter incorrecte!");
}
  if ((vidas==0)){
      window.alert("i has perdut!");
      document.getElementById("lletra").disabled=true;
      document.getElementById("Comprovar").disabled=true;
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
    function Pistas(){
     alert(pista);
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
    
    function CanviarIdioma(IdIdioma){
        Idiomas=Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
        document.title=Idioma.Titol;
        document.getElementById("ndevinades").innerHTML=Idioma.Versio;
        document.getElementById("endeinades").placeholder=1;
        document.getElementById("endinades").innerHTML=1;
        document.getElementById("endeinads").innerHTML=1;
        document.getElementById("endinades").innerHTML=1;
        document.getElementById("endenades").innerHTML=1;
        document.getElementById("endenades").innerHTML=1;
        document.getElementById("endnades").innerHTML=1;
    }
    
function SQL(){
        config = {
            locateFile: file => `https://sql.js.org/dist/${file}`
            // locateFile: filename => `https://unpkg.com/sql.js@1.6.2/dist/${filename}`
        };
        // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
        // We must specify this locateFile function if we are loading a wasm file from anywhere other than the
        // current html page's folder.
        alasql('ATTACH SQLITE DATABASE penjat("DBB/Penjat.db"); USE penjat; \n\
                SELECT * FROM TblTextosGUI;',
        //     [], function(idiomes) {Print_Data(idiomes = idiomes.pop());}
            [], function(idiomes) {Idiomes = idiomes.pop();}
        );
        if (Idiomes.length == 0) {Idiomes = Idiomes_dft;};

   }
