var LuzApagada = true ;



$(".btnInterruptor").click( controlarLuz );

function controlarLuz() {
    $(".btnInterruptor").toggleClass("activado") ;
    if ( LuzApagada ) {
        $("body").css("background-color" , "#ffee00") ;
        LuzApagada = false ;
}
    else {
        $("body").css("background-color" , "#222200") ;
        LuzApagada = true ;
        }
}