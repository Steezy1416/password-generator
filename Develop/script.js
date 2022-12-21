let modal = document.querySelector(".modal")
let card = document.querySelector(".card")

const openModal = () => {
  card.classList.add("hide")
  modal.classList.remove("hide")
}

const closeModal = () => {
  modal.classList.add("hide")
  card.classList.remove("hide")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

