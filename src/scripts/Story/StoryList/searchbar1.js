import Storylist4 from "./stories3list"
import API from "../../api"
const serchbar = {
  searchbar2() {
    let storycontainer = document.querySelector(".Story3")
    const searchtable = document.createElement("Input")
    searchtable.textContent = "Add Search";
    searchtable.setAttribute("Id", "Searchbar")
    searchtable.placeholder = "Search";
    let searchtable2 = document.createElement("button")
    searchtable2.textContent = "Search"
    searchtable2.setAttribute("Class", "SearchButton")
    storycontainer.append(searchtable)
    storycontainer.append(searchtable2)
    searchtable2.addEventListener("click", () => {
      document.querySelector(".Story2").innerHTML = " "
      let searchbutton3 = document.getElementById("Searchbar").value
      API.getData2(searchbutton3)
      if (searchbutton3 != " ") {
        searchbutton3 = " ";
        Storylist4.listStory4()
      }
    })
  }
}
export default serchbar