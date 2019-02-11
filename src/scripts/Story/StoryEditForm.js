import API from "../api"
import Storylist from "./StoryList"
import Storylist2 from "./StoryList/StoryList2"
import StoryForm from "./StoryForm"
const StoryEditForm = {
  createAndAppendForm(StoryObj, articleId) {
    let StoryNameField = document.createElement("p")
    let StoryStorysField = document.createElement("p")
    let StoryPicturesField = document.createElement("p")

    let StoryNameLabel = document.createElement("label")
    StoryNameLabel.textContent = " Title"
    let StoryNameInput = document.createElement("input")
    StoryNameInput.setAttribute("Class", "Input1")
    StoryNameInput.value = StoryObj.title

    StoryNameField.appendChild(StoryNameInput)
    StoryNameField.appendChild(StoryNameLabel)

    let StoryPictureLabel = document.createElement("label")
    let StoryPictureLabel2 = document.createElement("label")
    let StoryPictureLabel3 = document.createElement("label")
    StoryPictureLabel.textContent = " Picture"
    StoryPictureLabel2.textContent = " Picture"
    StoryPictureLabel3.textContent = " Picture"
    let StoryPictureInput = document.createElement("input")
    let StoryPictureInput2 = document.createElement("input")
    let StoryPictureInput3 = document.createElement("input")
    StoryPictureInput.setAttribute("Class", "Input3")
    StoryPictureInput.value = StoryObj.picture
    StoryPictureInput2.value = StoryObj.picture2
    StoryPictureInput3.value = StoryObj.picture3

    StoryPicturesField.appendChild(StoryPictureInput)
    StoryPicturesField.appendChild(StoryPictureLabel)

    StoryPicturesField.appendChild(StoryPictureInput2)
    StoryPicturesField.appendChild(StoryPictureLabel2)

    StoryPicturesField.appendChild(StoryPictureInput3)
    StoryPicturesField.appendChild(StoryPictureLabel3)




    let StoryStorysLabel = document.createElement("label")
    StoryStorysLabel.textContent = " Story"
    let StoryStorysInput = document.createElement("input")
    StoryStorysInput.setAttribute("Class", "Input2")
    StoryStorysInput.value = StoryObj.Text

    StoryStorysField.appendChild(StoryStorysInput)
    StoryStorysField.appendChild(StoryStorysLabel)


    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"
    updateButton.addEventListener("click", () => {
      StoryForm.StoryFormBuilder()
      const userId = sessionStorage.getItem("userId");
      const currentUserId = JSON.parse(userId);

      let editedStory = {
        title: StoryNameInput.value,
        picture: StoryPictureInput.value,
        picture2: StoryPictureInput2.value,
        picture3: StoryPictureInput3.value,
        Text: StoryStorysInput.value,
        userId: currentUserId
      }

      API.putExistingStory(articleId, editedStory)
        .then(response => {
          document.querySelector(".Story").innerHTML = " "
          Storylist.listStory(StoryObj);
          document.querySelector(".Story2").innerHTML = " "
          Storylist2.listStory2();
          console.log(response)

        })

    })

    let StoryItemArticle = document.querySelector(".Story")

    StoryItemArticle.appendChild(StoryNameField)
    StoryItemArticle.appendChild(StoryPicturesField)
    StoryItemArticle.appendChild(StoryStorysField)
    StoryItemArticle.appendChild(updateButton)
  }
}
export default StoryEditForm
