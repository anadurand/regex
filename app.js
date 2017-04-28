var password = document.getElementById("password");
var confirmP = document.getElementById("confirmP");
var enviar = document.getElementById("enviar");

enviar.addEventListener("click", function(){
//  e.preventDefault();
  if(password.value == confirmP.value){
  }else{
    alert("Confirmar contraseña no es valido");
    confirmP.focus();
  }
});
