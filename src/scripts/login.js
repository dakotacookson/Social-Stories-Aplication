import API from "./api"
import userpage from "./specificpage"
import MD5 from "./hash"
import registrationForm from "./register"

const userNameInput = document.createElement("input");
const passwordInput = document.createElement("input");
const registrationPage = document.querySelector(".output__registration")
const loginPage = document.querySelector(".output__login");
registrationPage.style.display = "none";

const login = {
    createAndAppendLoginInput() {
        const LoginHeader = document.createElement("h3")
        LoginHeader.textContent="Log In User"
        userNameInput.type = "text";
        userNameInput.placeholder = "username";
        passwordInput.type = "password";
        passwordInput.placeholder = "password";
        loginPage.appendChild(LoginHeader)
        loginPage.appendChild(userNameInput);
        loginPage.appendChild(passwordInput);

        const loginButton = document.createElement("button");
        loginButton.textContent = ("login");
        const registerButton = document.createElement("button");
        registerButton.textContent = ("register");
        loginPage.appendChild(loginButton);
        loginPage.appendChild(registerButton);
        loginButton.addEventListener("click", this.getUserData);
        registerButton.addEventListener("click", this.replaceWithRegistrationForm);
    },
    getUserData() {
        const username = userNameInput.value;
        const password = passwordInput.value;
        API.getData("users")
            .then(allUsers => {
                let usersProcessed = 1;
                allUsers.forEach(user => {

                    let passhash = MD5(password + MD5(username));
                    if (username === user.userName && passhash === user.password) {
                        sessionStorage.setItem("userId", user.id)
                        let userId = sessionStorage.getItem("userId");
                        sessionStorage.setItem("userName", user.userName)
                        loadUserSpecificPage(userId);
                    } else if (usersProcessed === allUsers.length) {
                        alert("Username/password invalid. If new user, please register.")
                        console.log(password)
                    } else {
                        usersProcessed++
                    };
                    function loadUserSpecificPage() {
                        userpage.specificuser()
                    }
                })
            })

    },
    replaceWithRegistrationForm() {
        const registrationPage = document.querySelector(".output__registration")
        registrationPage.innerHTML = " "
        registrationForm.createAndAppendRegistrationForm()
        registrationPage.style.display = "block";
        const loginPage = document.querySelector(".output__login");
        loginPage.style.display = "none";

    },
    replaceWithLoginForm() {
        const loginPage = document.querySelector(".output__login");
        loginPage.innerHTML = " "
        login.createAndAppendLoginInput()
        console.log("LoginForm");
        const registrationPage = document.querySelector(".output__registration")
loginPage.style.display = "block";
registrationPage.style.display = "none";
const Story4 = document.querySelector(".Story4")
const Header2 = document.querySelector(".header2")
const logout = document.querySelector(".output__logout")
document.querySelector(".stories").innerHTML = " "
Story4.style.display = "none";
        Header2.style.display = "none";
        logout.style.display = "none";
    },

}



export default login