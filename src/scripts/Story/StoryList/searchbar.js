import Storylist4 from "./searchlistresults"
import API from "../../api"
const serchbar = {
  searchbar2() {
    let storycontainer = document.querySelector(".Story3")
    const searchinput = document.createElement("Input")
    searchinput.textContent = "Add Search";
    searchinput.setAttribute("Id", "Searchbar")
    searchinput.placeholder = "Search";
    let searchbutton = document.createElement("button")
    searchbutton.textContent = "Search"
    searchbutton.setAttribute("Class", "SearchButton")
    storycontainer.append(searchinput)
    storycontainer.append(searchbutton)
    searchbutton.addEventListener("click", () => {
      document.querySelector(".Story2").innerHTML = " "
      let searchbarqueery = document.getElementById("Searchbar").value
      API.getData2(searchbarqueery)
      if (searchbarqueery != " ") {
        searchbarqueery = " ";
        Storylist4.listStory4()
      }
    })
  }
}
export default serchbar