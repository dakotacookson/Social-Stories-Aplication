import API from "../api"
import Storylist2 from "./StoryList/listitorator"

const StoryFormStoryInput = document.createElement("input");
const StoryFormStorysInput = document.createElement("textarea");
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
        StoryFormHeader.textContent = "Add Story";
        StoryFormSection.appendChild(StoryFormStoryInput);
        StoryFormStoryInput.placeholder = "Story Name";
        StoryFormStoryInput.setAttribute("Class", "Storyinput")
        StoryFormSection.appendChild(Picturesinput);
        Picturesinput.textContent = "Add Picture";
        Picturesinput.placeholder = "Picture URL";
        Picturesinput.setAttribute("Class", "Picinput1")
        StoryFormSection.appendChild(Picturesinput2);
        Picturesinput2.textContent = "Add Picture";
        Picturesinput2.placeholder = "Picture URL";
        Picturesinput2.setAttribute("Class", "Picinput2")
        StoryFormSection.appendChild(Picturesinput3);
        Picturesinput3.textContent = "Add Picture";
        Picturesinput3.placeholder = "Picture URL";
        Picturesinput3.setAttribute("Class", "Picinput3")
        StoryFormSection.appendChild(StoryFormStorysInput);
        StoryFormStorysInput.placeholder = "Story";
        let  break1 = document.createElement("br")
        StoryFormSection.appendChild(break1)
        StoryFormStorysInput.setAttribute("Class", "Storytext")
        const addStoryButton = document.createElement("button");
        addStoryButton.setAttribute("class" , "selctorbutton1")
        StoryFormSection.appendChild(addStoryButton);
        addStoryButton.textContent = "Add Story";
        addStoryButton.addEventListener("click", () => {
            //rudementry form validation
            let nameipnut = document.querySelector(".Storyinput")
            if (nameipnut.value.length == 0) {
                alert("No Story!")
            } else {
                (nameipnut.value.length > 0)
                StoryForm.addStoryToJSON()
            }
        })
    },
    addStoryToJSON() {
        console.log("Button Works");
        const StoryTitle = StoryFormStoryInput.value;
        const StoryStorys = StoryFormStorysInput.value;
        const Pictures2 = Picturesinput.value;
        const Pictures3 = Picturesinput2.value;
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
                document.querySelector(".Story2").innerHTML = " "
                console.log(response)
                //cleareing and reentering placeholder values
                document.querySelector(".Storyinput").value = "";
                document.querySelector(".Storyinput").placeholder = "Story Name";
                document.querySelector(".Storytext").value = "";
                document.querySelector(".Storytext").placeholder = "Story";
                document.querySelector(".Picinput1").value = "";
                document.querySelector(".Picinput1").placeholder = "Picture URL";
                document.querySelector(".Picinput2").value = "";
                document.querySelector(".Picinput2").placeholder = "Picture URL";
                document.querySelector(".Picinput3").value = "";
                document.querySelector(".Picinput3").placeholder = "Picture URL";
                Storylist2.listStory2()
            })

    }
}

export default StoryForm