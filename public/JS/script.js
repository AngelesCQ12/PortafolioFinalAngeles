let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills =
      window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("cplus");
      habilidades[1].classList.add("cshare");
      habilidades[2].classList.add("htmlcss");
      habilidades[3].classList.add("javascript");
      habilidades[4].classList.add("Git");
      habilidades[5].classList.add("Figma");
      habilidades[6].classList.add("Packet-Tracer");
    }
  }