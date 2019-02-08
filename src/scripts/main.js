import logout from "./logout"
import Storylist2 from "./Story/StoryList/StoryList2"
import StoryForm from "./Story/StoryForm"
import serchbar from "./Story/StoryList/searchbar1"
import login from "./login"
import registrationForm from "./register"
if (sessionStorage.userId === undefined) {
  login.createAndAppendLoginInput();
  registrationForm.createAndAppendRegistrationForm();
  document.querySelector(".stories").style.display = "none";
  document.querySelector(".output__logout").style.display = "none";
}
if (sessionStorage.userId >= 1) {
  const Story4 = document.querySelector(".Story4")
  const Story2 = document.querySelector(".Story2")
  const Story3 = document.querySelector(".Story3")
  const Header2 = document.querySelector(".header2")
  const logout2 = document.querySelector(".output__logout")
  const loginPage = document.querySelector(".output__login");
  loginPage.style.display = "none";
  Story2.innerHTML = " "
  Story3.innerHTML = " "
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