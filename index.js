document.getElementById("player").addEventListener("mouseover", sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 30;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Points: <b>" + puntos +  "/" + necesarios + "  </b>";
    randNum = Math.round(Math.random()*500);
    randNum2 = Math.round(Math.random()*500);
    document.getElementById("player").style.marginTop =randNum + "px";
    document.getElementById("player").style.marginLeft =randNum2 + "px";
    if(puntos == 30) {
        alert("😄 WON!" + "\n" + "Wow, how fast you are.");
    }
}

function restarTiempo() {
    tiempo--
    document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Time: " +tiempo;
    if (tiempo == 0) {
        alert("You didn't make it, your time is up.");
        tiempo = 0;
        puntos = 0;
    } 
}

setInterval(restarTiempo,1000);