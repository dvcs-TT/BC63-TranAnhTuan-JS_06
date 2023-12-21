function Factorial() {
  //input
  var nInt = Number(document.getElementById("nInteger").value);
  //output
  var Factorial = 1;
  //process
  var Factor = 1;
  while (Factor <= nInt) {
    //Factorial = Fatorial-value * Factor-value
    Factorial *= Factor;
    Factor++;
  }

  // reset the input value
  document.getElementById("nInteger").value = "";

  // display
  document.getElementById("divResult3").innerHTML = Factorial;
}
