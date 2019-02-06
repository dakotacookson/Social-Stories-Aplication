import API from "../api"
import StoryList from "./StoryList"

const StoryFormStoryInput = document.createElement("input");
const StoryFormStorysInput = document.createElement("input");
const Picturesinput = document.createElement("input");

const StoryForm = {
    StoryFormBuilder() {
        const StoryArticle = document.querySelector(".Storyform");
        const StoryFormSection = document.createElement("section");
        StoryFormSection.setAttribute("Class" ,  "stories")
        StoryArticle.appendChild(StoryFormSection);
        const StoryFormHeader = document.createElement("h3");
        StoryFormSection.appendChild(StoryFormHeader);
        StoryFormHeader.textContent = "Story Name";

        StoryFormSection.appendChild(StoryFormStoryInput);
        StoryFormStoryInput.placeholder = "Story Name";

        StoryFormSection.appendChild(StoryFormStorysInput);
        StoryFormStorysInput.placeholder = "Story";
        StoryFormSection.appendChild(Picturesinput);
        Picturesinput.textContent = "Add Picture";
        Picturesinput.placeholder = "Picture URL";
        const addStoryButton = document.createElement("button");
        StoryFormSection.appendChild(addStoryButton);
        addStoryButton.textContent = "Add Story";
        addStoryButton.addEventListener("click", this.addStoryToJSON);
    },
    addStoryToJSON() {
        console.log("Button Works");
        const StoryTitle = StoryFormStoryInput.value;
        const StoryStorys = StoryFormStorysInput.value;
        const Pictures = Picturesinput.value;
        const currentUserId = sessionStorage.getItem("userId");
        const userId = JSON.parse(currentUserId);

        let newStory = {
            title: StoryTitle,
            picture: Pictures,
            Text: StoryStorys,
            userId: userId
        }

        console.log(newStory);

        API.postNewData("Stories",newStory)
        .then(response => {
            StoryList.listStory();
window.location.reload()
        })

    }
}

export default StoryForm