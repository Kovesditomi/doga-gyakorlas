function szamolj(){
    var legal = parseInt(document.getElementById("legalacsonyabb").value);
    var legmag = parseInt(document.getElementById("legmagasabb").value);
    if (legal <= legmag)   
    {
       document.getElementById("kiir").innerHTML = "A mai napi hőingás: " + (legmag - legal) + " °C volt.";
    }
    else
    {
        document.getElementById("kiir").innerHTML = "";
        alert("Hibás számot adtál meg!");
    }
}
