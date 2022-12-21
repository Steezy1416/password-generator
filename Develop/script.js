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

  let formData = [
    {name: "uppercase",
     value: uppercase,
     characters:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {name: "lowercase",
     value: lowercase,
     characters: "abcdefghijklmnopqrstuvwxyz"
    },
    {name: "numbers",
     value: numbers,
     characters: "0123456789"
    },
    {name: "specialCharacters",
     value: specialCharacters,
     characters: "!@#$%^&*()_+-=?/<>.,}{|"
    }
  ]
  
  formData = formData.filter(element => element.value === true)

  if(passLength < 8 || passLength > 128) {
    alert("Password Length must be between 8 - 128 characters")
    return
  }

  if(formData.length === 0){
    alert("Please check one of the checkboxes to continue")
    return
  }

  formData.push({name: "passLength", value: passLength})

  writePassword(formData)

}

const writePassword = formData => {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

