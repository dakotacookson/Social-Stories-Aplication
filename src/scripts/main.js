import logout from "./logout"
import Storylist2 from "./Story/StoryList/StoryList2"
import StoryForm from "./Story/StoryForm"
import serchbar from "./Story/StoryList/searchbar1"
import login from "./login"
import registrationForm from "./register"
if (sessionStorage.userId === undefined) {
  login.createAndAppendLoginInput();
  registrationForm.createAndAppendRegistrationForm();
}
if (sessionStorage.userId >= 1) {
  const Story4 = document.querySelector(".Story4")
  const Story2 = document.querySelector(".Story2")
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
  let currentUsername = sessionStorage.getItem("userName")
  let userheader = document.querySelector(".header2")
  userheader.innerHTML = "Welcome " + currentUsername
  Header2.style.display = "block";
  logout2.innerHTML = " "
  logout.createAndAppendLogout();
  logout2.style.display = "block";
}