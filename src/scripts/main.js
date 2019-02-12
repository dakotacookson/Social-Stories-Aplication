import login from "./login"
import userpage from "./specificpage"
if (sessionStorage.userId === undefined) {
  login.createAndAppendLoginInput();
  document.querySelector(".header123").style.display = "none";
  document.querySelector(".stories").style.display = "none";
  document.querySelector(".output__logout").style.display = "none";
}
if (sessionStorage.userId >= 1) {
  userpage.specificuser()
}