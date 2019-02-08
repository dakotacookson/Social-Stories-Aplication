import API from "../api"
import Storylist from "./StoryList"
import Storylist2 from "./StoryList/StoryList2"
const StoryEditForm = {
  createAndAppendForm(StoryObj, articleId) {
    let StoryNameField = document.createElement("p")
    let StoryStorysField = document.createElement("p")
    let StoryPicturesField = document.createElement("p")

    let StoryNameLabel = document.createElement("label")
    StoryNameLabel.textContent = "Title"
    let StoryNameInput = document.createElement("input")
    StoryNameInput.setAttribute("Class", "Input1")
    StoryNameInput.value = StoryObj.title

    StoryNameField.appendChild(StoryNameLabel)
    StoryNameField.appendChild(StoryNameInput)

    let StoryPictureLabel = document.createElement("label")
    StoryPictureLabel.textContent = "Picture"
    let StoryPictureInput = document.createElement("input")
    StoryPictureInput.setAttribute("Class", "Input3")
    StoryPictureInput.value = StoryObj.picture

    StoryPicturesField.appendChild(StoryPictureLabel)
    StoryPicturesField.appendChild(StoryPictureInput)


    let StoryStorysLabel = document.createElement("label")
    StoryStorysLabel.textContent = "Story"
    let StoryStorysInput = document.createElement("input")
    StoryStorysInput.setAttribute("Class", "Input2")
    StoryStorysInput.value = StoryObj.Text

    StoryStorysField.appendChild(StoryStorysLabel)
    StoryStorysField.appendChild(StoryStorysInput)


    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"
    updateButton.addEventListener("click", () => {
      const userId = sessionStorage.getItem("userId");
      const currentUserId = JSON.parse(userId);

      let editedStory = {
        title: StoryNameInput.value,
        picture: StoryPictureInput.value,
        Text: StoryStorysInput.value,
        userId: currentUserId
      }

      API.putExistingStory(articleId, editedStory)
        .then(response => {
          document.querySelector(".Story").innerHTML = " "
          Storylist.listStory();
          document.querySelector(".Story2").innerHTML = " "
          Storylist2.listStory2();
          document.querySelector(".Arti1").style.display = "none";

        })

    })

    let StoryItemArticle = document.querySelector(`.Story`)

    StoryItemArticle.appendChild(StoryNameField)
    StoryItemArticle.appendChild(StoryPicturesField)
    StoryItemArticle.appendChild(StoryStorysField)
    StoryItemArticle.appendChild(updateButton)
  }
}
export default StoryEditForm
