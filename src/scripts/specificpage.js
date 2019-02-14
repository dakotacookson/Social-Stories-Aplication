import logout from "./logout"
import Storylist2 from "./Story/StoryList/listitorator"
import StoryForm from "./Story/StoryForm"
import serchbar from "./Story/StoryList/searchbar"
let userpage = {
   specificuser(){
const Story4 = document.querySelector(".Story4")
const Story2 = document.querySelector(".Story2")
const Story3 = document.querySelector(".Story3")
const Header2 = document.querySelector(".header2")
const logout2 = document.querySelector(".output__logout")
const loginPage = document.querySelector(".output__login");
loginPage.style.display = "none";
document.querySelector(".stories").style.display = "block";
document.querySelector(".header123").style.display = "flex";
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


var egg = new Egg();
egg.addCode("up,up,down,down,left,right,left,right,b,a", function() {
    jQuery('#egggif').fadeIn(500, function() {
      window.setTimeout(function() { jQuery('#egggif').hide(); }, 5000);
    });
  })
  .addHook(function(){
  let  stylesheet = document.querySelector(".stylesheet")
  stylesheet.setAttribute("href" , "styles/Alt.CSS")
alert("Unlocked Metal Mode")
  }).listen();

  var egg2 = new Egg();
egg2.addCode("S,E,A,S,H,I,P", function() {
    jQuery('#egggif2').fadeIn(500, function() {
      window.setTimeout(function() { jQuery('#egggif2').hide(); }, 5000);
    });
  })
  .addHook(function(){
alert("Unlocked Sea Sick Mode")
let  stylesheet = document.querySelector(".stylesheet")
stylesheet.setAttribute("href" , "styles/maincssrotate.css")
  }).listen();


  var egg3 = new Egg();
  egg3.addCode("T,A,R,D,I,S", function() {
      jQuery('#egggif3').fadeIn(500, function() {
        window.setTimeout(function() { jQuery('#egggif3').hide(); }, 5000);
      });
    })
    .addHook(function(){
  alert("Im the Doctor")
  let  stylesheet = document.querySelector(".stylesheet")
  stylesheet.setAttribute("href" , "styles/maincsstardis.css")

    }).listen();
   }
}
export default userpage