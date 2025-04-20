// Funktion för att generera en array med 10 unika slumpmässiga heltal mellan 1 och 100
function sortedArray() {
  const numbers = [];

  // Generate 10 unique random numbers
  while (numbers.length < 10) {
    const num = Math.floor(Math.random() * 100) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }

  // Sort the numbers in ascending order
  const unsorted = numbers;
  // Sort numeric values with sort and comparison function
  const sorted = [...numbers].sort((a, b) => a - b);

  // Display the unsorted and sorted numbers
  document.getElementById("unsorted").textContent = unsorted.join(", ");
  document.getElementById("sorted").textContent = sorted.join(", ");
}

// Funktion för att validera formuläret med JavaScript
function validateForm() {
  const username = document.getElementById("jsUsername").value.trim();
  const password = document.getElementById("jsPassword").value;
  const confirmPassword = document.getElementById("jsConfirmPassword").value;
  const email = document.getElementById("jsEmail").value.trim();
  const terms = document.getElementById("jsTerms").checked;
  const error = document.getElementById("jsError");

  error.textContent = "";

  if (username === "") {
    error.textContent = "Användarnamn krävs.";
    return false;
  }
  if (password.length < 6) {
    error.textContent = "Lösenordet måste vara minst 6 tecken.";
    return false;
  }

  if (password !== confirmPassword) {
    error.textContent = "Lösenorden matchar inte.";
    return false;
  }

  if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    error.textContent = "Ogiltig e-postadress.";
    return false;
  }

  if (!terms) {
    error.textContent = "Du måste godkänna villkoren.";
    return false;
  }

  return true;
}