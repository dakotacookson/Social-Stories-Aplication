import Storylist4 from "./stories3list"
import API from "../../api"
const serchbar = {
    searchbar2(){
let storycontainer = document.querySelector(".Story2")
let storycontainer3 = document.querySelector(".Story3")

const searchtable = document.createElement("Input")
searchtable.textContent = "Add Search";
searchtable.setAttribute("Id", "Searchbar")
searchtable.placeholder = "Searchable";
let searchtable2 = document.createElement("button")
searchtable2.textContent = "Search"
searchtable2.setAttribute("Class" , "SearchButton")
storycontainer3.append(searchtable)
storycontainer3.append(searchtable2)
searchtable2.addEventListener("click", () => {
  storycontainer.innerHTML = " "
  let searchbutton3 = document.getElementById("Searchbar").value
  console.log("Hello" , searchbutton3)
  API.getData2(searchbutton3)
  if (searchbutton3 != " ") {
    searchbutton3 = " ";
    Storylist4.listStory4()
  }
})
    }
}

export default serchbar