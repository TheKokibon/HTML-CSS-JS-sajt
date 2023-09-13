

$("#dugme-potvrdi").click(function(e) {

  e.preventDefault();

  tekstIme = "Ime: " + document.getElementById("fname").value +'\n';
  tekstPrezime = "Prezime: " + document.getElementById("lname").value + '\n';
  tekstEmail = "Email: " + document.getElementById("email").value + '\n';
  tekstEdukacija = "Edukacija: " + document.getElementById("Edukacija").value + '\n';
  tekstDatumRodjenja = "Datum rodjenja: " + document.getElementById("birthday").value + '\n';

  instrument1 = document.getElementById("Gitara");
  instrument2 = document.getElementById("Bubanj");
  tekstInstrument = "Instrument za studenta je: ";

  if(instrument1.checked == true && instrument2.checked == true){
    tekstInstrument = tekstInstrument + "Gitara i Bubanj";
  }
  else if(instrument1.checked==true){

    tekstInstrument = tekstInstrument + "Gitara";
  }else if(instrument2.checked == true){
    tekstInstrument = tekstInstrument + "Bubanj";
  }else{
    tekstInstrument = "Student ne zeli da uci ova dva instrumenta";
  }

  tekstPopUp = tekstIme + tekstPrezime + tekstEmail + tekstEdukacija + tekstDatumRodjenja + tekstInstrument;
  alert(tekstPopUp);

})
