// Generate random numbers
function generateRandomNumbers() {
  const numbers = [];
  while (numbers.length < 10) {
    const num = Math.floor(Math.random() * 100) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

// Sort the generated array in ascending order
function sortArray(numbers) {
  return [...numbers].sort((a, b) => a - b);
}


// Generate and sort the array, then display it
function sortedArray() {
  const unsorted = generateRandomNumbers();
  const sorted = sortArray(unsorted);
  document.getElementById("unsorted").textContent = unsorted.join(", ");
  document.getElementById("sorted").textContent = sorted.join(", ");
}

// Funktion to validate form with Javascript
function validateForm() {
  const username = document.getElementById("jsUsername").value.trim();
  const password = document.getElementById("jsPassword").value;
  const confirmPassword = document.getElementById("jsConfirmPassword").value;
  const email = document.getElementById("jsEmail").value.trim();
  const terms = document.getElementById("jsTerms").checked;
  const error = document.getElementById("jsError");

  error.textContent = "";

  // Check if username is enetered
  if (username === "") {
    error.textContent = "Användarnamn krävs.";
    return false;
  }
  // Check if password is atleast 6 chars
  if (password.length < 6) {
    error.textContent = "Lösenordet måste vara minst 6 tecken.";
    return false;
  }
  // check if password matches the prevoisly entered password
  if (password !== confirmPassword) {
    error.textContent = "Lösenorden matchar inte.";
    return false;
  }
  // check if '@' symbol is prenset in email adress and on write possition
  if (!email.includes("@")) {
    error.textContent = "Ogiltig e-postadress. Måste includera '@' tecken.";
    return false;
  } else if (email.startsWith("@")) {
    error.textContent = "Ogiltig e-postadress. Kan inte börja med '@' tecken.";
    return false;
  } else if (email.endsWith("@")) {
    error.textContent = "Ogiltig e-postadress. Kan inte avsluta med '@' tecken.";
    return false;
  }
  // Check if terms are accepted before registration
  if (!terms) {
    error.textContent = "Du måste godkänna villkoren.";
    return false;
  }

  return true;
}
