document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("generate-password");
  const passwordList = document.getElementById("password-list");

  button.addEventListener("click", function () {
      const password = generatePassword();
      const listItem = document.createElement("li");
      listItem.textContent = password;
      passwordList.appendChild(listItem);
  });
});

function generatePassword() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?/";
  const allChars = upperCase + lowerCase + numbers + specialChars;

  let password = "";

  while (password.length < 8) {
      const char = allChars[Math.floor(Math.random() * allChars.length)];
      
      if (password.length > 1 && password[password.length - 1] === char && password[password.length - 2] === char) {
          continue; // Evita más de 2 caracteres consecutivos iguales
      }
      
      password += char;
  }

  return password;
}