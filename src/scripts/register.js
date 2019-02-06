import API from "./api"
import login from "./login"
// Declare variables to hold user input
const userNameInput = document.createElement("input")
const userPasswordInput = document.createElement("input")
const userEmailInput = document.createElement("input")

const createNewUser = document.createElement("button")
const backbutton = document.createElement("button")

const registrationForm = {

    createAndAppendRegistrationForm () {

    const registerContainer = document.querySelector(".output__registration")
    const registerHeader = document.createElement("h3")
    registerContainer.appendChild(registerHeader)
    registerHeader.textContent="Register User"



    userNameInput.type = "text"
    userPasswordInput.type = "text"
    userEmailInput.type = "text"


    userNameInput.placeholder = "Input UserName"
    userPasswordInput.placeholder = "Create Password"
    userEmailInput.placeholder = "Input Email Address"
    createNewUser.textContent = "Register User"
    backbutton.textContent = "Back To Login"


    registerContainer.appendChild(userNameInput)
    registerContainer.appendChild(userPasswordInput)
    registerContainer.appendChild(userEmailInput)
    registerContainer.appendChild(createNewUser)
    registerContainer.appendChild(backbutton)


    createNewUser.addEventListener("click", this.registerUser)
    backbutton.addEventListener("click", this.GoBack)
    },

    registerUser () {
        const userNameValue = userNameInput.value;
        const userPasswordValue = userPasswordInput.value;
        const userEmailValue = userEmailInput.value;

        let newUserToSave = {
            userName: userNameValue,
            password: userPasswordValue,
            email: userEmailValue
          }

        API.postNewData("users",newUserToSave)

        login.replaceWithLoginForm();
    },
    GoBack () {
        login.replaceWithLoginForm();

    }
}
  export default registrationForm
