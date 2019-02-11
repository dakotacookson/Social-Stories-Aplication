import API from "../api"
import StoryList from "./Storylist"
import StoryEditForm from "./StoryEditForm"
import StoryForm from "./StoryForm"
const Storys = {
    StoryBuilder(StoryObj) {
        const StoryArticle = document.querySelector(".Story")
        const StoryName = document.createElement("h2");
        const StoryPicture = document.createElement("img");
        const StoryPicture2= document.createElement("img");
        const StoryPicture3 = document.createElement("img");
        const VAR = StoryObj.picture;
        const VAR2 = StoryObj.picture2;
        const VAR3 = StoryObj.picture3;
        StoryPicture.setAttribute(`src`, `${VAR}`)
        StoryPicture2.setAttribute(`src`, `${VAR2}`)
        StoryPicture3.setAttribute(`src`, `${VAR3}`)
        const Story = document.createElement("p");
        const StoryOutputSection = document.createElement("article");
        StoryOutputSection.setAttribute("Id", `${StoryObj.id}`)
        StoryOutputSection.setAttribute("Class", `Arti1`)
        StoryArticle.appendChild(StoryOutputSection);

        StoryOutputSection.appendChild(StoryName);
        StoryOutputSection.appendChild(StoryPicture);
        StoryOutputSection.appendChild(StoryPicture2);
        StoryOutputSection.appendChild(StoryPicture3);
        StoryOutputSection.appendChild(Story);

        StoryName.textContent = StoryObj.title;
        StoryPicture.textContent = StoryObj.picture;
        StoryPicture2.textContent = StoryObj.picture2;
        StoryPicture3.textContent = StoryObj.picture3;
        Story.textContent = StoryObj.Text;

        const Back = document.createElement("button")
        Back.setAttribute("Class", "BackButton")
        Back.textContent = "Back"
        Back.addEventListener("click", () => {
            document.querySelector(".Arti1").style.display = "none";
            document.querySelector(".Story").innerHTML = " "
            StoryForm.StoryFormBuilder()

        })
        StoryOutputSection.appendChild(Back);


        const StoryEditButton = document.createElement("button");
        StoryOutputSection.appendChild(StoryEditButton);
        StoryEditButton.textContent = "Edit";
        StoryEditButton.setAttribute("Class", "EditButton")
        StoryEditButton.addEventListener("click", () => {
            let articleId = event.target.parentNode.id;
            let StoryId = StoryObj.id
            API.getData3(StoryId)
                .then(response => {
                    StoryEditForm.createAndAppendForm(StoryObj, articleId)
                })
        })
        const StoryDeleteButton = document.createElement("button");
        StoryOutputSection.appendChild(StoryDeleteButton);
        StoryDeleteButton.textContent = "Delete";
        StoryDeleteButton.setAttribute("Class", "DeleteButton")
        StoryDeleteButton.addEventListener("click", () => {
            let StoryId2 = StoryObj.id
            API.deleteData(StoryId2)
                .then(response => {
                    const restart = document.querySelector(".Arti1")
                    let titledelete = document.querySelector(`#Title--${StoryObj.id}`)
                    titledelete.innerHTML = " "
                    restart.innerHTML = " "
                    document.querySelector(".Arti1").style.display = "none";

                    StoryList.listStory();
                    StoryForm.StoryFormBuilder()
                })
        })
    }
}


export default Storys