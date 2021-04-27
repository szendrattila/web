function szamol() {
    var letszam = document.getElementById("letszam").value;
    var ejszaka = document.getElementById("ejszaka").value;
    var orszag = document.getElementById("orszag").value;
    var fizetendo;

    //--számolás--
      fizetendo= letszam * ejszaka;
    //------------
    document.getElementById('eredmeny').value = fizetendo+" Ft";
    
}