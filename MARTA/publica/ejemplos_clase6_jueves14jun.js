// usuarios
var usuarios = [
  {
    nombre: "Marta",
    tipo: "admin"
  },
  {
    nombre: "Luis",
    tipo: "usuario"
  },
  {
    nombre: "Eva",
    tipo: "admin"
  },
  {
    nombre: "Gema",
    tipo: "usuario"
  },
];

//empiezo en 0
//y mientras que i sea, esto es, length es que hagas el bucle por el total de usuarios
// var usuario = el usuario en esa vuelta [i]
// si el usario en el que estoy ahora mismo es tipo="usuario", salta al siguiente porque yo quiero los Administrador

for  (var i=0; i < usuarios.length; i++) {
  var usuario = usuarios[i];
  if( usuario.tipo === "usuario") {
    continue;
  }
  console.log ("Usuario Administrador:", usuario.nombre)
}


//Si quiero preguntarle cual es el primer administrador

for  (var i=0; i < usuarios.length; i++) {
  var usuario = usuarios[i];

  if( usuario.tipo === "admin") {
    console.log ("Primer Administrador:", usuario.nombre)
    break;
  }

}

// con estructura forEach

usuarios.forEach(function(usuario)){
  if(usuario.tipo === "admin") {
    console.log ("Usuario Administrador:", usuario.nombre)
  }
}
