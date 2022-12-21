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

const handleForm = event => {
  event.preventDefault()
  let form = document.getElementsByClassName("passForm")
  const passLength = form[0][0].value
  const uppercase = form[0][1].checked
  const lowercase = form[0][2].checked
  const numbers = form[0][3].checked
  const specialCharacters = form[0][4].checked

  if(passLength < 8 || passLength > 128) {
    alert("Password Length must be between 8 - 128 characters")
  }

  if(uppercase, lowercase, numbers, specialCharacters === false){
    alert("Please check one of the checkboxes to continue")
  }

}

const writePassword = formData => {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

