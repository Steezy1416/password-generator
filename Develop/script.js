let modal = document.querySelector(".modal")
let card = document.querySelector(".card")

//opens modal
const openModal = () => {
  card.classList.add("hide")
  modal.classList.remove("hide")
}

//closes modal
const closeModal = () => {
  modal.classList.add("hide")
  card.classList.remove("hide")
}

const handleForm = event => {
  event.preventDefault()
  let form = document.getElementsByClassName("passForm")
  //gets all the information in the form
  const passLength = form[0][0].value
  const uppercase = form[0][1].checked
  const lowercase = form[0][2].checked
  const numbers = form[0][3].checked
  const specialCharacters = form[0][4].checked

  //stores data inside an object
  let formData = [
    {
      name: "uppercase",
      value: uppercase,
      characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
      name: "lowercase",
      value: lowercase,
      characters: "abcdefghijklmnopqrstuvwxyz"
    },
    {
      name: "numbers",
      value: numbers,
      characters: "0123456789"
    },
    {
      name: "specialCharacters",
      value: specialCharacters,
      characters: "!@#$%^&*()_+-=?/<>.,}{|"
    }
  ]

  //filters out the data that is false
  formData = formData.filter(element => element.value === true)

  if (passLength < 8 || passLength > 128) {
    alert("Password Length must be between 8 - 128 characters")
    return
  }

  //if all data is false user must select something
  if (formData.length === 0) {
    alert("Please check one of the checkboxes to continue")
    return
  }

  //passes the object and password length into function that creates the password
  writePassword(formData, passLength)
  form[0].reset()
  closeModal()

}

const writePassword = (formData, passLength) => {

  let password = ''

  // function that calls itself and randomly selects a character from its character list until the length matches the password length passed
  const generatePassword = () => {
    if (password.length !== parseInt(passLength)) {
      formData.forEach(element => {
        if (password.length === parseInt(passLength)) {
          return
        }
        const letterIndex = Math.floor(Math.random() * element.characters.length) + 0
        password += element.characters[letterIndex]

      });
      generatePassword()
    }
    else {
      return
    }
  }

  generatePassword()

  //splits password in half then concatinates the 2nd half with the 1st half
  let randomPassword = password.split("")

  const half = Math.ceil(randomPassword.length / 2)
  const oneHalf = randomPassword.slice(0, half).join("")
  const secondHalf = randomPassword.slice(half).join("")
  randomPassword = secondHalf + oneHalf

  //displays the password on the page
  var passwordText = document.querySelector("#password");
  passwordText.value = randomPassword;
}
