import API from "./api"
import Storylist2 from "./Story/StoryList/StoryList2"
import serchbar from "./Story/StoryList/searchbar1"
import StoryForm from "./Story/StoryForm"
import logout from "./logout"

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
                    if (username === user.userName && password === user.password) {
                        sessionStorage.setItem('userId', user.id)
                        let userId = sessionStorage.getItem('userId');
                        sessionStorage.setItem('userName', user.userName)
                        loadUserSpecificPage(userId);
                    } else if (usersProcessed === allUsers.length) {
                        alert("Username/password invalid. If new user, please register.")
                    } else {
                        usersProcessed++
                    };

                    function loadUserSpecificPage(userId) {
                        const Story4 = document.querySelector(".Story4")
                        const Story2 = document.querySelector(".Story2")
                        const Story3 = document.querySelector(".stories")
                        const Header2 = document.querySelector(".header2")
                        const logout2 = document.querySelector(".output__logout")
                        const loginPage = document.querySelector(".output__login");
                        loginPage.style.display = "none";
                        // loginPage.style.display = "none";
                        Story2.innerHTML = " "
                        Storylist2.listStory2()
                        serchbar.searchbar2()
                        Story4.style.display = "flex";
                        StoryForm.StoryFormBuilder()
                        document.querySelector(".Storyform").style.display = "block";
                        let currentUsername = sessionStorage.getItem("userName")
                        let userheader = document.querySelector(".header2")
                        userheader.innerHTML = "Welcome " + currentUsername
                        Header2.style.display = "block";
                        logout2.innerHTML = " "
                        logout.createAndAppendLogout();
                        logout2.style.display = "block";
                    }
                })
            })

    },
    replaceWithRegistrationForm() {
        console.log("testing");
        const registrationPage = document.querySelector(".output__registration")
        const loginPage = document.querySelector(".output__login");
        loginPage.style.display = "none";
        registrationPage.style.display = "block";
        document.querySelector(".stories").innerHTML = " "

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