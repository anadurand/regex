var name = document.getElementById("name");
var lastName = document.getElementById("lastName");
var dni = document.getElementById("dni");
var date = document.getElementById("date");
var cellPhone = document.getElementById("cellPhone");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var confirmP = document.getElementById("confirmP");
var comment = document.getElementById("comment");
var terms = document.getElementById("check");
var textName = "/[A-Z]{1,}[a-z]+/";

function createTooltip(mensaje){
  var span = document.createElement("span");
  span.innerHTML = mensaje;
  return span;
}

//Remueve los tooltip
function quitTooltip(nodo) {
  if(nodo.nextElementSibling != null){
    nodo.parentNode.removeChild(nodo.nextSibling);
  }
}
//cambia el texto del tooltip
function changeMessage(nodo,text){
  if(nodo.nextElementSibling == null){
    nodo.parentNode.appendChild(createTooltip(text));
  }else{
    nodo.nextElementSibling.textContent = text;

  }
}
function validarForm(){
  var c = 0;


}

function validarFullName(nodo){
  
  if(nodo.value == ""){
    if(nodo.nextElementSibling == null){
      divBox[0].appendChild(createTooltip("Falta ingresar su nombre"));
    }

  }else{
    if(!nodo.value.match(testName)){
      mens = "La primera letra debe ser mayúscula";
      change(name,mens);
      nodo.focus();
    }else{
      quit(name);

    }
  }

}
