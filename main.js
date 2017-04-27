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
  span.setAttribute("class","tool");
  span.innerHTML = mensaje;
  return span;
}

function validarForm(){
  var c = 0;
  if(name.value != "" && name.value.match(testName)){
    c++;
  }else{
    name.focus();
  }
  if(fullName.value != "" && fullName.value.match(testName)){
    c++;
  }else{ fullName.focus();}
  if()
