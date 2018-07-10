

function peticionAjax("http://airemad.com/api/v1/pollen", callback) {
       var xmlHttp = new XMLHttpRequest();

       xmlHttp.onreadystatechange = function() {

           if (xmlHttp.readyState === 4) {
               var respuestaCrudo = xmlHttp.responseText;
               var respuesta = JSON.parse(respuestaCrudo);
               var codigo_de_estado = xmlHttp.status;

               if(codigo_de_estado === 200) {
                   console.log(respuesta);
                   callback(respuesta);
               } else {
                   console.error("ERROR!", codigo_de_estado);
               }

           }

       };

       xmlHttp.open("GET", url, true);
       xmlHttp.send();
   }


   document.body.addEventListener("click", function(){
       document.body.innerHTML="Cargando....";
       peticionAjax("http://airemad.com/api/v1/pollen.json", function (datos){

           console.log("Tenemos:", datos.length); 
           var htmlFinal = "<ul>";
           datos.forEach(function(elemento, vuelta){
               htmlFinal += "<li>"+elemento.longTitle+" ("+elemento.popularity+")</li>";
               console.log(vuelta+":", htmlFinal);
               //elemento.longTitle
               //elemento.popularity
           });
           htmlFinal += "</ul>";
           console.log("Total:", htmlFinal);
           document.body.innerHTML= htmlFinal;

       });

   })

   document.body.innerHTML="¡Esto es el texto por defecto!"