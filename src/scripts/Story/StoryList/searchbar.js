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
    let br = document.createElement("br")
    searchbutton.setAttribute("Class", "SearchButton")
    searchbutton.textContent = "Search"
    storycontainer.append(searchinput)
    storycontainer.append(br)
    storycontainer.append(searchbutton)
    searchbutton.addEventListener("click", () => {
      document.querySelector(".Story2").innerHTML = " "
      let searchbarqueery = document.getElementById("Searchbar").value
      API.getData2(searchbarqueery)
      //a form of validation for the fetch call so it Will not  break
      if (searchbarqueery != " ") {
        searchbarqueery = " ";
        Storylist4.listStory4()
      }
    })
  }
}
export default serchbar