import API from "./api"
import userpage from "./specificpage"
import MD5 from "./hash"
import registrationForm from "./register"

const userNameInput = document.createElement("input"); // creates an input field for username
const passwordInput = document.createElement("input");// creates an input field for password
const registrationPage = document.querySelector(".output__registration") // grabs a class on the dom
const loginPage = document.querySelector(".output__login"); // grabs a class on the dom
registrationPage.style.display = "none"; // changes the  display style of the element to none

const login = {
    createAndAppendLoginInput() {
         // creates an h3 tag to use as the header
        const LoginHeader = document.createElement("h3")
         // adds text to the h3 tag
        LoginHeader.textContent="Log In User"
         // set the type of the username input field to text
        userNameInput.type = "text";
         // adds a place holder of text for the user so they can see an example of what to type in
        userNameInput.placeholder = "username";
        // sets the type of input to password thusly obfiscating the password from view
        passwordInput.type = "password";
         // adds a place holder of text for the user so they can see an example of what to type in
        passwordInput.placeholder = "password";
        // appends item to loginpage wich is a class on the dom
        loginPage.appendChild(LoginHeader)
        // appends item to loginpage wich is a class on the dom
        loginPage.appendChild(userNameInput);
         // appends item to loginpage wich is a class on the dom
        loginPage.appendChild(passwordInput);
         //creates a button for login
        const loginButton = document.createElement("button");
        // adds text to the button for login
        loginButton.textContent = ("login");
        //creates a button for register
        const registerButton = document.createElement("button");
        // adds text to the button for register
        registerButton.textContent = ("register");
        // appends item to loginpage wich is a class on the dom
        loginPage.appendChild(loginButton);
        // appends item to loginpage wich is a class on the dom
        loginPage.appendChild(registerButton);
         //  event listiner that directly leads to a function
        loginButton.addEventListener("click", this.getUserData);
        //  event listiner that directly leads to a function
        registerButton.addEventListener("click", this.replaceWithRegistrationForm);
},  //function called on click event loginButton.addEventListener("click"
    getUserData() {
        // sets a variable to the value of the username input field
        const username = userNameInput.value;
        // sets a variable to the value of the password input field
        const password = passwordInput.value;
        // grabs all the data and passes in users as the paramater
        API.getData("users")
            // once it has al the users
            .then(allUsers => {
                 // set a variable to 1
                let usersProcessed = 1;
                // for each user
                allUsers.forEach(user => {

                    // set a variable equal to a hash of the  user name  and  password in conjuction with the MD5 function
                    let passhash = MD5(password + MD5(username));
                         // checks if the username and password match what is in the databse
                    if (username === user.userName && passhash === user.password) {
                        // if it is it sets the user id of the matching user id ionto session storage
                        sessionStorage.setItem("userId", user.id)
                        //then sets the var userid to the userid in session storage we just made
                        let userId = sessionStorage.getItem("userId");
                        //then sets session storage user name to the username in the database
                        sessionStorage.setItem("userName", user.userName)
                        //the loads the specific user page based on the user id paramater
                        loadUserSpecificPage(userId);
                         // checks to see if the variable useres proccesed wich starts at 1 curentl equals the lentgh of the all users if it doesnt then
                    } else if (usersProcessed === allUsers.length) {
                        alert("Username/password invalid. If new user, please register.")
                        console.log(password)
                    } else {
                     // it procededs to incrimente until one of the above 2 if else or if statments are matched
                        usersProcessed++
                    };
                    function loadUserSpecificPage() {
                        //runs the user specific function
                        userpage.specificuser()
                    }
                })
            })

    },
    replaceWithRegistrationForm() {
        //grabs the  class on the dom
        const registrationPage = document.querySelector(".output__registration")
        //sets the element's inner html to an empty string
        registrationPage.innerHTML = " "
        //then runs the create regestration form function
        registrationForm.createAndAppendRegistrationForm()
        //sets the display style of the reg form to block
        registrationPage.style.display = "block";
        //grabs the  class on the dom
        const loginPage = document.querySelector(".output__login");
         //sets the display style of the login form to none
        loginPage.style.display = "none";

    },
    replaceWithLoginForm() {
        //grabs the  class on the dom
        const loginPage = document.querySelector(".output__login");
        // sets the inner html of the element to an empty string
        loginPage.innerHTML = " "
        // creates the login form
        login.createAndAppendLoginInput()
        //grabs the  class on the dom
        const registrationPage = document.querySelector(".output__registration")

//sets the display style of the login form to Block
loginPage.style.display = "block";
//sets the display style of the reg form to None
registrationPage.style.display = "none";
//grabs the  class on the dom
const Story4 = document.querySelector(".Story4")
//grabs the  class on the dom
const Header2 = document.querySelector(".header2")
//grabs the  class on the dom
const logout = document.querySelector(".output__logout")
//grabs the  class on the dom
document.querySelector(".stories").innerHTML = " "
//sets the display style of the element  to None
Story4.style.display = "none";
//sets the display style of the element  to None
Header2.style.display = "none";
//sets the display style of the element  to None
 logout.style.display = "none";
    },

}



export default login