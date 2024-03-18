//Objeto con las equivalencias de las vocales a encriptar
let sustituciones = {
    'e': "enter",
    'i': "imes",
    'a': "ai",
    'o': "ober",
    'u': "ufat"
  };
  
  const copybutton = document.getElementById("BotondeCopy");
  let textoFinale = document.getElementById("textofinal");
  copybutton.style.display="none";

  function asignarTextoElemento(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;

}
  function agarrartexto() {

    // Obtener el valor del input de HTML
    let texto = document.getElementById("cuadrodeentrada").value;
    console.log(texto);
    textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
      // Obtener cada letra del texto
      let letra = texto[i];
      if (sustituciones[letra]) {
        // Si la letra es una vocal, reemplazarla por la palabra correspondiente
        textoEncriptado += sustituciones[letra];
      } else {
        // Si no, dejar la letra como está
        textoEncriptado += letra;
      }
    }

  
    console.log(textoEncriptado);
    document.getElementById("textofinal").innerHTML = textoEncriptado;
    copybutton.style.display ="block";
    return textoEncriptado;
  }
  
  function desencriptar() {
    // Crear una variable para almacenar el resultado
    let texto = document.getElementById("cuadrodeentrada").value;
    console.log(texto);
    // Declarar la variable descryp con let
    let textodescifrado = "";
    for(let i = 0; i < texto.length; i++){
     //usar el in para la condicion con CharAT
      if(texto.charAt(i) in sustituciones){
        textodescifrado += texto.charAt(i)
        // Usar la notación de corchetes en lugar del método get
        i += ((sustituciones[texto.charAt(i)]).length)-1
      }else{
        textodescifrado += texto.charAt(i)
      }
      console.log(textodescifrado);
    }
    // Devolver el resultado
    document.getElementById("textofinal").innerHTML = textodescifrado;
    copybutton.style.display ="block";
    return textodescifrado;
  }
  //Funcion para borrar los caracteres que estan en la entrada
  function borrartexto (){
    let textoarea = document.getElementById('cuadrodeentrada').value = '';
   
  
  }
  
    //Funciones de evento para los logos
  function cambiarimagen(url){

    let imagen = document.getElementById("logo");

    imagen.src = url;
  }

  function cambiarimagenCopy(url){

    let imagen = document.getElementById("copylogo");

    imagen.src = url;
  }
  //Boton de copiar 
  copybutton.addEventListener("click", function(){
    navigator.clipboard.writeText(textoFinale.textContent);
    textoFinale.textContent = textoFinale.dataset.textodefault;
    borrartexto();
    
  })
