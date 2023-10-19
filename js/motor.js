var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
  if (estadoLicuadora == "apagada") {
    estadoLicuadora = "encendida";
    hacerBrBr();
    licuadora.classList.add("active");
    /*console.log("is on")*/
  } else {
    estadoLicuadora = "apagada";
    hacerBrBr();
    licuadora.classList.remove("active");
    /*console.log("is off")*/
  }
}

function hacerBrBr() {
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}
