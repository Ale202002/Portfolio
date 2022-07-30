//funcion que aplica estilo al menu 

function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    opciones[6].className = "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className = "";
}


//funcion que muestre el menu resposive

function resposiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";

    } else {
        x.className = ""
    }
}

//Aplicar animacion a la barra de formacion para que detecte el scrolling

window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion en la barra

function efectoHabilidades(){
    var formacion = document.getElementById("formacion");
    var distancia_formacion = window.innerHeight - formacion.getBoundingClientRect().top;
    if(distancia_formacion >= 300){
        document.getElementById("Alura-latam").classList.add("barra-progreso");
    }
}


