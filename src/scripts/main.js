import login from "./login"
import registrationForm from "./register"
import userpage from "./specificpage"
if (sessionStorage.userId === undefined) {
  login.createAndAppendLoginInput();
  registrationForm.createAndAppendRegistrationForm();
  document.querySelector(".stories").style.display = "none";
  document.querySelector(".output__logout").style.display = "none";
}
if (sessionStorage.userId >= 1) {
  userpage.specificuser()
}