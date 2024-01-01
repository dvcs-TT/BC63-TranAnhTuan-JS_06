// Check whether a number is prime or not
function isPrime(aNumber) {
  // Corner cases
  if (aNumber <= 1) return false;
  if (aNumber <= 3) return true;

  // This is checked so that we can skip middle five numbers in below loop
  if (aNumber % 2 == 0 || aNumber % 3 == 0) return false;

  for (let i = 5; i * i <= aNumber; i = i + 6)
    if (n % i == 0 || aNumber % (i + 2) == 0) return false;

  return true;
}

// Display primes
function displayPrimes() {
  var inputNo = document.querySelector("#pInteger").value * 1;
  var primeList = "";
  for (let i = 2; i <= inputNo; i++) {
    if (isPrime(i)) {
      primeList += `${i} `;
    }
  }
  document.querySelector("#divResult5").innerHTML = primeList;
  // Reset the input value
  document.querySelector("#pInteger").value = "";
}
