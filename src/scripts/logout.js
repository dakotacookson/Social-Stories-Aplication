
import login from "./login"
const logout = {

  createAndAppendLogout() {

    const outputElement = document.querySelector(".output__logout");

    let logoutButton = document.createElement("button")
    logoutButton.textContent = "Log Out"
    logoutButton.setAttribute("class", "logout")

    logoutButton.addEventListener("click", this.handleLogout)
    outputElement.appendChild(logoutButton);
  },

  handleLogout() {
    document.querySelector(".header123").style.display = "none";
    document.querySelector(".stories").innerHTML = " "
    document.querySelector(".stories").style.display = "none";

    sessionStorage.clear();
    login.replaceWithLoginForm()
  }
}


export default logout