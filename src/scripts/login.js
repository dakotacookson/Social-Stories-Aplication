import API from "./api"
const userNameInput = document.createElement("input");
const passwordInput = document.createElement("input");
const registrationPage = document.querySelector(".output__registration")
const loginPage = document.querySelector(".output__login");
registrationPage.style.display = "none";

const login = {

    createAndAppendLoginInput() {
        const LoginHeader = document.createElement("h3")
        LoginHeader.textContent = "Log In User"
        const outEl = document.querySelector(".output__login");
        userNameInput.type = "text";
        userNameInput.placeholder = "username";
        passwordInput.type = "password";
        passwordInput.placeholder = "password";
        outEl.appendChild(LoginHeader)
        outEl.appendChild(userNameInput);
        outEl.appendChild(passwordInput);

        const loginButton = document.createElement("button");
        loginButton.textContent = ("login");
        const registerButton = document.createElement("button");
        registerButton.textContent = ("register");
        outEl.appendChild(loginButton);
        outEl.appendChild(registerButton);
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
                        console.log(`${user.userName} with user ID ${user.id} is the current user`)
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
                        loginPage.style.display = "none";
                        const dashboard = document.createElement("h2");
                        dashboard.textContent = "Dashboard";

                        location.reload();


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
    },
    replaceWithLoginForm() {
        console.log("LoginForm");
        loginPage.style.display = "block";
        registrationPage.style.display = "none";
    }
}


export default login