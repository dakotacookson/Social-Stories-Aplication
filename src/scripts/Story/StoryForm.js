import API from "../api"
import StoryList from "./StoryList"
import Storylist2 from "./StoryList/StoryList2"

const StoryFormStoryInput = document.createElement("input");
const StoryFormStorysInput = document.createElement("input");
const Picturesinput = document.createElement("input");
const Picturesinput2 = document.createElement("input");
const Picturesinput3 = document.createElement("input");

const StoryForm = {
    StoryFormBuilder() {
        const StoryArticle = document.querySelector(".Storyform");
        let StoryFormSection = document.querySelector(".stories")
        StoryArticle.append(StoryFormSection);
        const StoryFormHeader = document.createElement("h3");
        StoryFormHeader.setAttribute("Class", "StoryHeader")
        StoryFormSection.appendChild(StoryFormHeader);
        StoryFormHeader.textContent = "Story Name";
        StoryFormSection.appendChild(StoryFormStoryInput);
        StoryFormStoryInput.placeholder = "Story Name";
        StoryFormSection.appendChild(StoryFormStorysInput);
        StoryFormStorysInput.placeholder = "Story";
        StoryFormSection.appendChild(Picturesinput);
        Picturesinput.textContent = "Add Picture";
        Picturesinput.placeholder = "Picture URL";
        StoryFormSection.appendChild(Picturesinput2);
        Picturesinput2.textContent = "Add Picture";
        Picturesinput2.placeholder = "Picture URL";
        StoryFormSection.appendChild(Picturesinput3);
        Picturesinput3.textContent = "Add Picture";
        Picturesinput3.placeholder = "Picture URL";
        const addStoryButton = document.createElement("button");
        StoryFormSection.appendChild(addStoryButton);
        addStoryButton.textContent = "Add Story";
        addStoryButton.addEventListener("click", this.addStoryToJSON);
    },
    addStoryToJSON() {

        console.log("Button Works");
        const StoryTitle = StoryFormStoryInput.value;
        const StoryStorys = StoryFormStorysInput.value;
        const Pictures2 = Picturesinput.value;
        const Pictures3= Picturesinput2.value;
        const Pictures = Picturesinput3.value;
        const currentUserId = sessionStorage.getItem("userId");
        const userId = JSON.parse(currentUserId);

        let newStory = {
            title: StoryTitle,
            picture: Pictures,
            picture2: Pictures2,
            picture3: Pictures3,
            Text: StoryStorys,
            userId: userId
        }

        console.log(newStory);
        API.postNewData("Stories", newStory)
            .then(response => {
                document.querySelector(".Story").innerHTML = " "
                StoryList.listStory();
                document.querySelector(".Story2").innerHTML = " "
                Storylist2.listStory2();
            })

    }
}

export default StoryForm