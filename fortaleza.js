function calcFortaleza() {
    let contrasenia=document.getElementById("fpass").value

    let cantCar = contrasenia.length

    let fort = ""
    if (cantCar>=0 && cantCar<=4){
        fort = "Baja"
        color = "red"
    }
    else if (cantCar>=5 && cantCar<=8){
        fort = "Media"
        color = "yellow"
    } else {
        fort = "Alta"
        color = "green"
    }

    document.getElementById("fort").innerHTML=fort
    document.getElementById("fort").style.backgroundColor=color
}
