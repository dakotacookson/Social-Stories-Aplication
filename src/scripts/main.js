
import login from "./login"
import registrationForm from "./register"
import logout from "./logout"
import Storylist from "./Story/Storylist"
import Storylist2 from "./Story/StoryList/StoryList2"
import StoryForm from "./Story/StoryForm"
import serchbar from "./Story/StoryList/searchbar1"
if (sessionStorage.userId === undefined) {
  login.createAndAppendLoginInput();
  registrationForm.createAndAppendRegistrationForm();
}
if (sessionStorage.userId >= 1) {

  logout.createAndAppendLogout();
  let currentUsername = sessionStorage.getItem("userName")
  let userheader = document.querySelector(".header2")
  userheader.innerHTML = "Welcome " + currentUsername
  serchbar.searchbar2()
  Storylist.listStory()
  Storylist2.listStory2()
  StoryForm.StoryFormBuilder()
}
