function datum(){
    let dnes = new Date()
    let den = dnes.getDate()
    let mesic = dnes.getMonth()+1
    let rok =dnes.getFullYear()
    let dny = ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]
    let x = dnes.getDay()

    document.getElementById("datum").innerText="Dnes je " +dny[x]+" "+den+". "+mesic+". "+rok
}

datum()

function cas(){
    let dnes = new Date()
    let hodina = dnes.getHours()
    let minuta = dnes.getMinutes()
    let sekunda = dnes.getSeconds()
    if (minuta<10) 
        minuta= "0" +minuta
    if (sekunda<10) 
        sekunda= "0" +sekunda
    


    document.getElementById("cas").innerText="Je právě "+ hodina+":"+minuta+":"+sekunda
}
cas()