var date = document.getElementById("date");
var password = document.getElementById("password");
var confirmP = document.getElementById("confirmP");
var enviar = document.getElementById("enviar");
var c = 0;
enviar.addEventListener("click", function(e){
//  e.preventDefault();
  if(password.value == confirmP.value){
    c++;
  }else{
    alert("Confirmar contraseña no es valido");
    confirmP.focus();
  }

  console.log(date.value);

});
