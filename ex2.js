function sumValue() {
  // input
  var baseX = document.getElementById("xBase").value * 1;
  var exponentN = document.getElementById("nExponent").value * 1;
  // output
  var output2 = 0;
  // processing
  for (var count = 1; count <= exponentN; count++) {
    output2 += Math.pow(baseX, count);
  }

  // reset the input values
  document.getElementById("xBase").value = "";
  document.getElementById("nExponent").value = "";

  // display
  document.getElementById("divResult2").innerHTML = output2;
}
